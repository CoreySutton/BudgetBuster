using System;
using Microsoft.Xrm.Sdk;

namespace CoreySutton.BudgetBuster.Plugins
{
    [CrmPluginRegistration(
        message: MessageNameEnum.Create,
        entityLogicalName: cs_expense.EntityLogicalName,
        stage: StageEnum.PostOperation,
        executionMode: ExecutionModeEnum.Synchronous,
        filteringAttributes: "",
        stepName: "cs_expense_postcreate",
        executionOrder: 1,
        isolationModel: IsolationModeEnum.Sandbox,
        Description = "Post create events on cs_expense",
        Id = "031e9c7b-15ed-e811-a96a-000d3ad1c715")]
    public class cs_expense_postcreate : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            try
            {
                LocalContext ctx = new LocalContext(serviceProvider);
                cs_expense targetExpense = ImageHelper.GetTarget<cs_expense>(ctx.Context);
                ctx.Tracer.EnableTimestamps = true;
                ctx.Tracer.TraceHeader();
                ctx.Tracer.TraceEntities(target: targetExpense);

                var budgetUpdateManager = new EntityUpdateManager<cs_budget>(ctx, targetExpense.cs_Budget.Id);
                budgetUpdateManager.RunActions(new SetExpenses(ctx));
                budgetUpdateManager.Commit();
            }
            catch (Exception ex)
            {
                throw new InvalidPluginExecutionException(ex.Message, ex);
            }
        }
    }
}
