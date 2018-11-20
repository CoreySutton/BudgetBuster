using System.Collections.Generic;
using Microsoft.Xrm.Sdk;

namespace CoreySutton.BudgetBuster.Plugins
{
    internal class IncomeCalculator
    {
        private readonly LocalContext ctx;

        internal IncomeCalculator(LocalContext ctx)
        {
            this.ctx = ctx;
        }

        internal void SetIncome(cs_budget target)
        {
            List<Money> incomeVals = new IncomeRetriever(ctx).GetValues(target.Id);
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
