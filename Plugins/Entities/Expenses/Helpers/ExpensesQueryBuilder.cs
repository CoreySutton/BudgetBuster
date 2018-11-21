using System;
using Microsoft.Xrm.Sdk.Query;

namespace CoreySutton.BudgetBuster.Plugins
{
    internal static class ExpensesQueryBuilder
    {
        internal static QueryExpression ValuesOnly(Guid budgetId)
        {
            return new QueryExpression(cs_expense.EntityLogicalName)
            {
                ColumnSet = new ColumnSet(nameof(cs_expense.cs_Value).ToLower()),
                Criteria =
                {
                    Conditions =
                    {
                        new ConditionExpression(
                            nameof(cs_expense.cs_Budget).ToLower(), ConditionOperator.Equal, budgetId)
                    }
                }
            };
        }
    }
}
