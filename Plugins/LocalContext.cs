using System;
using Microsoft.Xrm.Sdk;

namespace CoreySutton.BudgetBuster.Plugins
{
    internal class LocalContext
    {
        internal readonly ITracingService tracingService;
        internal readonly IPluginExecutionContext context;
        internal readonly IOrganizationService orgService;
        internal readonly IOrganizationService elevatedOrgService;

        internal LocalContext(IServiceProvider serviceProvider)
        {
            tracingService = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));

            // Obtain the organization service reference.
            IOrganizationServiceFactory serviceFactory = 
                (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            orgService = serviceFactory.CreateOrganizationService(context.UserId);
            elevatedOrgService = serviceFactory.CreateOrganizationService(null);
        }
    }
}
