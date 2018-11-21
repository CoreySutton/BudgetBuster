using System;
using Microsoft.Xrm.Sdk;

namespace CoreySutton.BudgetBuster.Plugins
{
    internal class EntityUpdateManager<TEntity> where TEntity : Entity, new()
    {
        private readonly LocalContext _ctx;
        private readonly TEntity _entity;

        internal EntityUpdateManager(LocalContext ctx, Guid entityId)
        {
            ctx.Tracer.Ctor(nameof(EntityUpdateManager<TEntity>));

            _ctx = ctx;
            _entity = new TEntity
            {
                Id = entityId
            };
        }

        internal void RunTypes(params Type[] pluginActions)
        {
            _ctx.Tracer.FuncStart(nameof(RunTypes));

            foreach (Type pluginAction in pluginActions)
            {
                var pluginActionInstance = (PluginAction<TEntity>)Activator.CreateInstance(pluginAction);
                pluginActionInstance.Execute(_entity);
            }

            _ctx.Tracer.FuncEnd(nameof(RunTypes));
        }

        internal void RunActions(params PluginAction<TEntity>[] pluginActions)
        {
            _ctx.Tracer.FuncStart(nameof(RunActions));

            foreach (PluginAction<TEntity> pluginAction in pluginActions)
            {
                pluginAction.Execute(_entity);
            }

            _ctx.Tracer.FuncEnd(nameof(RunActions));
        }

        internal void Commit()
        {
            _ctx.Tracer.FuncStart(nameof(Commit));

            if (_entity.Attributes.Count > 1)
            {
                _ctx.OrgService.Update(_entity);
            }

            _ctx.Tracer.FuncEnd(nameof(Commit));
        }
    }
}
