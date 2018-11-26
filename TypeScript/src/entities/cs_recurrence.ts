module BudgetBlaster
{
    import MainForm = Form.cs_recurrence.Main.Information;

    export class cs_recurrence
    {
        public static OnLoad(executionContext: Xrm.ExecutionContext<cs_recurrence>): void {
            const formCtx = executionContext.getFormContext() as MainForm;
            cs_recurrence.bindEvents(formCtx);
            cs_recurrence.removePeriodOptions(formCtx);
            cs_recurrence.setSectionVisibilities(formCtx);
            cs_recurrence.setRequiredFieds(formCtx);
            cs_recurrence.setEnabledFields(formCtx);
        }

        public static OnSave(executionContext?: Xrm.ExecutionContext<cs_recurrence>): void {
            const formCtx = executionContext.getFormContext() as MainForm;
            cs_recurrence.setName(formCtx);
        }

        public static OnChangePeriod(executionContext?: Xrm.ExecutionContext<cs_recurrence>): void {
            if (executionContext === undefined) return;
            const formCtx = executionContext.getFormContext() as MainForm;

            cs_recurrence.setSectionVisibilities(formCtx);
            cs_recurrence.setRequiredFieds(formCtx);
            cs_recurrence.setEnabledFields(formCtx);
            cs_recurrence.clearFieldsOnChange(formCtx);
        }

        public static OnChangeOneOff(executionContext?: Xrm.ExecutionContext<cs_recurrence>): any {
            if (executionContext === undefined) return;
            const formCtx = executionContext.getFormContext() as MainForm;

            cs_recurrence.setSectionVisibilities(formCtx);
            cs_recurrence.setRequiredFieds(formCtx);
            cs_recurrence.clearFieldsOnChange(formCtx);
        }

        public static OnChangeLast(executionContext?: Xrm.ExecutionContext<cs_recurrence>): any {
            if (executionContext === undefined) return;
            const formCtx = executionContext.getFormContext() as MainForm;

            cs_recurrence.setEnabledFields(formCtx);
        }

        private static bindEvents(formCtx: MainForm): void {
            formCtx.data.entity.addOnSave(cs_recurrence.OnSave);
            formCtx.getAttribute("cs_period").addOnChange(cs_recurrence.OnChangePeriod);
            formCtx.getAttribute("cs_oneoff").addOnChange(cs_recurrence.OnChangeOneOff);
            formCtx.getAttribute("cs_last").addOnChange(cs_recurrence.OnChangeLast);
        }

        private static setSectionVisibilities(formCtx: MainForm): void {
            const oneOff = formCtx.getAttribute("cs_oneoff").getValue();
            formCtx.getControl("cs_oneoffdate").setVisible(oneOff);
            formCtx.getControl("cs_period").setVisible(!oneOff);

            const period = formCtx.getAttribute("cs_period").getValue();

            const generalTab = formCtx.ui.tabs.get("GeneralTab") as Xrm.PageTab<MainForm.Tabs.GeneralTab>;
            generalTab.sections.forEach(s => {
                if (s.getName() === "AnnualyOptionsSection") s.setVisible(period === cs_period.Annualy && !oneOff);
                else if (s.getName() === "MonthlyOptionsSection") s.setVisible(period === cs_period.Monthly && !oneOff);
                else if (s.getName() === "WeeklyOptionsSection") s.setVisible(period === cs_period.Weekly && !oneOff);
                else if (s.getName() === "DailyOptionsSection") s.setVisible(period === cs_period.Daily && !oneOff);
            });
        }

        private static removePeriodOptions(formCtx: MainForm): void {
            const control = formCtx.getControl("cs_period");
            control.removeOption(cs_period.Fortnightly);
            control.removeOption(cs_period.Quaterly);
        }

        private static setName(formCtx: MainForm): void {

            const oneOff = formCtx.getAttribute("cs_oneoff").getValue();
            const oneOffDate = formCtx.getAttribute("cs_oneoffdate").getValue();
            const period = formCtx.getAttribute("cs_period").getValue();
            const daysOfWeek = formCtx.getAttribute("cs_daysofweek").getValue();
            const everyXWeeks = formCtx.getAttribute("cs_everyxweeks").getValue();
            const everyXMonths = formCtx.getAttribute("cs_everyxmonths").getValue();
            const day = formCtx.getAttribute("cs_day").getValue();
            const month = formCtx.getAttribute("cs_month").getValue();
            const last = formCtx.getAttribute("cs_last").getValue();

            let name = "";

            if (oneOff) {
                name += `One-off - ${Common.GetFormattedDate(oneOffDate)}`;
            }
            else {
                switch (period) {
                    case cs_period.Daily:
                        name += `Daily - ${daysOfWeek.join(", ")}`;
                        break;
                    case cs_period.Weekly:
                        name += `Weekly - ${daysOfWeek.join(", ")} every ${everyXWeeks} weeks`;
                        break;
                    case cs_period.Monthly:
                        const formattedDay = last ? `${Common.GetOrdinalNumber(day)}` : "last";
                        name += `Monthly - ${formattedDay} day of every ${Common.GetOrdinalNumber(everyXMonths)} month(s)`;
                        break;
                    case cs_period.Annualy:
                        name += `Annualy - ${Common.GetOrdinalNumber(day)} of ${month}`;
                        break;
                    default:
                        name += "Unsupported Recurrence";
                }
            }

            formCtx.getAttribute("cs_name").setValue(name);
        }

        private static setRequiredFieds(formCtx: MainForm): void {
            const oneOff = formCtx.getAttribute("cs_oneoff").getValue();
            const period = formCtx.getAttribute("cs_period").getValue();
            const isLast = formCtx.getAttribute("cs_last").getValue();

            const isDaily = period === cs_period.Daily;
            const isWeekly = period === cs_period.Weekly;
            const isMonthly = period === cs_period.Monthly;
            const isYearly = period === cs_period.Annualy;

            formCtx.getAttribute("cs_oneoffdate").setRequiredLevel(oneOff ? "required" : "none");
            formCtx.getAttribute("cs_daysofweek").setRequiredLevel(isDaily || isWeekly ? "required" : "none");
            formCtx.getAttribute("cs_everyxweeks").setRequiredLevel(isWeekly ? "required" : "none");
            formCtx.getAttribute("cs_day").setRequiredLevel((isMonthly && !isLast) || isYearly ? "required" : "none");
            formCtx.getAttribute("cs_last").setRequiredLevel(isMonthly ? "required" : "none");
            formCtx.getAttribute("cs_everyxmonths").setRequiredLevel(isMonthly ? "required" : "none");
            formCtx.getAttribute("cs_rounding").setRequiredLevel(isMonthly || isYearly ? "required" : "none");
            formCtx.getAttribute("cs_month").setRequiredLevel(isYearly ? "required" : "none");
        }

        private static setEnabledFields(formCtx: MainForm): void {
            const isLast = formCtx.getAttribute("cs_last").getValue();

            formCtx.getControl("cs_day").setDisabled(isLast);
        }

        private static clearFieldsOnChange(formCtx: MainForm): void {
            const isOneOff = formCtx.getAttribute("cs_oneoff").getValue();
            const isLast = formCtx.getAttribute("cs_last").getValue();
            const period = formCtx.getAttribute("cs_period").getValue();
            const isDaily = period === cs_period.Daily;
            const isWeekly = period === cs_period.Weekly;
            const isMonthly = period === cs_period.Monthly;
            const isYearly = period === cs_period.Annualy;
       
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
        }
    }
}