using Microsoft.Xrm.Sdk;

namespace CoreySutton.BudgetBuster.Plugins
{
    internal class CalculateIncomes : PluginAction<cs_budget>
    {
        internal CalculateIncomes(LocalContext ctx) : base(ctx)
        {
            Ctx.Tracer.Ctor(nameof(CalculateIncomes));
        }

        internal override void Execute(cs_budget updateBudget)
        {
            Ctx.Tracer.FuncStart(nameof(Execute));

            var rollup = new Rollup(Ctx);
            rollup.Query = IncomeQueryBuilder.ValuesOnly(updateBudget.Id);
            Money incomes = rollup.GetRollupValue(nameof(cs_income.cs_Value).ToLower());
            updateBudget.cs_TotalIncomes = incomes;

            Ctx.Tracer.FuncEnd(nameof(Execute));
        }
    }
}
