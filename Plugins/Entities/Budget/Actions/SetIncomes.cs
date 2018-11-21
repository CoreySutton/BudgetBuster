using System.Collections.Generic;
using Microsoft.Xrm.Sdk.Query;

namespace CoreySutton.BudgetBuster.Plugins
{
    internal class SetIncomes : PluginAction<cs_budget>
    {
        internal SetIncomes(LocalContext ctx) : base(ctx)
        {
            Ctx.Tracer.Ctor(nameof(SetIncomes));
        }

        internal override void Execute(cs_budget updateBudget)
        {
            Ctx.Tracer.FuncStart(nameof(Execute));

            ColumnSet columnSet = new ColumnSet(
                nameof(cs_income.cs_Value).ToLower(),
                nameof(cs_income.cs_Period).ToLower());

            IList<cs_income> expenses = new IncomeDao(Ctx).Get(updateBudget.Id, columnSet);

            IncomeCalculator incomeCalculator = new IncomeCalculator();
            incomeCalculator.Sum(expenses);

            updateBudget.cs_TotalIncomesAnnualy = incomeCalculator.AnnualSum;
            updateBudget.cs_TotalIncomesQuaterly = incomeCalculator.QuaterlySum;
            updateBudget.cs_TotalIncomesMonthly = incomeCalculator.MonthlySum;
            updateBudget.cs_TotalIncomesFortnightly = incomeCalculator.FortnightlySum;
            updateBudget.cs_TotalIncomesWeekly = incomeCalculator.WeeklySum;
            updateBudget.cs_TotalIncomesDaily = incomeCalculator.DailySum;

            Ctx.Tracer.FuncEnd(nameof(Execute));
        }
    }
}
