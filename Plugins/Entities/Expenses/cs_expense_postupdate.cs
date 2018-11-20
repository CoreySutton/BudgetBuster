using System;
using Microsoft.Xrm.Sdk;

namespace CoreySutton.BudgetBuster.Plugins
{
    [CrmPluginRegistration(
        message: MessageNameEnum.Update,
        entityLogicalName: cs_expense.EntityLogicalName,
        stage: StageEnum.PostOperation,
        executionMode: ExecutionModeEnum.Synchronous,
        filteringAttributes: "cs_value",
        stepName: "cs_expense_postupdate",
        executionOrder: 1,
        isolationModel: IsolationModeEnum.Sandbox,
        Description = "Post update events on cs_expense",
        Image1Name = "Post",
        Image1Attributes = "cs_budget",
        Id = "1c71de78-15ed-e811-a96d-000d3ad1c79c"
    )]
    public class cs_expense_postupdate : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            LocalContext ctx = new LocalContext(serviceProvider);
            cs_expense postExpense = ImageHelper.GetPostImage<cs_expense>(ctx.Context, "Post");

            var budgetUpdateManager = new EntityUpdateManager<cs_budget>(ctx, postExpense.cs_Budget.Id);
            budgetUpdateManager.RunActions(new BudgetExpensesCalculator(ctx));
            budgetUpdateManager.Commit();
        }
    }
}
