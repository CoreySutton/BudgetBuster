declare namespace Form.cs_budget.Main {
  namespace Information {
    namespace Tabs {
      interface ExpensesTab extends Xrm.SectionCollectionBase {
        get(name: "ExpensesSection"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface IncomeTab extends Xrm.SectionCollectionBase {
        get(name: "IncomesSection"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface SummaryTab extends Xrm.SectionCollectionBase {
        get(name: "AnnualSection"): Xrm.PageSection;
        get(name: "DailySection"): Xrm.PageSection;
        get(name: "FortnightlySection"): Xrm.PageSection;
        get(name: "MonthlySection"): Xrm.PageSection;
        get(name: "QuarterlySection"): Xrm.PageSection;
        get(name: "WeeklySection"): Xrm.PageSection;
        get(name: "{5cef52c3-336a-4b1c-96e3-eadc23393ee4}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "cs_name"): Xrm.Attribute<string>;
      get(name: "cs_period"): Xrm.MultiSelectOptionSetAttribute<cs_period>;
      get(name: "cs_totalavailableannualy"): Xrm.NumberAttribute;
      get(name: "cs_totalavailabledaily"): Xrm.NumberAttribute;
      get(name: "cs_totalavailablefortnightly"): Xrm.NumberAttribute;
      get(name: "cs_totalavailablemonthly"): Xrm.NumberAttribute;
      get(name: "cs_totalavailablequaterly"): Xrm.NumberAttribute;
      get(name: "cs_totalavailableweekly"): Xrm.NumberAttribute;
      get(name: "cs_totalexpensesannualy"): Xrm.NumberAttribute;
      get(name: "cs_totalexpensesdaily"): Xrm.NumberAttribute;
      get(name: "cs_totalexpensesfortnightly"): Xrm.NumberAttribute;
      get(name: "cs_totalexpensesmonthly"): Xrm.NumberAttribute;
      get(name: "cs_totalexpensesquaterly"): Xrm.NumberAttribute;
      get(name: "cs_totalexpensesweekly"): Xrm.NumberAttribute;
      get(name: "cs_totalincomesannualy"): Xrm.NumberAttribute;
      get(name: "cs_totalincomesdaily"): Xrm.NumberAttribute;
      get(name: "cs_totalincomesfortnightly"): Xrm.NumberAttribute;
      get(name: "cs_totalincomesmonthly"): Xrm.NumberAttribute;
      get(name: "cs_totalincomesquaterly"): Xrm.NumberAttribute;
      get(name: "cs_totalincomesweekly"): Xrm.NumberAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statecode"): Xrm.OptionSetAttribute<cs_budget_statecode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "Expenses"): Xrm.SubGridControl<"cs_expense">;
      get(name: "Incomes"): Xrm.SubGridControl<"cs_income">;
      get(name: "cs_name"): Xrm.StringControl;
      get(name: "cs_period"): Xrm.MultiSelectOptionSetControl<cs_period>;
      get(name: "cs_totalavailableannualy"): Xrm.NumberControl;
      get(name: "cs_totalavailabledaily"): Xrm.NumberControl;
      get(name: "cs_totalavailablefortnightly"): Xrm.NumberControl;
      get(name: "cs_totalavailablemonthly"): Xrm.NumberControl;
      get(name: "cs_totalavailablequaterly"): Xrm.NumberControl;
      get(name: "cs_totalavailableweekly"): Xrm.NumberControl;
      get(name: "cs_totalexpensesannualy"): Xrm.NumberControl;
      get(name: "cs_totalexpensesdaily"): Xrm.NumberControl;
      get(name: "cs_totalexpensesfortnightly"): Xrm.NumberControl;
      get(name: "cs_totalexpensesmonthly"): Xrm.NumberControl;
      get(name: "cs_totalexpensesquaterly"): Xrm.NumberControl;
      get(name: "cs_totalexpensesweekly"): Xrm.NumberControl;
      get(name: "cs_totalincomesannualy"): Xrm.NumberControl;
      get(name: "cs_totalincomesdaily"): Xrm.NumberControl;
      get(name: "cs_totalincomesfortnightly"): Xrm.NumberControl;
      get(name: "cs_totalincomesmonthly"): Xrm.NumberControl;
      get(name: "cs_totalincomesquaterly"): Xrm.NumberControl;
      get(name: "cs_totalincomesweekly"): Xrm.NumberControl;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_statecode"): Xrm.OptionSetControl<cs_budget_statecode>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "ExpensesTab"): Xrm.PageTab<Tabs.ExpensesTab>;
      get(name: "IncomeTab"): Xrm.PageTab<Tabs.IncomeTab>;
      get(name: "SummaryTab"): Xrm.PageTab<Tabs.SummaryTab>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "cs_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "cs_period"): Xrm.MultiSelectOptionSetAttribute<cs_period>;
    getAttribute(attributeName: "cs_totalavailableannualy"): Xrm.NumberAttribute;
    getAttribute(attributeName: "cs_totalavailabledaily"): Xrm.NumberAttribute;
    getAttribute(attributeName: "cs_totalavailablefortnightly"): Xrm.NumberAttribute;
    getAttribute(attributeName: "cs_totalavailablemonthly"): Xrm.NumberAttribute;
    getAttribute(attributeName: "cs_totalavailablequaterly"): Xrm.NumberAttribute;
    getAttribute(attributeName: "cs_totalavailableweekly"): Xrm.NumberAttribute;
    getAttribute(attributeName: "cs_totalexpensesannualy"): Xrm.NumberAttribute;
    getAttribute(attributeName: "cs_totalexpensesdaily"): Xrm.NumberAttribute;
    getAttribute(attributeName: "cs_totalexpensesfortnightly"): Xrm.NumberAttribute;
    getAttribute(attributeName: "cs_totalexpensesmonthly"): Xrm.NumberAttribute;
    getAttribute(attributeName: "cs_totalexpensesquaterly"): Xrm.NumberAttribute;
    getAttribute(attributeName: "cs_totalexpensesweekly"): Xrm.NumberAttribute;
    getAttribute(attributeName: "cs_totalincomesannualy"): Xrm.NumberAttribute;
    getAttribute(attributeName: "cs_totalincomesdaily"): Xrm.NumberAttribute;
    getAttribute(attributeName: "cs_totalincomesfortnightly"): Xrm.NumberAttribute;
    getAttribute(attributeName: "cs_totalincomesmonthly"): Xrm.NumberAttribute;
    getAttribute(attributeName: "cs_totalincomesquaterly"): Xrm.NumberAttribute;
    getAttribute(attributeName: "cs_totalincomesweekly"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<cs_budget_statecode>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "Expenses"): Xrm.SubGridControl<"cs_expense">;
    getControl(controlName: "Incomes"): Xrm.SubGridControl<"cs_income">;
    getControl(controlName: "cs_name"): Xrm.StringControl;
    getControl(controlName: "cs_period"): Xrm.MultiSelectOptionSetControl<cs_period>;
    getControl(controlName: "cs_totalavailableannualy"): Xrm.NumberControl;
    getControl(controlName: "cs_totalavailabledaily"): Xrm.NumberControl;
    getControl(controlName: "cs_totalavailablefortnightly"): Xrm.NumberControl;
    getControl(controlName: "cs_totalavailablemonthly"): Xrm.NumberControl;
    getControl(controlName: "cs_totalavailablequaterly"): Xrm.NumberControl;
    getControl(controlName: "cs_totalavailableweekly"): Xrm.NumberControl;
    getControl(controlName: "cs_totalexpensesannualy"): Xrm.NumberControl;
    getControl(controlName: "cs_totalexpensesdaily"): Xrm.NumberControl;
    getControl(controlName: "cs_totalexpensesfortnightly"): Xrm.NumberControl;
    getControl(controlName: "cs_totalexpensesmonthly"): Xrm.NumberControl;
    getControl(controlName: "cs_totalexpensesquaterly"): Xrm.NumberControl;
    getControl(controlName: "cs_totalexpensesweekly"): Xrm.NumberControl;
    getControl(controlName: "cs_totalincomesannualy"): Xrm.NumberControl;
    getControl(controlName: "cs_totalincomesdaily"): Xrm.NumberControl;
    getControl(controlName: "cs_totalincomesfortnightly"): Xrm.NumberControl;
    getControl(controlName: "cs_totalincomesmonthly"): Xrm.NumberControl;
    getControl(controlName: "cs_totalincomesquaterly"): Xrm.NumberControl;
    getControl(controlName: "cs_totalincomesweekly"): Xrm.NumberControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_statecode"): Xrm.OptionSetControl<cs_budget_statecode>;
    getControl(controlName: string): undefined;
  }
}
