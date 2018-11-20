using System.Collections.Generic;
using Microsoft.Xrm.Sdk;

namespace CoreySutton.BudgetBuster.Plugins
{
    internal class ExpensesCalculator
    {
        private readonly LocalContext _ctx;

        internal ExpensesCalculator(LocalContext ctx)
        {
            this._ctx = ctx;
        }

        internal void SetExpenses(cs_budget target)
        {
            List<Money> incomeVals = new ExpenseRetriever(_ctx).GetValues(target.Id);
            if (incomeVals == null || incomeVals.Count == 0)
            {
                target.cs_TotalIncomes = null;
            }
            else
            {
                target.cs_TotalIncomes = MathHelper.Sum(incomeVals);
            }
        }
    }
}
