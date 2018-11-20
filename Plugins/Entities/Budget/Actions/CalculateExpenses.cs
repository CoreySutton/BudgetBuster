﻿using System.Collections.Generic;
using Microsoft.Xrm.Sdk;

namespace CoreySutton.BudgetBuster.Plugins
{
    internal class CalculateExpenses : PluginAction<cs_budget>
    {
        internal CalculateExpenses(LocalContext ctx) : base(ctx) { }

        internal override void Execute(cs_budget updateBudget)
        {
            List<Money> expenseVals = new ExpenseRetriever(Ctx).GetValues(updateBudget.Id);
            if (expenseVals == null || expenseVals.Count == 0)
            {
                updateBudget.cs_TotalExpenses = null;
            }
            else
            {
                updateBudget.cs_TotalExpenses = MathHelper.Sum(expenseVals);
            }
        }
    }
}