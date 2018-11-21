using Microsoft.Xrm.Sdk;

namespace CoreySutton.BudgetBuster.Plugins
{
    internal class CalculateExpenses : PluginAction<cs_budget>
    {
        internal CalculateExpenses(LocalContext ctx) : base(ctx)
        {
            Ctx.Tracer.Ctor(nameof(CalculateExpenses));
        }

        internal override void Execute(cs_budget updateBudget)
        {
            Ctx.Tracer.FuncStart(nameof(Execute));

            var rollup = new Rollup(Ctx);
            rollup.Query = ExpensesQueryBuilder.ValuesOnly(updateBudget.Id);
            Money expenses = rollup.GetRollupValue(nameof(cs_expense.cs_Value).ToLower());
            updateBudget.cs_TotalExpenses = expenses;

            Ctx.Tracer.FuncEnd(nameof(Execute));
        }
    }
}
