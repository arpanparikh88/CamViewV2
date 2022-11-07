using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using OrchardCore;

namespace CamViewV2.Pages
{
    public class ConstructionPageModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;
        private readonly IOrchardHelper _orchard;
        private readonly IndexModel _model;

        public IActionResult OnGetPartial() =>
            Partial("ConstructionPage");

        
        public ConstructionPageModel(ILogger<IndexModel> logger, IOrchardHelper orchard)
        {
            _logger = logger;
            _orchard = orchard;
            _model = new IndexModel(logger, orchard); 
        }
    }
}
