var CoreySutton;
(function (CoreySutton) {
    var BudgetBuster;
    (function (BudgetBuster) {
        var cs_budget = /** @class */ (function () {
            function cs_budget() {
            }
            cs_budget.OnLoad = function (executionContext) {
                this.formCtx = executionContext.getFormContext();
                this.bindOnChangeEvents();
            };
            cs_budget.OnChangePeriod = function (executionContext) {
                this.formCtx = executionContext.getFormContext();
                this.setPeriodSectionVisibilities();
            };
            cs_budget.bindOnChangeEvents = function () {
                this.formCtx.getAttribute("cs_period").addOnChange(cs_budget.OnChangePeriod);
                this.formCtx.getAttribute("cs_period").fireOnChange();
            };
            cs_budget.setPeriodSectionVisibilities = function () {
                var periodValues = this.formCtx.getAttribute("cs_period").getValue() || [];
                var summaryTabSections = this.formCtx.ui.tabs.get("SummaryTab").sections;
                summaryTabSections.get("AnnualSection").setVisible(this.contains(periodValues, 717640005 /* Annualy */));
                summaryTabSections.get("QuarterlySection").setVisible(this.contains(periodValues, 717640004 /* Quaterly */));
                summaryTabSections.get("MonthlySection").setVisible(this.contains(periodValues, 717640003 /* Monthly */));
                summaryTabSections.get("FortnightlySection").setVisible(this.contains(periodValues, 717640002 /* Fortnightly */));
                summaryTabSections.get("WeeklySection").setVisible(this.contains(periodValues, 717640001 /* Weekly */));
                summaryTabSections.get("DailySection").setVisible(this.contains(periodValues, 717640000 /* Daily */));
            };
            cs_budget.contains = function (array, value) {
                return array.indexOf(value) !== -1;
            };
            return cs_budget;
        }());
        BudgetBuster.cs_budget = cs_budget;
    })(BudgetBuster = CoreySutton.BudgetBuster || (CoreySutton.BudgetBuster = {}));
})(CoreySutton || (CoreySutton = {}));
//# sourceMappingURL=cs_budget.js.map