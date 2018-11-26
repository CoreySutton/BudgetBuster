module BudgetBlaster
{
    export class cs_budget
    {
        public static OnLoad(executionContext: Xrm.ExecutionContext<any>): void {
            const formCtx = executionContext.getFormContext() as Form.cs_budget.Main.Information;
            cs_budget.bindOnChangeEvents(formCtx);
        }

        public static Test() {
            () => {};
        }

        public static OnChangePeriod(executionContext:
            Xrm.ExecutionContext<Xrm.MultiSelectOptionSetAttribute<cs_period>> | undefined): void {
            if (executionContext === undefined) return;
            const formCtx = executionContext.getFormContext() as Form.cs_budget.Main.Information;
            cs_budget.setPeriodSectionVisibilities(formCtx);
        }

        private static bindOnChangeEvents(formCtx: Form.cs_budget.Main.Information): void {
            formCtx.getAttribute("cs_period").addOnChange(cs_budget.OnChangePeriod);
            formCtx.getAttribute("cs_period").fireOnChange();
        }

        private static setPeriodSectionVisibilities(formCtx: Form.cs_budget.Main.Information): void {
            const periodValues = formCtx.getAttribute("cs_period").getValue() || ([] as cs_period[]);
            let summaryTabSections = formCtx.ui.tabs.get("SummaryTab").sections;
            summaryTabSections.get("AnnualSection").setVisible(Common.Contains(periodValues, cs_period.Annualy));
            summaryTabSections.get("QuarterlySection").setVisible(Common.Contains(periodValues, cs_period.Quaterly));
            summaryTabSections.get("MonthlySection").setVisible(Common.Contains(periodValues, cs_period.Monthly));
            summaryTabSections.get("FortnightlySection")
                .setVisible(Common.Contains(periodValues, cs_period.Fortnightly));
            summaryTabSections.get("WeeklySection").setVisible(Common.Contains(periodValues, cs_period.Weekly));
            summaryTabSections.get("DailySection").setVisible(Common.Contains(periodValues, cs_period.Daily));
        }
    }
}