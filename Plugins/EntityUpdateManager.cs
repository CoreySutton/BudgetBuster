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
            _ctx = ctx;
            _entity = new TEntity
            {
                Id = entityId
            };
        }

        internal void RunTypes(params Type[] pluginActions)
        {
            foreach (Type pluginAction in pluginActions)
            {
                var pluginActionInstance = (PluginAction<TEntity>)Activator.CreateInstance(pluginAction);
                pluginActionInstance.Execute(_entity);
            }
        }

        internal void RunActions(params PluginAction<TEntity>[] pluginActions)
        {
            foreach (PluginAction<TEntity> pluginAction in pluginActions)
            {
                pluginAction.Execute(_entity);
            }
        }

        internal void Commit()
        {
            if (_entity.Attributes.Count > 1)
            {
                _ctx.OrgService.Update(_entity);
            }
        }
    }
}
