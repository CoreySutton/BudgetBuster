using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;

namespace CoreySutton.BudgetBuster.Plugins
{
    internal class IncomeRetriever
    {
        private readonly LocalContext ctx;

        private QueryExpression ValuesQuery(Guid budgetId) => new QueryExpression(cs_income.EntityLogicalName)
        {
            ColumnSet = new ColumnSet(nameof(cs_income.cs_Value)),
            Criteria =
            {
                Conditions =
                {
                    new ConditionExpression(nameof(cs_income.cs_Budget), ConditionOperator.Equal, budgetId)
                }
            }
        };

        public IncomeRetriever(LocalContext ctx)
        {
            this.ctx = ctx;
        }
        
        internal List<Money> GetValues(Guid budgetId)
        {
            EntityCollection ec = ctx.orgService.RetrieveMultiple(ValuesQuery(budgetId));
            return ec?.Entities?.Select(e => e.ToEntity<cs_income>().cs_Value).ToList();
        }
    }
}
