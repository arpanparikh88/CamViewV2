using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace CamViewV2.Pages
{
    public class CostSavingsCalculatorModel : PageModel
    {
        [TempData]
        public string ResultInfo { get; set; }

        [BindProperty]
        [Required]
        public int Hours { get; set; }

        [BindProperty]
        [Required]
        public int NumberOfDays { get; set; }

        [BindProperty]
        [Required]
        public int HourlyRate { get; set; }

        [BindProperty]
        [Required]
        public int NumberOfUnits { get; set; }

        public int SavingsNumber { get; set; }

        public void OnGet()
        {
        }

        public IActionResult OnPost()
        {
            int result = Hours * NumberOfDays * HourlyRate * 52;


            if (NumberOfUnits == 1)
            {
                SavingsNumber = (Convert.ToInt32(result) - 9000);
                ResultInfo = $"You save ${SavingsNumber} by switching to LGT!";
            }
            else if (NumberOfUnits == 2)
            {
                SavingsNumber = (Convert.ToInt32(result) - 18000);
                ResultInfo = $"You save ${SavingsNumber} by switching to LGT!";
            }
            else if (NumberOfUnits == 3)
            {
                SavingsNumber = (Convert.ToInt32(result) - 27000);
                ResultInfo = $"You save ${SavingsNumber} by switching to LGT!";
            }

            return Page();
        }

        public void OnClick()
        {
            Console.WriteLine("Clicked");

        }
    }
}
