using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using Naorobi.Api.Models;

namespace Naorobi.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReservasController : ControllerBase
    {
        private readonly IMongoDatabase _database;
        private readonly IMongoCollection<Reserva> _reservas;
        private readonly IMongoCollection<Carro> _carros;

        public ReservasController(IMongoDatabase database)
        {
            _database = database;

            _reservas = database.GetCollection<Reserva>("Reservas");
            _carros = database.GetCollection<Carro>("Carros");
        }

        // ✅ GET: api/reservas
        [HttpGet]
        public async Task<ActionResult<List<Reserva>>> Get()
        {
            var reservas = await _reservas.Find(_ => true).ToListAsync();
            return Ok(reservas);
        }

        [HttpGet("con-carros")]
        public async Task<ActionResult> GetReservasConCarros()
        {
            var reservas = await _reservas.Find(_ => true).ToListAsync();

            var resultado = new List<object>();

            foreach (var reserva in reservas)
            {
                var carro = await _carros
                    .Find(c => c.Id.ToString() == reserva.Id_Carro.ToString())
                    .FirstOrDefaultAsync();

                resultado.Add(new
                {
                    reserva.Id,
                    reserva.Fecha_Inicio,
                    reserva.Fecha_Final,
                    Carro = carro
                });
            }

            return Ok(resultado);
        }

        // ✅ GET: api/reservas/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Reserva>> GetById(string id)
        {
            var reserva = await _reservas.Find(r => r.Id == id).FirstOrDefaultAsync();

            if (reserva == null)
                return NotFound();

            return Ok(reserva);
        }

        // ✅ POST: api/reservas
        [HttpPost]
        public async Task<ActionResult> Create(Reserva reserva)
        {
            await _reservas.InsertOneAsync(reserva);
            return Ok(reserva);
        }

        // ✅ PUT: api/reservas/{id}
        [HttpPut("{id}")]
        public async Task<ActionResult> Update(string id, Reserva reserva)
        {
            var result = await _reservas.ReplaceOneAsync(r => r.Id == id, reserva);

            if (result.MatchedCount == 0)
                return NotFound();

            return Ok(reserva);
        }

        // ✅ DELETE: api/reservas/{id}
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(string id)
        {
            var result = await _reservas.DeleteOneAsync(r => r.Id == id);

            if (result.DeletedCount == 0)
                return NotFound();

            return Ok(new { message = "Reserva eliminada" });
        }
    }
}