using System.Collections.Generic;
using System.Linq;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;

namespace CoreySutton.BudgetBuster.Plugins
{
    internal class Rollup : ContextService
    {
        internal Rollup(LocalContext ctx) : base(ctx)
        {
            Ctx.Tracer.Ctor(nameof(Rollup));
        }

        internal QueryExpression Query { get; set; }

        internal Money GetRollupValue(string valueAttributeName)
        {
            Ctx.Tracer.FuncStart(nameof(GetRollupValue));

            IList<Entity> entities = RunQuery();
            IList<Money> values = GetValues(entities, valueAttributeName);
            Money sum = MoneyHelper.Sum(values);

            Ctx.Tracer.FuncEnd(nameof(GetRollupValue));

            return sum;
        }

        private IList<Entity> RunQuery()
        {
            EntityCollection results = Ctx.OrgService.RetrieveMultiple(Query);
            return results?.Entities?.ToList();
        }

        private IList<Money> GetValues(IList<Entity> entities, string valueAttributeName)
        {
            return entities?.Select(e => e.GetAttributeValue<Money>(valueAttributeName)).ToList();
        }
    }
}
