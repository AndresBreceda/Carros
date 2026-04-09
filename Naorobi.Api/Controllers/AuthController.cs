using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Naorobi.Api.Data;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Naorobi.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IConfiguration _configuration;

        public AuthController(AppDbContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        public class LoginRequest {
            public string Email { get; set; }
            public string Password { get; set; }
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            var admin = await _context.Admins.FirstOrDefaultAsync(a => a.Email == request.Email && a.Contraseña == request.Password);
            if (admin != null)
            {
                return Ok(new { token = GenerateJwtToken(admin.Email, "Admin", admin.Id_Admin) });
            }

            var usuario = await _context.Usuarios.FirstOrDefaultAsync(u => u.Email == request.Email && u.Contraseña == request.Password);
            if (usuario != null)
            {
                return Ok(new { token = GenerateJwtToken(usuario.Email, "Usuario", usuario.Id_Usuario) });
            }

            return Unauthorized(new { message = "Email o contraseña incorrectos" });
        }

        private string GenerateJwtToken(string email, string role, int id)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]!));
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
                expires: DateTime.Now.AddHours(2),
                signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
