using Microsoft.Xrm.Sdk;

namespace CoreySutton.BudgetBuster.Plugins
{
    internal static class ImageHelper
    {
        internal static TEntity GetTarget<TEntity>(IPluginExecutionContext ctx)
            where TEntity : Entity
        {
            return ((Entity)ctx.InputParameters["Target"]).ToEntity<TEntity>();
        }
    }
}
