using Microsoft.EntityFrameworkCore;
using Naorobi.Api.Models;

namespace Naorobi.Api.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Admin> Admins { get; set; }
        public DbSet<Carro> Carros { get; set; }
        public DbSet<Reserva> Reservas { get; set; }
    }
}
