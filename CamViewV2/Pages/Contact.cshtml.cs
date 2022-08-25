using CamViewV2.Data.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace CamViewV2.Pages
{
    public class ContactModel : PageModel
    {
        [BindProperty]
        // populate from incoming request data
        public Customer? NewCustomer { get; set; }
        
        public void OnGet()
        {
        }

        public void OnPost()
        {
            // Save customer to db
        }
    }
}
