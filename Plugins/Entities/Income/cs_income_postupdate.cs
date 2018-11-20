using System;
using Microsoft.Xrm.Sdk;

namespace CoreySutton.BudgetBuster.Plugins
{
    [CrmPluginRegistration(
        message: MessageNameEnum.Update,
        entityLogicalName: cs_income.EntityLogicalName,
        stage: StageEnum.PostOperation,
        executionMode: ExecutionModeEnum.Synchronous,
        filteringAttributes: "cs_value",
        stepName: "cs_income_postcreate",
        executionOrder: 1,
        isolationModel: IsolationModeEnum.Sandbox,
        Description = "Post update events on cs_income",
        Image1Name = "Post",
        Image1Attributes = "cs_budget")]
    public class cs_income_postupdate : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            LocalContext ctx = new LocalContext(serviceProvider);
            cs_income postIncome = ImageHelper.GetPostImage<cs_income>(ctx.Context, "Post");

            var budgetUpdateManager = new EntityUpdateManager<cs_budget>(ctx, postIncome.cs_Budget.Id);
            budgetUpdateManager.RunActions(new BudgetIncomesCalculator(ctx));
            budgetUpdateManager.Commit();
        }
    }
}
