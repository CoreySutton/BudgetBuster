using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;

namespace CoreySutton.BudgetBuster.Plugins
{
    internal class ExpensesDao : ContextService
    {
        public ExpensesDao(LocalContext ctx) : base(ctx)
        {
            Ctx.Tracer.Ctor(nameof(ExpensesDao));
        }

        internal IList<cs_expense> Get(Guid budgetId, ColumnSet columnSet = null)
        {
            Ctx.Tracer.FuncStart(nameof(Get));

            var query = new QueryExpression(cs_expense.EntityLogicalName)
            {
                ColumnSet = columnSet ?? new ColumnSet(true),
                Criteria =
                {
                    Conditions =
                    {
                        new ConditionExpression(
                            nameof(cs_expense.cs_Budget).ToLower(), ConditionOperator.Equal, budgetId)
                    }
                }
            };

            IList<cs_expense> expenses = RetrieveMultiple(query);

            Ctx.Tracer.FuncEnd(nameof(Get));
            return expenses;
        }

        private IList<cs_expense> RetrieveMultiple(QueryExpression query)
        {
            Ctx.Tracer.FuncStart(nameof(RetrieveMultiple));

            EntityCollection ec = Ctx.OrgService.RetrieveMultiple(query);
            IList<cs_expense> expenses = ec?.Entities?.Select(e => e.ToEntity<cs_expense>()).ToList();

            Ctx.Tracer.FuncEnd(nameof(RetrieveMultiple));

            return expenses;
        }
    }
}
