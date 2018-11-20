using System.Collections.Generic;
using Microsoft.Xrm.Sdk;

namespace CoreySutton.BudgetBuster.Plugins
{
    internal class BudgetIncomesCalculator : PluginAction<cs_budget>
    {
        internal BudgetIncomesCalculator(LocalContext ctx) : base(ctx) { }

        internal override void Execute(cs_budget updateBudget)
        {
            List<Money> incomeVals = new IncomeRetriever(Ctx).GetValues(updateBudget.Id);
            if (incomeVals == null || incomeVals.Count == 0)
            {
                updateBudget.cs_TotalIncomes = null;
            }
            else
            {
                updateBudget.cs_TotalIncomes = MathHelper.Sum(incomeVals);
            }
        }
    }
}
