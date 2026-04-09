using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Naorobi.Api.Data;

namespace Naorobi.Api.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class CarrosController : ControllerBase
    {
        private readonly AppDbContext _context;
        public CarrosController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetCarros()
        {
            var carros = await _context.Carros.ToListAsync();
            return Ok(carros);
        }
    }
}
