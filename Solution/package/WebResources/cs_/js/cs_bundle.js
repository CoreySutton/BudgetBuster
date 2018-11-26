var BudgetBlaster;
(function (BudgetBlaster) {
    var Common = (function () {
        function Common() {
        }
        Common.Contains = function (array, value) {
            return array.indexOf(value) !== -1;
        };
        Common.GetOrdinalNumber = function (number) {
            if (number <= 0)
                return null;
            switch (number) {
                case 1:
                    return "1st";
                case 2:
                    return "2nd";
                case 3:
                    return "3rd";
                default:
                    return number + "th";
            }
        };
        Common.GetFormattedDate = function (date) {
            var mm = date.getMonth() + 1;
            var dd = date.getDate();
            return [date.getFullYear(),
                (mm > 9 ? "" : "0") + mm,
                (dd > 9 ? "" : "0") + dd
            ].join("");
        };
        return Common;
    }());
    BudgetBlaster.Common = Common;
})(BudgetBlaster || (BudgetBlaster = {}));
var BudgetBlaster;
(function (BudgetBlaster) {
    var cs_budget = (function () {
        function cs_budget() {
        }
        cs_budget.OnLoad = function (executionContext) {
            var formCtx = executionContext.getFormContext();
            cs_budget.bindOnChangeEvents(formCtx);
        };
        cs_budget.Test = function () {
            (function () { });
        };
        cs_budget.OnChangePeriod = function (executionContext) {
            if (executionContext === undefined)
                return;
            var formCtx = executionContext.getFormContext();
            cs_budget.setPeriodSectionVisibilities(formCtx);
        };
        cs_budget.bindOnChangeEvents = function (formCtx) {
            formCtx.getAttribute("cs_period").addOnChange(cs_budget.OnChangePeriod);
            formCtx.getAttribute("cs_period").fireOnChange();
        };
        cs_budget.setPeriodSectionVisibilities = function (formCtx) {
            var periodValues = formCtx.getAttribute("cs_period").getValue() || [];
            var summaryTabSections = formCtx.ui.tabs.get("SummaryTab").sections;
            summaryTabSections.get("AnnualSection").setVisible(BudgetBlaster.Common.Contains(periodValues, 717640005));
            summaryTabSections.get("QuarterlySection").setVisible(BudgetBlaster.Common.Contains(periodValues, 717640004));
            summaryTabSections.get("MonthlySection").setVisible(BudgetBlaster.Common.Contains(periodValues, 717640003));
            summaryTabSections.get("FortnightlySection")
                .setVisible(BudgetBlaster.Common.Contains(periodValues, 717640002));
            summaryTabSections.get("WeeklySection").setVisible(BudgetBlaster.Common.Contains(periodValues, 717640001));
            summaryTabSections.get("DailySection").setVisible(BudgetBlaster.Common.Contains(periodValues, 717640000));
        };
        return cs_budget;
    }());
    BudgetBlaster.cs_budget = cs_budget;
})(BudgetBlaster || (BudgetBlaster = {}));
var BudgetBlaster;
(function (BudgetBlaster) {
    var cs_recurrence = (function () {
        function cs_recurrence() {
        }
        cs_recurrence.OnLoad = function (executionContext) {
            var formCtx = executionContext.getFormContext();
            cs_recurrence.bindEvents(formCtx);
            cs_recurrence.removePeriodOptions(formCtx);
            cs_recurrence.setSectionVisibilities(formCtx);
            cs_recurrence.setRequiredFieds(formCtx);
            cs_recurrence.setEnabledFields(formCtx);
        };
        cs_recurrence.OnSave = function (executionContext) {
            var formCtx = executionContext.getFormContext();
            cs_recurrence.setName(formCtx);
        };
        cs_recurrence.OnChangePeriod = function (executionContext) {
            if (executionContext === undefined)
                return;
            var formCtx = executionContext.getFormContext();
            cs_recurrence.setSectionVisibilities(formCtx);
            cs_recurrence.setRequiredFieds(formCtx);
            cs_recurrence.setEnabledFields(formCtx);
            cs_recurrence.clearFieldsOnChange(formCtx);
        };
        cs_recurrence.OnChangeOneOff = function (executionContext) {
            if (executionContext === undefined)
                return;
            var formCtx = executionContext.getFormContext();
            cs_recurrence.setSectionVisibilities(formCtx);
            cs_recurrence.setRequiredFieds(formCtx);
            cs_recurrence.clearFieldsOnChange(formCtx);
        };
        cs_recurrence.OnChangeLast = function (executionContext) {
            if (executionContext === undefined)
                return;
            var formCtx = executionContext.getFormContext();
            cs_recurrence.setEnabledFields(formCtx);
        };
        cs_recurrence.bindEvents = function (formCtx) {
            formCtx.data.entity.addOnSave(cs_recurrence.OnSave);
            formCtx.getAttribute("cs_period").addOnChange(cs_recurrence.OnChangePeriod);
            formCtx.getAttribute("cs_oneoff").addOnChange(cs_recurrence.OnChangeOneOff);
            formCtx.getAttribute("cs_last").addOnChange(cs_recurrence.OnChangeLast);
        };
        cs_recurrence.setSectionVisibilities = function (formCtx) {
            var oneOff = formCtx.getAttribute("cs_oneoff").getValue();
            formCtx.getControl("cs_oneoffdate").setVisible(oneOff);
            formCtx.getControl("cs_period").setVisible(!oneOff);
            var period = formCtx.getAttribute("cs_period").getValue();
            var generalTab = formCtx.ui.tabs.get("GeneralTab");
            generalTab.sections.forEach(function (s) {
                if (s.getName() === "AnnualyOptionsSection")
                    s.setVisible(period === 717640005 && !oneOff);
                else if (s.getName() === "MonthlyOptionsSection")
                    s.setVisible(period === 717640003 && !oneOff);
                else if (s.getName() === "WeeklyOptionsSection")
                    s.setVisible(period === 717640001 && !oneOff);
                else if (s.getName() === "DailyOptionsSection")
                    s.setVisible(period === 717640000 && !oneOff);
            });
        };
        cs_recurrence.removePeriodOptions = function (formCtx) {
            var control = formCtx.getControl("cs_period");
            control.removeOption(717640002);
            control.removeOption(717640004);
        };
        cs_recurrence.setName = function (formCtx) {
            var oneOff = formCtx.getAttribute("cs_oneoff").getValue();
            var oneOffDate = formCtx.getAttribute("cs_oneoffdate").getValue();
            var period = formCtx.getAttribute("cs_period").getValue();
            var daysOfWeek = formCtx.getAttribute("cs_daysofweek").getValue();
            var everyXWeeks = formCtx.getAttribute("cs_everyxweeks").getValue();
            var everyXMonths = formCtx.getAttribute("cs_everyxmonths").getValue();
            var day = formCtx.getAttribute("cs_day").getValue();
            var month = formCtx.getAttribute("cs_month").getValue();
            var last = formCtx.getAttribute("cs_last").getValue();
            var name = "";
            if (oneOff) {
                name += "One-off - " + BudgetBlaster.Common.GetFormattedDate(oneOffDate);
            }
            else {
                switch (period) {
                    case 717640000:
                        name += "Daily - " + daysOfWeek.join(", ");
                        break;
                    case 717640001:
                        name += "Weekly - " + daysOfWeek.join(", ") + " every " + everyXWeeks + " weeks";
                        break;
                    case 717640003:
                        var formattedDay = last ? "" + BudgetBlaster.Common.GetOrdinalNumber(day) : "last";
                        name += "Monthly - " + formattedDay + " day of every " + BudgetBlaster.Common.GetOrdinalNumber(everyXMonths) + " month(s)";
                        break;
                    case 717640005:
                        name += "Annualy - " + BudgetBlaster.Common.GetOrdinalNumber(day) + " of " + month;
                        break;
                    default:
                        name += "Unsupported Recurrence";
                }
            }
            formCtx.getAttribute("cs_name").setValue(name);
        };
        cs_recurrence.setRequiredFieds = function (formCtx) {
            var oneOff = formCtx.getAttribute("cs_oneoff").getValue();
            var period = formCtx.getAttribute("cs_period").getValue();
            var isLast = formCtx.getAttribute("cs_last").getValue();
            var isDaily = period === 717640000;
            var isWeekly = period === 717640001;
            var isMonthly = period === 717640003;
            var isYearly = period === 717640005;
            formCtx.getAttribute("cs_oneoffdate").setRequiredLevel(oneOff ? "required" : "none");
            formCtx.getAttribute("cs_daysofweek").setRequiredLevel(isDaily || isWeekly ? "required" : "none");
            formCtx.getAttribute("cs_everyxweeks").setRequiredLevel(isWeekly ? "required" : "none");
            formCtx.getAttribute("cs_day").setRequiredLevel((isMonthly && !isLast) || isYearly ? "required" : "none");
            formCtx.getAttribute("cs_last").setRequiredLevel(isMonthly ? "required" : "none");
            formCtx.getAttribute("cs_everyxmonths").setRequiredLevel(isMonthly ? "required" : "none");
            formCtx.getAttribute("cs_rounding").setRequiredLevel(isMonthly || isYearly ? "required" : "none");
            formCtx.getAttribute("cs_month").setRequiredLevel(isYearly ? "required" : "none");
        };
        cs_recurrence.setEnabledFields = function (formCtx) {
            var isLast = formCtx.getAttribute("cs_last").getValue();
            formCtx.getControl("cs_day").setDisabled(isLast);
        };
        cs_recurrence.clearFieldsOnChange = function (formCtx) {
            var isOneOff = formCtx.getAttribute("cs_oneoff").getValue();
            var isLast = formCtx.getAttribute("cs_last").getValue();
            var period = formCtx.getAttribute("cs_period").getValue();
            var isDaily = period === 717640000;
            var isWeekly = period === 717640001;
            var isMonthly = period === 717640003;
            var isYearly = period === 717640005;
            if (!isOneOff) {
                formCtx.getAttribute("cs_oneoffdate").setValue(null);
            }
            if (!isDaily) {
            }
            if (!isWeekly) {
                formCtx.getAttribute("cs_everyxweeks").setValue(null);
            }
            if (!isMonthly) {
                formCtx.getAttribute("cs_last").setValue(null);
                formCtx.getAttribute("cs_everyxmonths").setValue(null);
            }
            if (!isYearly) {
                formCtx.getAttribute("cs_month").setValue(null);
            }
            if (isMonthly && isLast) {
                formCtx.getAttribute("cs_day").setValue(null);
            }
            if (!isDaily && !isWeekly) {
                formCtx.getAttribute("cs_daysofweek").setValue(null);
            }
            if (!isMonthly && !isYearly) {
                formCtx.getAttribute("cs_day").setValue(null);
                formCtx.getAttribute("cs_rounding").setValue(null);
            }
        };
        return cs_recurrence;
    }());
    BudgetBlaster.cs_recurrence = cs_recurrence;
})(BudgetBlaster || (BudgetBlaster = {}));
