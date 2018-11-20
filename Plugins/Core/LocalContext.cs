using System;
using Microsoft.Xrm.Sdk;

namespace CoreySutton.BudgetBuster.Plugins
{
    internal class LocalContext
    {
        internal readonly ITracingService TracingService;
        internal readonly IPluginExecutionContext Context;
        internal readonly IOrganizationService OrgService;
        internal readonly IOrganizationService ElevatedOrgService;

        internal LocalContext(IServiceProvider serviceProvider)
        {
            TracingService = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            Context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));

            // Obtain the organization service reference.
            IOrganizationServiceFactory serviceFactory = 
                (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            OrgService = serviceFactory.CreateOrganizationService(Context.UserId);
            ElevatedOrgService = serviceFactory.CreateOrganizationService(null);
        }
    }
}
