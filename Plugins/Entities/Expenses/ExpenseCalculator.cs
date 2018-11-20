using System.Collections.Generic;
using Microsoft.Xrm.Sdk;

namespace CoreySutton.BudgetBuster.Plugins
{
    internal class ExpenseCalculator
    {
        private readonly LocalContext ctx;

        internal ExpenseCalculator(LocalContext ctx)
        {
            this.ctx = ctx;
        }

        internal void SetExpense(cs_budget target)
        {
            List<Money> expenseVals = new ExpenseRetriever(ctx).GetValues(target.Id);
            if (expenseVals == null || expenseVals.Count == 0)
            {
                target.cs_TotalExpenses = null;
            }
            else
            {
                target.cs_TotalExpenses = MathHelper.Sum(expenseVals);
            }
        }
    }
}
