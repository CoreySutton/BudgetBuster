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

        public static TEntity GetPreImage<TEntity>(IPluginExecutionContext ctx, string imageName)
            where TEntity : Entity
        {
            return ctx.PreEntityImages[imageName].ToEntity<TEntity>();
        }

        public static TEntity GetPostImage<TEntity>(IPluginExecutionContext ctx, string imageName)
            where TEntity : Entity
        {
            return ctx.PostEntityImages[imageName].ToEntity<TEntity>();
        }
    }
}
