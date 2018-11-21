using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;

namespace CoreySutton.BudgetBuster.Plugins
{
    internal class ExpenseRetriever : ContextService
    {
        private QueryExpression ValuesQuery(Guid budgetId) => new QueryExpression(cs_expense.EntityLogicalName)
        {
            ColumnSet = new ColumnSet(nameof(cs_expense.cs_Value).ToLower()),
            Criteria =
            {
                Conditions =
                {
                    new ConditionExpression(nameof(cs_expense.cs_Budget).ToLower(), ConditionOperator.Equal, budgetId)
                }
            }
        };

        internal ExpenseRetriever(LocalContext ctx) : base(ctx)
        {
            Ctx.Tracer.Ctor(nameof(ExpenseRetriever));
        }

        internal List<Money> GetValues(Guid budgetId)
        {
            Ctx.Tracer.FuncStart(nameof(GetValues));

            EntityCollection ec = Ctx.OrgService.RetrieveMultiple(ValuesQuery(budgetId));
            List<Money> values = ec?.Entities?.Select(e => e.ToEntity<cs_expense>().cs_Value).ToList();

            Ctx.Tracer.FuncEnd(nameof(GetValues));

            return values;
        }
    }
}
