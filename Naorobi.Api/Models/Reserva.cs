using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Naorobi.Api.Models
{
    public class Reserva
    {
        [Key]
        public int Id_Reserva { get; set; }
        
        public DateTime Fecha_Inicio { get; set; }
        public DateTime Fecha_Final { get; set; }
        
        public int Id_Carro { get; set; }
        [ForeignKey("Id_Carro")]
        public Carro Carro { get; set; }
        
        public int Id_Usuario { get; set; }
        [ForeignKey("Id_Usuario")]
        public Usuario Usuario { get; set; }
    }
}
