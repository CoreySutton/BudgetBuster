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
        Image2Name = "Post",
        Image2Attributes = "cs_budget",
        Image2Type = ImageTypeEnum.PostImage,
        Id = "af2a4f7a-15ed-e811-a96c-000d3ad1c598"
    )]
    public class cs_income_postupdate : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            try
            {
                LocalContext ctx = new LocalContext(serviceProvider);
                cs_income postIncome = ImageHelper.GetPostImage<cs_income>(ctx.Context, "Post");

                var budgetUpdateManager = new EntityUpdateManager<cs_budget>(ctx, postIncome.cs_Budget.Id);
                budgetUpdateManager.RunActions(new CalculateIncomes(ctx));
                budgetUpdateManager.Commit();
            }
            catch (Exception ex)
            {
                throw new InvalidPluginExecutionException(ex.Message, ex);
            }
        }
    }
}
