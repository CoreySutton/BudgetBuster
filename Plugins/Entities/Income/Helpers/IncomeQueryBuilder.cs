using System;
using Microsoft.Xrm.Sdk.Query;

namespace CoreySutton.BudgetBuster.Plugins
{
    internal static class IncomeQueryBuilder
    {
        internal static QueryExpression ValuesOnly(Guid budgetId)
        {
            return new QueryExpression(cs_income.EntityLogicalName)
            {
                ColumnSet = new ColumnSet(nameof(cs_income.cs_Value).ToLower()),
                Criteria =
                {
                    Conditions =
                    {
                        new ConditionExpression(
                            nameof(cs_income.cs_Budget).ToLower(), ConditionOperator.Equal, budgetId)
                    }
                }
            };
        }
    }
}
