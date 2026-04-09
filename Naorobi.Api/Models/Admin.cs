using System.ComponentModel.DataAnnotations;

namespace Naorobi.Api.Models
{
    public class Admin
    {
        [Key]
        public int Id_Admin { get; set; }
        
        [Required]
        public string Email { get; set; }
        
        [Required]
        public string Contraseña { get; set; }
    }
}
