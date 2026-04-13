using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using MongoDB.Driver;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using BCrypt.Net;
using Naorobi.Api.Models;

namespace Naorobi.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IMongoCollection<Usuario> _usuarios;
        private readonly IMongoCollection<Admin> _admins;
        private readonly IConfiguration _configuration;

        public AuthController(IMongoDatabase database, IConfiguration configuration)
        {
            _usuarios = database.GetCollection<Usuario>("Usuarios");
            _admins = database.GetCollection<Admin>("Admins");
            _configuration = configuration;
        }

        public class LoginRequest
        {
            public string Email { get; set; }
            public string Password { get; set; }
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            var usuario = await _usuarios
                .Find(u => u.Email == request.Email)
                .FirstOrDefaultAsync();

            if (usuario == null)
                return Unauthorized(new { message = "Credenciales inválidas" });

            // 🔐 Verificar hash
            bool isValid = BCrypt.Net.BCrypt.Verify(request.Password, usuario.Contraseña);

            if (!isValid)
                return Unauthorized(new { message = "Credenciales inválidas" });

            return Ok(new
            {
                token = GenerateJwtToken(usuario.Email, "Usuario", usuario.Id)
            });
        }
        private string GenerateJwtToken(string email, string role, string id)
        {
            var securityKey = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]!)
            );

            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, id.ToString()),
                new Claim(ClaimTypes.Email, email),
                new Claim(ClaimTypes.Role, role)
            };

            var token = new JwtSecurityToken(
                issuer: _configuration["Jwt:Issuer"],
                audience: _configuration["Jwt:Audience"],
                claims: claims,
                expires: DateTime.UtcNow.AddHours(2),
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] Usuario usuario)
        {
            // 🔐 Hashear contraseña
            usuario.Contraseña = BCrypt.Net.BCrypt.HashPassword(usuario.Contraseña);

            await _usuarios.InsertOneAsync(usuario);

            return Ok(new { message = "Usuario creado" });
        }
    }
}