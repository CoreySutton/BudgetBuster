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
        internal readonly Tracer Tracer;

        internal LocalContext(IServiceProvider serviceProvider)
        {
            TracingService = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            Context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            IOrganizationServiceFactory serviceFactory =
                (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            OrgService = serviceFactory.CreateOrganizationService(Context.UserId);
            ElevatedOrgService = serviceFactory.CreateOrganizationService(null);
            Tracer = new Tracer(TracingService, Context);
        }
    }
}
