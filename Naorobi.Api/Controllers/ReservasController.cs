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
            // ✅ Mismo nombre de colección que CarrosController
            _carros = database.GetCollection<Carro>("carros");
        }

        // ✅ GET: api/reservas  — devuelve reservas con el carro incluido
        [HttpGet]
        public async Task<ActionResult> Get()
        {
            var reservas = await _reservas.Find(_ => true).ToListAsync();

            var resultado = new List<object>();

            foreach (var reserva in reservas)
            {
                // ✅ Comparación directa de string  (sin .ToString() extra)
                var carro = await _carros
                    .Find(c => c.Id == reserva.Id_Carro)
                    .FirstOrDefaultAsync();

                resultado.Add(new
                {
                    reserva.Id,
                    reserva.Fecha_Inicio,
                    reserva.Fecha_Final,
                    reserva.Id_Carro,
                    reserva.Id_Usuario,
                    reserva.Estado,
                    Carro = carro
                });
            }

            return Ok(resultado);
        }

        // GET: api/reservas/con-carros  (mantenido por compatibilidad)
        [HttpGet("con-carros")]
        public async Task<ActionResult> GetReservasConCarros()
        {
            return await Get();
        }

        // ✅ GET: api/reservas/usuario/{userId}  — reservas del usuario logueado
        [HttpGet("usuario/{userId}")]
        public async Task<ActionResult> GetByUsuario(string userId)
        {
            var reservas = await _reservas.Find(r => r.Id_Usuario == userId).ToListAsync();

            var resultado = new List<object>();

            foreach (var reserva in reservas)
            {
                var carro = await _carros
                    .Find(c => c.Id == reserva.Id_Carro)
                    .FirstOrDefaultAsync();

                resultado.Add(new
                {
                    reserva.Id,
                    reserva.Fecha_Inicio,
                    reserva.Fecha_Final,
                    reserva.Id_Carro,
                    reserva.Id_Usuario,
                    reserva.Estado,
                    Carro = carro
                });
            }

            return Ok(resultado);
        }

        // ✅ GET: api/reservas/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult> GetById(string id)
        {
            var reserva = await _reservas.Find(r => r.Id == id).FirstOrDefaultAsync();

            if (reserva == null)
                return NotFound();

            var carro = await _carros
                .Find(c => c.Id == reserva.Id_Carro)
                .FirstOrDefaultAsync();

            return Ok(new
            {
                reserva.Id,
                reserva.Fecha_Inicio,
                reserva.Fecha_Final,
                reserva.Id_Carro,
                reserva.Id_Usuario,
                reserva.Estado,
                Carro = carro
            });
        }

        // ✅ POST: api/reservas
        [HttpPost]
        public async Task<ActionResult> Create(Reserva reserva)
        {
            await _reservas.InsertOneAsync(reserva);

            // Devuelve la reserva con el carro incluido
            var carro = await _carros
                .Find(c => c.Id == reserva.Id_Carro)
                .FirstOrDefaultAsync();

            return Ok(new
            {
                reserva.Id,
                reserva.Fecha_Inicio,
                reserva.Fecha_Final,
                reserva.Id_Carro,
                reserva.Id_Usuario,
                reserva.Estado,
                Carro = carro
            });
        }

        // ✅ PUT: api/reservas/{id}
        [HttpPut("{id}")]
        public async Task<ActionResult> Update(string id, Reserva reserva)
        {
            var result = await _reservas.ReplaceOneAsync(r => r.Id == id, reserva);

            if (result.MatchedCount == 0)
                return NotFound();

            var carro = await _carros
                .Find(c => c.Id == reserva.Id_Carro)
                .FirstOrDefaultAsync();

            return Ok(new
            {
                reserva.Id,
                reserva.Fecha_Inicio,
                reserva.Fecha_Final,
                reserva.Id_Carro,
                reserva.Id_Usuario,
                reserva.Estado,
                Carro = carro
            });
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