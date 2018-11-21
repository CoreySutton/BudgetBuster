using System.Collections.Generic;
using Microsoft.Xrm.Sdk.Query;

namespace CoreySutton.BudgetBuster.Plugins
{
    internal class SetExpenses : PluginAction<cs_budget>
    {
        internal SetExpenses(LocalContext ctx) : base(ctx)
        {
            Ctx.Tracer.Ctor(nameof(SetExpenses));
        }

        internal override void Execute(cs_budget updateBudget)
        {
            Ctx.Tracer.FuncStart(nameof(Execute));

            ColumnSet columnSet = new ColumnSet(
                nameof(cs_expense.cs_Value).ToLower(),
                nameof(cs_expense.cs_Period).ToLower());

            IList<cs_expense> expenses = new ExpensesDao(Ctx).Get(updateBudget.Id, columnSet);

            ExpenseCalculator expensesCalculator = new ExpenseCalculator();
            expensesCalculator.Sum(expenses);

            updateBudget.cs_TotalExpensesAnnualy = expensesCalculator.AnnualSum;
            updateBudget.cs_TotalExpensesQuaterly = expensesCalculator.QuaterlySum;
            updateBudget.cs_TotalExpensesMonthly = expensesCalculator.MonthlySum;
            updateBudget.cs_TotalExpensesFortnightly = expensesCalculator.FortnightlySum;
            updateBudget.cs_TotalExpensesWeekly = expensesCalculator.WeeklySum;
            updateBudget.cs_TotalExpensesDaily = expensesCalculator.DailySum;

            Ctx.Tracer.FuncEnd(nameof(Execute));
        }
    }
}
