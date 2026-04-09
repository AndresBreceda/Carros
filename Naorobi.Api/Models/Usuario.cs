using System.ComponentModel.DataAnnotations;

namespace Naorobi.Api.Models
{
    public class Usuario
    {
        [Key]
        public int Id_Usuario { get; set; }
        
        [Required]
        public string Email { get; set; }
        
        [Required]
        public string Contraseña { get; set; }
    }
}
