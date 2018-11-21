using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;

namespace CoreySutton.BudgetBuster.Plugins
{
    internal class IncomeDao : ContextService
    {
        internal IncomeDao(LocalContext ctx) : base(ctx)
        {
            Ctx.Tracer.Ctor(nameof(IncomeDao));
        }

        internal IList<cs_income> Get(Guid budgetId, ColumnSet columnSet = null)
        {
            Ctx.Tracer.FuncStart(nameof(Get));

            var query = new QueryExpression(cs_income.EntityLogicalName)
            {
                ColumnSet = columnSet ?? new ColumnSet(true),
                Criteria =
                {
                    Conditions =
                    {
                        new ConditionExpression(
                            nameof(cs_income.cs_Budget).ToLower(), ConditionOperator.Equal, budgetId)
                    }
                }
            };

            IList<cs_income> incomes = RetrieveMultiple(query);

            Ctx.Tracer.FuncEnd(nameof(Get));
            return incomes;
        }

        private IList<cs_income> RetrieveMultiple(QueryExpression query)
        {
            Ctx.Tracer.FuncEnd(nameof(RetrieveMultiple));

            EntityCollection ec = Ctx.OrgService.RetrieveMultiple(query);
            IList<cs_income> incomes = ec?.Entities?.Select(e => e.ToEntity<cs_income>()).ToList();

            Ctx.Tracer.FuncEnd(nameof(RetrieveMultiple));
            return incomes;
        }
    }
}
