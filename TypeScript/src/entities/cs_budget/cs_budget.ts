namespace CoreySutton.BudgetBuster
{
    export class cs_budget
    {
        private static formCtx: any; /*Form.cs_budget.Main.Information*/

        public static OnLoad(executionContext: Xrm.ExecutionContext<any>): void {
            this.formCtx = <Form.cs_budget.Main.Information> executionContext.getFormContext();
            this.bindOnChangeEvents();
        }

        public static OnChangePeriod(executionContext: Xrm.ExecutionContext<any>): void {
            this.formCtx = <Form.cs_budget.Main.Information> executionContext.getFormContext();
            this.setPeriodSectionVisibilities();
        }

        private static bindOnChangeEvents(): void {
            this.formCtx.getAttribute("cs_period").addOnChange(cs_budget.OnChangePeriod);
            this.formCtx.getAttribute("cs_period").fireOnChange();
        }

        private static setPeriodSectionVisibilities(): void {
            const periodValues = this.formCtx.getAttribute("cs_period").getValue() || ([] as cs_period[]);
            let summaryTabSections = this.formCtx.ui.tabs.get("SummaryTab").sections;
            summaryTabSections.get("AnnualSection").setVisible(this.contains(periodValues, cs_period.Annualy));
            summaryTabSections.get("QuarterlySection").setVisible(this.contains(periodValues, cs_period.Quaterly));
            summaryTabSections.get("MonthlySection").setVisible(this.contains(periodValues, cs_period.Monthly));
            summaryTabSections.get("FortnightlySection").setVisible(this.contains(periodValues, cs_period.Fortnightly));
            summaryTabSections.get("WeeklySection").setVisible(this.contains(periodValues, cs_period.Weekly));
            summaryTabSections.get("DailySection").setVisible(this.contains(periodValues, cs_period.Daily));
        }

        private static contains(array: any[], value: any): boolean {
            return array.indexOf(value) !== -1;
        }
    }
}