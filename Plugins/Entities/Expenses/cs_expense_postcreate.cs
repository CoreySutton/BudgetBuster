﻿using System;
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
            LocalContext ctx = new LocalContext(serviceProvider);
            cs_expense targetExpense = ImageHelper.GetTarget<cs_expense>(ctx.Context);

            var budgetUpdateManager = new EntityUpdateManager<cs_budget>(ctx, targetExpense.cs_Budget.Id);
            budgetUpdateManager.RunActions(new CalculateExpenses(ctx));
            budgetUpdateManager.Commit();
        }
    }
}
