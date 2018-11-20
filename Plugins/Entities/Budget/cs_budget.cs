using System;
using Microsoft.Xrm.Sdk;

namespace CoreySutton.BudgetBuster.Plugins
{
    public class Plugin : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            LocalContext ctx = new LocalContext(serviceProvider);
            cs_budget target = ImageHelper.GetTarget<cs_budget>(ctx.context);
            new IncomeCalculator(ctx).SetIncome(target);
            new ExpenseCalculator(ctx).SetExpense(target);
        }
    }
}
