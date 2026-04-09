using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Naorobi.Api.Models
{
    public class Carro
    {
        [Key]
        public int Id_Carro { get; set; }
        
        public string Marca { get; set; }
        public string Modelo { get; set; }
        public int Precio_Renta_Diario { get; set; }
        public int Caballos_Fuerza { get; set; }
        public int Maxima_Velocidad { get; set; }
        public string Tipo_Motor { get; set; }
        public string Transmision { get; set; }
        public string Tipo_Combustible { get; set; }
        
        public int Id_Admin { get; set; }
        
        [ForeignKey("Id_Admin")]
        public Admin Admin { get; set; }
    }
}
