using Microsoft.AspNetCore.Mvc.RazorPages;
using OrchardCore;

namespace CamViewV2.Pages
{
    public class IndexModel : PageModel
    {
        public dynamic Solutions { get; set; }
        public dynamic ConstructionServices { get; set; }
        
        public dynamic CommunityServices { get; set; }

        public dynamic CommercialServices { get; set; }

        public dynamic IndustrialServices { get; set; }

        public dynamic CarServices { get; set; }

        private readonly ILogger<IndexModel> _logger;
        private readonly IOrchardHelper _orchard;

        public IndexModel(ILogger<IndexModel> logger, IOrchardHelper orchard)
        {
            _logger = logger;
            _orchard = orchard;
        }

        public async Task OnGetAsync()
        {
           Solutions = await _orchard.GetContentItemByAliasAsync("alias:solutions");

           ConstructionServices = await _orchard.GetContentItemByAliasAsync("alias:constructionservices");

           CommunityServices = await _orchard.GetContentItemByAliasAsync("alias:communityservices");

           CommercialServices = await _orchard.GetContentItemByAliasAsync("alias:commercialservices");

           IndustrialServices = await _orchard.GetContentItemByAliasAsync("alias:industrialservices");

           CarServices = await _orchard.GetContentItemByAliasAsync("alias:carservices");

        }

    }
}