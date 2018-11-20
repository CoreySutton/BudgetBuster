﻿using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;

namespace CoreySutton.BudgetBuster.Plugins
{
    internal class ExpenseRetriever : ContextService
    {
        private QueryExpression ValuesQuery(Guid budgetId) => new QueryExpression(cs_expense.EntityLogicalName)
        {
            ColumnSet = new ColumnSet(nameof(cs_expense.cs_Value)),
            Criteria =
            {
                Conditions =
                {
                    new ConditionExpression(nameof(cs_expense.cs_Budget), ConditionOperator.Equal, budgetId)
                }
            }
        };

        internal ExpenseRetriever(LocalContext ctx) : base(ctx) { }

        internal List<Money> GetValues(Guid budgetId)
        {
            EntityCollection ec = Ctx.OrgService.RetrieveMultiple(ValuesQuery(budgetId));
            return ec?.Entities?.Select(e => e.ToEntity<cs_expense>().cs_Value).ToList();
        }
    }
}