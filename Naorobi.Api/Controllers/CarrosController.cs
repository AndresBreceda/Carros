using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using Naorobi.Api.Models;

namespace Naorobi.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarrosController : ControllerBase
    {
        private readonly IMongoCollection<Carro> _carros;

        public CarrosController(IMongoDatabase database)
        {
            _carros = database.GetCollection<Carro>("carros");
        }

        // 🔓 Obtener todos los carros
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var carros = await _carros.Find(_ => true).ToListAsync();
            return Ok(carros);
        }

        // 🔓 Obtener por id
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(string id)
        {
            var carro = await _carros.Find(c => c.Id == id).FirstOrDefaultAsync();

            if (carro == null)
                return NotFound();

            return Ok(carro);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] Carro carro)
        {
            await _carros.InsertOneAsync(carro);
            return Ok(carro);
        }

        // 🔐 Actualizar
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(string id, [FromBody] Carro updatedCarro)
        {
            var result = await _carros.ReplaceOneAsync(c => c.Id == id, updatedCarro);

            if (result.MatchedCount == 0)
                return NotFound();

            return Ok(updatedCarro);
        }

        // 🔐 Eliminar
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var result = await _carros.DeleteOneAsync(c => c.Id == id);

            if (result.DeletedCount == 0)
                return NotFound();

            return Ok(new { message = "Carro eliminado" });
        }
    }
}