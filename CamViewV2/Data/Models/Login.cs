using System.ComponentModel.DataAnnotations;

namespace CamViewV2.Data.Models
{
    public class Login
    {
        [Required]
        [MinLength(1)]
        public string Username { get; set; }
        [Required]
        [MinLength(1)]
        public string Password { get; set; }
    }
}
