using System;
using Microsoft.Xrm.Sdk;

namespace CoreySutton.BudgetBuster.Plugins
{
    [CrmPluginRegistration(
        message: MessageNameEnum.Create,
        entityLogicalName: cs_income.EntityLogicalName,
        stage: StageEnum.PostOperation,
        executionMode: ExecutionModeEnum.Synchronous,
        filteringAttributes: "",
        stepName: "cs_income_postcreate",
        executionOrder: 1,
        isolationModel: IsolationModeEnum.Sandbox,
        Description = "Post create events on cs_income")]
    public class cs_income_postcreate : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            LocalContext ctx = new LocalContext(serviceProvider);
            cs_income targetIncome = ImageHelper.GetTarget<cs_income>(ctx.Context);

            var budgetUpdateManager = new EntityUpdateManager<cs_budget>(ctx, targetIncome.cs_Budget.Id);
            budgetUpdateManager.RunActions(new BudgetIncomesCalculator(ctx));
            budgetUpdateManager.Commit();
        }
    }
}
