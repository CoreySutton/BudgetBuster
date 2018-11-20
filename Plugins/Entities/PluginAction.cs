using Microsoft.Xrm.Sdk;

namespace CoreySutton.BudgetBuster.Plugins
{
    internal abstract class PluginAction<TEntity> : ContextService where TEntity : Entity, new()
    {
        protected PluginAction(LocalContext ctx) : base(ctx) { }

        internal abstract void Execute(TEntity entity);
    }
}
