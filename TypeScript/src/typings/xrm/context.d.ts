declare const enum cs_period {
  Daily = 717640000,
  Weekly = 717640001,
  Fortnightly = 717640002,
  Monthly = 717640003,
  Quaterly = 717640004,
  Annualy = 717640005,
}
declare const enum cs_budget_statecode {
  Active = 0,
  Inactive = 1,
}
declare const enum cs_budget_statuscode {
  Active = 1,
  Inactive = 2,
}
declare const enum cs_expense_statecode {
  Active = 0,
  Inactive = 1,
}
declare const enum cs_expense_statuscode {
  Active = 1,
  Inactive = 2,
}
declare const enum cs_expensecategory_statecode {
  Active = 0,
  Inactive = 1,
}
declare const enum cs_expensecategory_statuscode {
  Active = 1,
  Inactive = 2,
}
declare const enum cs_income_statecode {
  Active = 0,
  Inactive = 1,
}
declare const enum cs_income_statuscode {
  Active = 1,
  Inactive = 2,
}
declare const enum cs_incomecategory_statecode {
  Active = 0,
  Inactive = 1,
}
declare const enum cs_incomecategory_statuscode {
  Active = 1,
  Inactive = 2,
}
declare const enum cs_recurrence_statecode {
  Active = 0,
  Inactive = 1,
}
declare const enum cs_daysofweek {
  Monday = 717640000,
  Tuesday = 717640001,
  Wednesday = 717640002,
  Thrusday = 717640003,
  Friday = 717640004,
  Saturday = 717640005,
  Sunday = 717640006,
}
declare const enum cs_months {
  Jan = 717640000,
  Feb = 717640001,
  Mar = 717640002,
  Apr = 717640003,
  May = 717640004,
  Jun = 717640005,
  Jul = 717640006,
  Aug = 717640007,
  Sep = 717640008,
  Oct = 717640009,
  Nov = 717640010,
  Dec = 717640011,
}
declare const enum cs_rounding {
  WeekdaysOnlyOnOrBeforeSetDate = 717640000,
  WeekdaysOnlyOnOrAfterSetDate = 717640001,
}
declare const enum cs_recurrence_statuscode {
  Active = 1,
  Inactive = 2,
}
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
    interface AttributeValueMap {
      cs_name: string;
      cs_period: cs_period;
      cs_totalavailableannualy: number;
      cs_totalavailabledaily: number;
      cs_totalavailablefortnightly: number;
      cs_totalavailablemonthly: number;
      cs_totalavailablequaterly: number;
      cs_totalavailableweekly: number;
      cs_totalexpensesannualy: number;
      cs_totalexpensesdaily: number;
      cs_totalexpensesfortnightly: number;
      cs_totalexpensesmonthly: number;
      cs_totalexpensesquaterly: number;
      cs_totalexpensesweekly: number;
      cs_totalincomesannualy: number;
      cs_totalincomesdaily: number;
      cs_totalincomesfortnightly: number;
      cs_totalincomesmonthly: number;
      cs_totalincomesquaterly: number;
      cs_totalincomesweekly: number;
      ownerid: Xrm.EntityReference<"systemuser" | "team">;
      statecode: cs_budget_statecode;
    }
    interface ControlMap {
      Expenses: Xrm.SubGridControl<"cs_expense">;
      Incomes: Xrm.SubGridControl<"cs_income">;
      cs_name: Xrm.StringControl;
      cs_period: Xrm.MultiSelectOptionSetControl<cs_period>;
      cs_totalavailableannualy: Xrm.NumberControl;
      cs_totalavailabledaily: Xrm.NumberControl;
      cs_totalavailablefortnightly: Xrm.NumberControl;
      cs_totalavailablemonthly: Xrm.NumberControl;
      cs_totalavailablequaterly: Xrm.NumberControl;
      cs_totalavailableweekly: Xrm.NumberControl;
      cs_totalexpensesannualy: Xrm.NumberControl;
      cs_totalexpensesdaily: Xrm.NumberControl;
      cs_totalexpensesfortnightly: Xrm.NumberControl;
      cs_totalexpensesmonthly: Xrm.NumberControl;
      cs_totalexpensesquaterly: Xrm.NumberControl;
      cs_totalexpensesweekly: Xrm.NumberControl;
      cs_totalincomesannualy: Xrm.NumberControl;
      cs_totalincomesdaily: Xrm.NumberControl;
      cs_totalincomesfortnightly: Xrm.NumberControl;
      cs_totalincomesmonthly: Xrm.NumberControl;
      cs_totalincomesquaterly: Xrm.NumberControl;
      cs_totalincomesweekly: Xrm.NumberControl;
      header_ownerid: Xrm.LookupControl<"systemuser" | "team">;
      header_statecode: Xrm.OptionSetControl<cs_budget_statecode>;
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
declare namespace Form.cs_budget.Quick {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "cs_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "cs_name"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
    interface AttributeValueMap {
      cs_name: string;
      ownerid: Xrm.EntityReference<"systemuser" | "team">;
    }
    interface ControlMap {
      cs_name: Xrm.StringControl;
      ownerid: Xrm.LookupControl<"systemuser" | "team">;
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "cs_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "cs_name"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.cs_expense.QuickCreate {
  namespace Information {
    namespace Tabs {
      interface tab_1 extends Xrm.SectionCollectionBase {
        get(name: "tab_1_column_1_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_2_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "cs_budget"): Xrm.LookupAttribute<"cs_budget">;
      get(name: "cs_expensecategory"): Xrm.LookupAttribute<"cs_expensecategory">;
      get(name: "cs_name"): Xrm.Attribute<string>;
      get(name: "cs_period"): Xrm.OptionSetAttribute<cs_period>;
      get(name: "cs_value"): Xrm.NumberAttribute;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "cs_budget"): Xrm.LookupControl<"cs_budget">;
      get(name: "cs_expensecategory"): Xrm.LookupControl<"cs_expensecategory">;
      get(name: "cs_name"): Xrm.StringControl;
      get(name: "cs_period"): Xrm.OptionSetControl<cs_period>;
      get(name: "cs_value"): Xrm.NumberControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_1"): Xrm.PageTab<Tabs.tab_1>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
    interface AttributeValueMap {
      cs_budget: Xrm.EntityReference<"cs_budget">;
      cs_expensecategory: Xrm.EntityReference<"cs_expensecategory">;
      cs_name: string;
      cs_period: cs_period;
      cs_value: number;
    }
    interface ControlMap {
      cs_budget: Xrm.LookupControl<"cs_budget">;
      cs_expensecategory: Xrm.LookupControl<"cs_expensecategory">;
      cs_name: Xrm.StringControl;
      cs_period: Xrm.OptionSetControl<cs_period>;
      cs_value: Xrm.NumberControl;
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "cs_budget"): Xrm.LookupAttribute<"cs_budget">;
    getAttribute(attributeName: "cs_expensecategory"): Xrm.LookupAttribute<"cs_expensecategory">;
    getAttribute(attributeName: "cs_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "cs_period"): Xrm.OptionSetAttribute<cs_period>;
    getAttribute(attributeName: "cs_value"): Xrm.NumberAttribute;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "cs_budget"): Xrm.LookupControl<"cs_budget">;
    getControl(controlName: "cs_expensecategory"): Xrm.LookupControl<"cs_expensecategory">;
    getControl(controlName: "cs_name"): Xrm.StringControl;
    getControl(controlName: "cs_period"): Xrm.OptionSetControl<cs_period>;
    getControl(controlName: "cs_value"): Xrm.NumberControl;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.cs_expense.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "cs_budget"): Xrm.LookupAttribute<"cs_budget">;
      get(name: "cs_expensecategory"): Xrm.LookupAttribute<"cs_expensecategory">;
      get(name: "cs_name"): Xrm.Attribute<string>;
      get(name: "cs_period"): Xrm.OptionSetAttribute<cs_period>;
      get(name: "cs_recurrence"): Xrm.LookupAttribute<"cs_recurrence">;
      get(name: "cs_value"): Xrm.NumberAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statecode"): Xrm.OptionSetAttribute<cs_expense_statecode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "cs_budget"): Xrm.LookupControl<"cs_budget">;
      get(name: "cs_expensecategory"): Xrm.LookupControl<"cs_expensecategory">;
      get(name: "cs_name"): Xrm.StringControl;
      get(name: "cs_period"): Xrm.OptionSetControl<cs_period>;
      get(name: "cs_recurrence"): Xrm.LookupControl<"cs_recurrence">;
      get(name: "cs_value"): Xrm.NumberControl;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_statecode"): Xrm.OptionSetControl<cs_expense_statecode>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
    interface AttributeValueMap {
      cs_budget: Xrm.EntityReference<"cs_budget">;
      cs_expensecategory: Xrm.EntityReference<"cs_expensecategory">;
      cs_name: string;
      cs_period: cs_period;
      cs_recurrence: Xrm.EntityReference<"cs_recurrence">;
      cs_value: number;
      ownerid: Xrm.EntityReference<"systemuser" | "team">;
      statecode: cs_expense_statecode;
    }
    interface ControlMap {
      cs_budget: Xrm.LookupControl<"cs_budget">;
      cs_expensecategory: Xrm.LookupControl<"cs_expensecategory">;
      cs_name: Xrm.StringControl;
      cs_period: Xrm.OptionSetControl<cs_period>;
      cs_recurrence: Xrm.LookupControl<"cs_recurrence">;
      cs_value: Xrm.NumberControl;
      header_ownerid: Xrm.LookupControl<"systemuser" | "team">;
      header_statecode: Xrm.OptionSetControl<cs_expense_statecode>;
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "cs_budget"): Xrm.LookupAttribute<"cs_budget">;
    getAttribute(attributeName: "cs_expensecategory"): Xrm.LookupAttribute<"cs_expensecategory">;
    getAttribute(attributeName: "cs_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "cs_period"): Xrm.OptionSetAttribute<cs_period>;
    getAttribute(attributeName: "cs_recurrence"): Xrm.LookupAttribute<"cs_recurrence">;
    getAttribute(attributeName: "cs_value"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<cs_expense_statecode>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "cs_budget"): Xrm.LookupControl<"cs_budget">;
    getControl(controlName: "cs_expensecategory"): Xrm.LookupControl<"cs_expensecategory">;
    getControl(controlName: "cs_name"): Xrm.StringControl;
    getControl(controlName: "cs_period"): Xrm.OptionSetControl<cs_period>;
    getControl(controlName: "cs_recurrence"): Xrm.LookupControl<"cs_recurrence">;
    getControl(controlName: "cs_value"): Xrm.NumberControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_statecode"): Xrm.OptionSetControl<cs_expense_statecode>;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.cs_expense.Quick {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "cs_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "cs_name"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
    interface AttributeValueMap {
      cs_name: string;
      ownerid: Xrm.EntityReference<"systemuser" | "team">;
    }
    interface ControlMap {
      cs_name: Xrm.StringControl;
      ownerid: Xrm.LookupControl<"systemuser" | "team">;
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "cs_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "cs_name"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.cs_expensecategory.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "cs_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statecode"): Xrm.OptionSetAttribute<cs_expensecategory_statecode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "cs_name"): Xrm.StringControl;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_statecode"): Xrm.OptionSetControl<cs_expensecategory_statecode>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
    interface AttributeValueMap {
      cs_name: string;
      ownerid: Xrm.EntityReference<"systemuser" | "team">;
      statecode: cs_expensecategory_statecode;
    }
    interface ControlMap {
      cs_name: Xrm.StringControl;
      header_ownerid: Xrm.LookupControl<"systemuser" | "team">;
      header_statecode: Xrm.OptionSetControl<cs_expensecategory_statecode>;
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "cs_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<cs_expensecategory_statecode>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "cs_name"): Xrm.StringControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_statecode"): Xrm.OptionSetControl<cs_expensecategory_statecode>;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.cs_expensecategory.Quick {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "cs_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "cs_name"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
    interface AttributeValueMap {
      cs_name: string;
      ownerid: Xrm.EntityReference<"systemuser" | "team">;
    }
    interface ControlMap {
      cs_name: Xrm.StringControl;
      ownerid: Xrm.LookupControl<"systemuser" | "team">;
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "cs_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "cs_name"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.cs_expensecategory.QuickCreate {
  namespace Information {
    namespace Tabs {
      interface tab_1 extends Xrm.SectionCollectionBase {
        get(name: "tab_1_column_1_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_2_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "cs_name"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "cs_name"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_1"): Xrm.PageTab<Tabs.tab_1>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
    interface AttributeValueMap {
      cs_name: string;
    }
    interface ControlMap {
      cs_name: Xrm.StringControl;
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "cs_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "cs_name"): Xrm.StringControl;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.cs_income.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "cs_budget"): Xrm.LookupAttribute<"cs_budget">;
      get(name: "cs_incomecategory"): Xrm.LookupAttribute<"cs_incomecategory">;
      get(name: "cs_name"): Xrm.Attribute<string>;
      get(name: "cs_period"): Xrm.OptionSetAttribute<cs_period>;
      get(name: "cs_value"): Xrm.NumberAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statecode"): Xrm.OptionSetAttribute<cs_income_statecode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "cs_budget"): Xrm.LookupControl<"cs_budget">;
      get(name: "cs_incomecategory"): Xrm.LookupControl<"cs_incomecategory">;
      get(name: "cs_name"): Xrm.StringControl;
      get(name: "cs_period"): Xrm.OptionSetControl<cs_period>;
      get(name: "cs_value"): Xrm.NumberControl;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_statecode"): Xrm.OptionSetControl<cs_income_statecode>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
    interface AttributeValueMap {
      cs_budget: Xrm.EntityReference<"cs_budget">;
      cs_incomecategory: Xrm.EntityReference<"cs_incomecategory">;
      cs_name: string;
      cs_period: cs_period;
      cs_value: number;
      ownerid: Xrm.EntityReference<"systemuser" | "team">;
      statecode: cs_income_statecode;
    }
    interface ControlMap {
      cs_budget: Xrm.LookupControl<"cs_budget">;
      cs_incomecategory: Xrm.LookupControl<"cs_incomecategory">;
      cs_name: Xrm.StringControl;
      cs_period: Xrm.OptionSetControl<cs_period>;
      cs_value: Xrm.NumberControl;
      header_ownerid: Xrm.LookupControl<"systemuser" | "team">;
      header_statecode: Xrm.OptionSetControl<cs_income_statecode>;
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "cs_budget"): Xrm.LookupAttribute<"cs_budget">;
    getAttribute(attributeName: "cs_incomecategory"): Xrm.LookupAttribute<"cs_incomecategory">;
    getAttribute(attributeName: "cs_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "cs_period"): Xrm.OptionSetAttribute<cs_period>;
    getAttribute(attributeName: "cs_value"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<cs_income_statecode>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "cs_budget"): Xrm.LookupControl<"cs_budget">;
    getControl(controlName: "cs_incomecategory"): Xrm.LookupControl<"cs_incomecategory">;
    getControl(controlName: "cs_name"): Xrm.StringControl;
    getControl(controlName: "cs_period"): Xrm.OptionSetControl<cs_period>;
    getControl(controlName: "cs_value"): Xrm.NumberControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_statecode"): Xrm.OptionSetControl<cs_income_statecode>;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.cs_income.Quick {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "cs_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "cs_name"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
    interface AttributeValueMap {
      cs_name: string;
      ownerid: Xrm.EntityReference<"systemuser" | "team">;
    }
    interface ControlMap {
      cs_name: Xrm.StringControl;
      ownerid: Xrm.LookupControl<"systemuser" | "team">;
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "cs_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "cs_name"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.cs_income.QuickCreate {
  namespace Information {
    namespace Tabs {
      interface tab_1 extends Xrm.SectionCollectionBase {
        get(name: "tab_1_column_1_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_2_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "cs_budget"): Xrm.LookupAttribute<"cs_budget">;
      get(name: "cs_incomecategory"): Xrm.LookupAttribute<"cs_incomecategory">;
      get(name: "cs_name"): Xrm.Attribute<string>;
      get(name: "cs_period"): Xrm.OptionSetAttribute<cs_period>;
      get(name: "cs_value"): Xrm.NumberAttribute;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "cs_budget"): Xrm.LookupControl<"cs_budget">;
      get(name: "cs_incomecategory"): Xrm.LookupControl<"cs_incomecategory">;
      get(name: "cs_name"): Xrm.StringControl;
      get(name: "cs_period"): Xrm.OptionSetControl<cs_period>;
      get(name: "cs_value"): Xrm.NumberControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_1"): Xrm.PageTab<Tabs.tab_1>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
    interface AttributeValueMap {
      cs_budget: Xrm.EntityReference<"cs_budget">;
      cs_incomecategory: Xrm.EntityReference<"cs_incomecategory">;
      cs_name: string;
      cs_period: cs_period;
      cs_value: number;
    }
    interface ControlMap {
      cs_budget: Xrm.LookupControl<"cs_budget">;
      cs_incomecategory: Xrm.LookupControl<"cs_incomecategory">;
      cs_name: Xrm.StringControl;
      cs_period: Xrm.OptionSetControl<cs_period>;
      cs_value: Xrm.NumberControl;
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "cs_budget"): Xrm.LookupAttribute<"cs_budget">;
    getAttribute(attributeName: "cs_incomecategory"): Xrm.LookupAttribute<"cs_incomecategory">;
    getAttribute(attributeName: "cs_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "cs_period"): Xrm.OptionSetAttribute<cs_period>;
    getAttribute(attributeName: "cs_value"): Xrm.NumberAttribute;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "cs_budget"): Xrm.LookupControl<"cs_budget">;
    getControl(controlName: "cs_incomecategory"): Xrm.LookupControl<"cs_incomecategory">;
    getControl(controlName: "cs_name"): Xrm.StringControl;
    getControl(controlName: "cs_period"): Xrm.OptionSetControl<cs_period>;
    getControl(controlName: "cs_value"): Xrm.NumberControl;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.cs_incomecategory.QuickCreate {
  namespace Information {
    namespace Tabs {
      interface tab_1 extends Xrm.SectionCollectionBase {
        get(name: "tab_1_column_1_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_2_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "cs_name"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "cs_name"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_1"): Xrm.PageTab<Tabs.tab_1>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
    interface AttributeValueMap {
      cs_name: string;
    }
    interface ControlMap {
      cs_name: Xrm.StringControl;
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "cs_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "cs_name"): Xrm.StringControl;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.cs_incomecategory.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "cs_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statecode"): Xrm.OptionSetAttribute<cs_incomecategory_statecode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "cs_name"): Xrm.StringControl;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_statecode"): Xrm.OptionSetControl<cs_incomecategory_statecode>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
    interface AttributeValueMap {
      cs_name: string;
      ownerid: Xrm.EntityReference<"systemuser" | "team">;
      statecode: cs_incomecategory_statecode;
    }
    interface ControlMap {
      cs_name: Xrm.StringControl;
      header_ownerid: Xrm.LookupControl<"systemuser" | "team">;
      header_statecode: Xrm.OptionSetControl<cs_incomecategory_statecode>;
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "cs_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<cs_incomecategory_statecode>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "cs_name"): Xrm.StringControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_statecode"): Xrm.OptionSetControl<cs_incomecategory_statecode>;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.cs_incomecategory.Quick {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "cs_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "cs_name"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
    interface AttributeValueMap {
      cs_name: string;
      ownerid: Xrm.EntityReference<"systemuser" | "team">;
    }
    interface ControlMap {
      cs_name: Xrm.StringControl;
      ownerid: Xrm.LookupControl<"systemuser" | "team">;
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "cs_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "cs_name"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.cs_recurrence.Quick {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "cs_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "cs_name"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
    interface AttributeValueMap {
      cs_name: string;
      ownerid: Xrm.EntityReference<"systemuser" | "team">;
    }
    interface ControlMap {
      cs_name: Xrm.StringControl;
      ownerid: Xrm.LookupControl<"systemuser" | "team">;
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "cs_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "cs_name"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.cs_recurrence.Main {
  namespace Information {
    namespace Tabs {
      interface GeneralTab extends Xrm.SectionCollectionBase {
        get(name: "AnnualyOptionsSection"): Xrm.PageSection;
        get(name: "DailyOptionsSection"): Xrm.PageSection;
        get(name: "GeneralSection"): Xrm.PageSection;
        get(name: "MonthlyOptionsSection"): Xrm.PageSection;
        get(name: "WeeklyOptionsSection"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "cs_day"): Xrm.NumberAttribute;
      get(name: "cs_daysofweek"): Xrm.MultiSelectOptionSetAttribute<cs_daysofweek>;
      get(name: "cs_everyxmonths"): Xrm.NumberAttribute;
      get(name: "cs_everyxweeks"): Xrm.NumberAttribute;
      get(name: "cs_last"): Xrm.OptionSetAttribute<boolean>;
      get(name: "cs_month"): Xrm.MultiSelectOptionSetAttribute<cs_months>;
      get(name: "cs_name"): Xrm.Attribute<string>;
      get(name: "cs_oneoff"): Xrm.OptionSetAttribute<boolean>;
      get(name: "cs_oneoffdate"): Xrm.DateAttribute;
      get(name: "cs_period"): Xrm.OptionSetAttribute<cs_period>;
      get(name: "cs_rounding"): Xrm.OptionSetAttribute<cs_rounding>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statecode"): Xrm.OptionSetAttribute<cs_recurrence_statecode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "cs_day"): Xrm.NumberControl;
      get(name: "cs_day1"): Xrm.NumberControl;
      get(name: "cs_daysofweek"): Xrm.MultiSelectOptionSetControl<cs_daysofweek>;
      get(name: "cs_daysofweek1"): Xrm.MultiSelectOptionSetControl<cs_daysofweek>;
      get(name: "cs_everyxmonths"): Xrm.NumberControl;
      get(name: "cs_everyxweeks"): Xrm.NumberControl;
      get(name: "cs_last"): Xrm.OptionSetControl<boolean>;
      get(name: "cs_month"): Xrm.MultiSelectOptionSetControl<cs_months>;
      get(name: "cs_name"): Xrm.StringControl;
      get(name: "cs_oneoff"): Xrm.OptionSetControl<boolean>;
      get(name: "cs_oneoffdate"): Xrm.DateControl;
      get(name: "cs_period"): Xrm.OptionSetControl<cs_period>;
      get(name: "cs_rounding"): Xrm.OptionSetControl<cs_rounding>;
      get(name: "cs_rounding1"): Xrm.OptionSetControl<cs_rounding>;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_statecode"): Xrm.OptionSetControl<cs_recurrence_statecode>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "GeneralTab"): Xrm.PageTab<Tabs.GeneralTab>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
    interface AttributeValueMap {
      cs_day: number;
      cs_daysofweek: cs_daysofweek;
      cs_everyxmonths: number;
      cs_everyxweeks: number;
      cs_last: boolean;
      cs_month: cs_months;
      cs_name: string;
      cs_oneoff: boolean;
      cs_oneoffdate: Date;
      cs_period: cs_period;
      cs_rounding: cs_rounding;
      ownerid: Xrm.EntityReference<"systemuser" | "team">;
      statecode: cs_recurrence_statecode;
    }
    interface ControlMap {
      cs_day: Xrm.NumberControl;
      cs_day1: Xrm.NumberControl;
      cs_daysofweek: Xrm.MultiSelectOptionSetControl<cs_daysofweek>;
      cs_daysofweek1: Xrm.MultiSelectOptionSetControl<cs_daysofweek>;
      cs_everyxmonths: Xrm.NumberControl;
      cs_everyxweeks: Xrm.NumberControl;
      cs_last: Xrm.OptionSetControl<boolean>;
      cs_month: Xrm.MultiSelectOptionSetControl<cs_months>;
      cs_name: Xrm.StringControl;
      cs_oneoff: Xrm.OptionSetControl<boolean>;
      cs_oneoffdate: Xrm.DateControl;
      cs_period: Xrm.OptionSetControl<cs_period>;
      cs_rounding: Xrm.OptionSetControl<cs_rounding>;
      cs_rounding1: Xrm.OptionSetControl<cs_rounding>;
      header_ownerid: Xrm.LookupControl<"systemuser" | "team">;
      header_statecode: Xrm.OptionSetControl<cs_recurrence_statecode>;
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "cs_day"): Xrm.NumberAttribute;
    getAttribute(attributeName: "cs_daysofweek"): Xrm.MultiSelectOptionSetAttribute<cs_daysofweek>;
    getAttribute(attributeName: "cs_everyxmonths"): Xrm.NumberAttribute;
    getAttribute(attributeName: "cs_everyxweeks"): Xrm.NumberAttribute;
    getAttribute(attributeName: "cs_last"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "cs_month"): Xrm.MultiSelectOptionSetAttribute<cs_months>;
    getAttribute(attributeName: "cs_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "cs_oneoff"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "cs_oneoffdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "cs_period"): Xrm.OptionSetAttribute<cs_period>;
    getAttribute(attributeName: "cs_rounding"): Xrm.OptionSetAttribute<cs_rounding>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<cs_recurrence_statecode>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "cs_day"): Xrm.NumberControl;
    getControl(controlName: "cs_day1"): Xrm.NumberControl;
    getControl(controlName: "cs_daysofweek"): Xrm.MultiSelectOptionSetControl<cs_daysofweek>;
    getControl(controlName: "cs_daysofweek1"): Xrm.MultiSelectOptionSetControl<cs_daysofweek>;
    getControl(controlName: "cs_everyxmonths"): Xrm.NumberControl;
    getControl(controlName: "cs_everyxweeks"): Xrm.NumberControl;
    getControl(controlName: "cs_last"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "cs_month"): Xrm.MultiSelectOptionSetControl<cs_months>;
    getControl(controlName: "cs_name"): Xrm.StringControl;
    getControl(controlName: "cs_oneoff"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "cs_oneoffdate"): Xrm.DateControl;
    getControl(controlName: "cs_period"): Xrm.OptionSetControl<cs_period>;
    getControl(controlName: "cs_rounding"): Xrm.OptionSetControl<cs_rounding>;
    getControl(controlName: "cs_rounding1"): Xrm.OptionSetControl<cs_rounding>;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_statecode"): Xrm.OptionSetControl<cs_recurrence_statecode>;
    getControl(controlName: string): undefined;
  }
}
type WebResourceImage = undefined
declare const enum LCID {
  English = 1033,
}
interface WebMappingRetrieve<ISelect, IExpand, IFilter, IFixed, Result, FormattedResult> {
}
interface WebMappingCUDA<ICreate, IUpdate, ISelect> {
}
interface WebMappingRelated<ISingle, IMultiple> {
}
declare namespace WebNs {
  interface WebEntity {
  }
  interface WebEntity_Fixed {
    "@odata.etag": string;
  }
  interface cs_budget_Base extends WebEntity {
  }
  interface cs_budget_Fixed extends WebEntity_Fixed {
    cs_budgetid: string;
  }
  interface cs_budget extends cs_budget_Base, cs_budget_Relationships {
  }
  interface cs_budget_Relationships {
  }
  interface cs_budget_Result extends cs_budget_Base, cs_budget_Relationships {
  }
  interface cs_budget_FormattedResult {
  }
  interface cs_budget_Select {
  }
  interface cs_budget_Expand {
  }
  interface cs_budget_Filter {
  }
  interface cs_budget_Create extends cs_budget {
  }
  interface cs_budget_Update extends cs_budget {
  }
  interface cs_expense_Base extends WebEntity {
  }
  interface cs_expense_Fixed extends WebEntity_Fixed {
    cs_expenseid: string;
  }
  interface cs_expense extends cs_expense_Base, cs_expense_Relationships {
  }
  interface cs_expense_Relationships {
  }
  interface cs_expense_Result extends cs_expense_Base, cs_expense_Relationships {
  }
  interface cs_expense_FormattedResult {
  }
  interface cs_expense_Select {
  }
  interface cs_expense_Expand {
  }
  interface cs_expense_Filter {
  }
  interface cs_expense_Create extends cs_expense {
  }
  interface cs_expense_Update extends cs_expense {
  }
  interface cs_expensecategory_Base extends WebEntity {
  }
  interface cs_expensecategory_Fixed extends WebEntity_Fixed {
    cs_expensecategoryid: string;
  }
  interface cs_expensecategory extends cs_expensecategory_Base, cs_expensecategory_Relationships {
  }
  interface cs_expensecategory_Relationships {
  }
  interface cs_expensecategory_Result extends cs_expensecategory_Base, cs_expensecategory_Relationships {
  }
  interface cs_expensecategory_FormattedResult {
  }
  interface cs_expensecategory_Select {
  }
  interface cs_expensecategory_Expand {
  }
  interface cs_expensecategory_Filter {
  }
  interface cs_expensecategory_Create extends cs_expensecategory {
  }
  interface cs_expensecategory_Update extends cs_expensecategory {
  }
  interface cs_income_Base extends WebEntity {
  }
  interface cs_income_Fixed extends WebEntity_Fixed {
    cs_incomeid: string;
  }
  interface cs_income extends cs_income_Base, cs_income_Relationships {
  }
  interface cs_income_Relationships {
  }
  interface cs_income_Result extends cs_income_Base, cs_income_Relationships {
  }
  interface cs_income_FormattedResult {
  }
  interface cs_income_Select {
  }
  interface cs_income_Expand {
  }
  interface cs_income_Filter {
  }
  interface cs_income_Create extends cs_income {
  }
  interface cs_income_Update extends cs_income {
  }
  interface cs_incomecategory_Base extends WebEntity {
  }
  interface cs_incomecategory_Fixed extends WebEntity_Fixed {
    cs_incomecategoryid: string;
  }
  interface cs_incomecategory extends cs_incomecategory_Base, cs_incomecategory_Relationships {
  }
  interface cs_incomecategory_Relationships {
  }
  interface cs_incomecategory_Result extends cs_incomecategory_Base, cs_incomecategory_Relationships {
  }
  interface cs_incomecategory_FormattedResult {
  }
  interface cs_incomecategory_Select {
  }
  interface cs_incomecategory_Expand {
  }
  interface cs_incomecategory_Filter {
  }
  interface cs_incomecategory_Create extends cs_incomecategory {
  }
  interface cs_incomecategory_Update extends cs_incomecategory {
  }
  interface cs_recurrence_Base extends WebEntity {
  }
  interface cs_recurrence_Fixed extends WebEntity_Fixed {
    cs_recurrenceid: string;
  }
  interface cs_recurrence extends cs_recurrence_Base, cs_recurrence_Relationships {
  }
  interface cs_recurrence_Relationships {
  }
  interface cs_recurrence_Result extends cs_recurrence_Base, cs_recurrence_Relationships {
  }
  interface cs_recurrence_FormattedResult {
  }
  interface cs_recurrence_Select {
  }
  interface cs_recurrence_Expand {
  }
  interface cs_recurrence_Filter {
  }
  interface cs_recurrence_Create extends cs_recurrence {
  }
  interface cs_recurrence_Update extends cs_recurrence {
  }
}
declare namespace WebNs {
  interface cs_budget_Base extends WebEntity {
    createdon?: Date | null;
    cs_budgetid?: string | null;
    cs_name?: string | null;
    cs_period?: cs_period | null;
    cs_totalavailableannualy?: number | null;
    cs_totalavailableannualy_base?: number | null;
    cs_totalavailabledaily?: number | null;
    cs_totalavailabledaily_base?: number | null;
    cs_totalavailablefortnightly?: number | null;
    cs_totalavailablefortnightly_base?: number | null;
    cs_totalavailablemonthly?: number | null;
    cs_totalavailablemonthly_base?: number | null;
    cs_totalavailablequaterly?: number | null;
    cs_totalavailablequaterly_base?: number | null;
    cs_totalavailableweekly?: number | null;
    cs_totalavailableweekly_base?: number | null;
    cs_totalexpensesannualy?: number | null;
    cs_totalexpensesannualy_base?: number | null;
    cs_totalexpensesdaily?: number | null;
    cs_totalexpensesdaily_base?: number | null;
    cs_totalexpensesfortnightly?: number | null;
    cs_totalexpensesfortnightly_base?: number | null;
    cs_totalexpensesmonthly?: number | null;
    cs_totalexpensesmonthly_base?: number | null;
    cs_totalexpensesquaterly?: number | null;
    cs_totalexpensesquaterly_base?: number | null;
    cs_totalexpensesweekly?: number | null;
    cs_totalexpensesweekly_base?: number | null;
    cs_totalincomesannualy?: number | null;
    cs_totalincomesannualy_base?: number | null;
    cs_totalincomesdaily?: number | null;
    cs_totalincomesdaily_base?: number | null;
    cs_totalincomesfortnightly?: number | null;
    cs_totalincomesfortnightly_base?: number | null;
    cs_totalincomesmonthly?: number | null;
    cs_totalincomesmonthly_base?: number | null;
    cs_totalincomesquaterly?: number | null;
    cs_totalincomesquaterly_base?: number | null;
    cs_totalincomesweekly?: number | null;
    cs_totalincomesweekly_base?: number | null;
    exchangerate?: number | null;
    importsequencenumber?: number | null;
    modifiedon?: Date | null;
    overriddencreatedon?: Date | null;
    statecode?: cs_budget_statecode | null;
    statuscode?: cs_budget_statuscode | null;
    timezoneruleversionnumber?: number | null;
    transactioncurrencyid_guid?: string | null;
    utcconversiontimezonecode?: number | null;
    versionnumber?: number | null;
  }
  interface cs_budget_Relationships {
    cs_cs_budget_cs_expense_Budget?: cs_expense_Result[] | null;
    cs_cs_budget_cs_income_Budget?: cs_income_Result[] | null;
  }
  interface cs_budget extends cs_budget_Base, cs_budget_Relationships {
    ownerid_bind$owners?: string | null;
    transactioncurrencyid_bind$transactioncurrencies?: string | null;
  }
  interface cs_budget_Create extends cs_budget {
  }
  interface cs_budget_Update extends cs_budget {
  }
  interface cs_budget_Select {
    createdby_guid: WebAttribute<cs_budget_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
    createdon: WebAttribute<cs_budget_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
    createdonbehalfby_guid: WebAttribute<cs_budget_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
    cs_budgetid: WebAttribute<cs_budget_Select, { cs_budgetid: string | null }, {  }>;
    cs_name: WebAttribute<cs_budget_Select, { cs_name: string | null }, {  }>;
    cs_period: WebAttribute<cs_budget_Select, { cs_period: cs_period | null }, { cs_period_formatted?: string }>;
    cs_totalavailableannualy: WebAttribute<cs_budget_Select, { cs_totalavailableannualy: number | null; transactioncurrencyid_guid: string | null }, { cs_totalavailableannualy_formatted?: string; transactioncurrencyid_formatted?: string }>;
    cs_totalavailableannualy_base: WebAttribute<cs_budget_Select, { cs_totalavailableannualy_base: number | null; transactioncurrencyid_guid: string | null }, { cs_totalavailableannualy_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
    cs_totalavailabledaily: WebAttribute<cs_budget_Select, { cs_totalavailabledaily: number | null; transactioncurrencyid_guid: string | null }, { cs_totalavailabledaily_formatted?: string; transactioncurrencyid_formatted?: string }>;
    cs_totalavailabledaily_base: WebAttribute<cs_budget_Select, { cs_totalavailabledaily_base: number | null; transactioncurrencyid_guid: string | null }, { cs_totalavailabledaily_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
    cs_totalavailablefortnightly: WebAttribute<cs_budget_Select, { cs_totalavailablefortnightly: number | null; transactioncurrencyid_guid: string | null }, { cs_totalavailablefortnightly_formatted?: string; transactioncurrencyid_formatted?: string }>;
    cs_totalavailablefortnightly_base: WebAttribute<cs_budget_Select, { cs_totalavailablefortnightly_base: number | null; transactioncurrencyid_guid: string | null }, { cs_totalavailablefortnightly_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
    cs_totalavailablemonthly: WebAttribute<cs_budget_Select, { cs_totalavailablemonthly: number | null; transactioncurrencyid_guid: string | null }, { cs_totalavailablemonthly_formatted?: string; transactioncurrencyid_formatted?: string }>;
    cs_totalavailablemonthly_base: WebAttribute<cs_budget_Select, { cs_totalavailablemonthly_base: number | null; transactioncurrencyid_guid: string | null }, { cs_totalavailablemonthly_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
    cs_totalavailablequaterly: WebAttribute<cs_budget_Select, { cs_totalavailablequaterly: number | null; transactioncurrencyid_guid: string | null }, { cs_totalavailablequaterly_formatted?: string; transactioncurrencyid_formatted?: string }>;
    cs_totalavailablequaterly_base: WebAttribute<cs_budget_Select, { cs_totalavailablequaterly_base: number | null; transactioncurrencyid_guid: string | null }, { cs_totalavailablequaterly_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
    cs_totalavailableweekly: WebAttribute<cs_budget_Select, { cs_totalavailableweekly: number | null; transactioncurrencyid_guid: string | null }, { cs_totalavailableweekly_formatted?: string; transactioncurrencyid_formatted?: string }>;
    cs_totalavailableweekly_base: WebAttribute<cs_budget_Select, { cs_totalavailableweekly_base: number | null; transactioncurrencyid_guid: string | null }, { cs_totalavailableweekly_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
    cs_totalexpensesannualy: WebAttribute<cs_budget_Select, { cs_totalexpensesannualy: number | null; transactioncurrencyid_guid: string | null }, { cs_totalexpensesannualy_formatted?: string; transactioncurrencyid_formatted?: string }>;
    cs_totalexpensesannualy_base: WebAttribute<cs_budget_Select, { cs_totalexpensesannualy_base: number | null; transactioncurrencyid_guid: string | null }, { cs_totalexpensesannualy_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
    cs_totalexpensesdaily: WebAttribute<cs_budget_Select, { cs_totalexpensesdaily: number | null; transactioncurrencyid_guid: string | null }, { cs_totalexpensesdaily_formatted?: string; transactioncurrencyid_formatted?: string }>;
    cs_totalexpensesdaily_base: WebAttribute<cs_budget_Select, { cs_totalexpensesdaily_base: number | null; transactioncurrencyid_guid: string | null }, { cs_totalexpensesdaily_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
    cs_totalexpensesfortnightly: WebAttribute<cs_budget_Select, { cs_totalexpensesfortnightly: number | null; transactioncurrencyid_guid: string | null }, { cs_totalexpensesfortnightly_formatted?: string; transactioncurrencyid_formatted?: string }>;
    cs_totalexpensesfortnightly_base: WebAttribute<cs_budget_Select, { cs_totalexpensesfortnightly_base: number | null; transactioncurrencyid_guid: string | null }, { cs_totalexpensesfortnightly_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
    cs_totalexpensesmonthly: WebAttribute<cs_budget_Select, { cs_totalexpensesmonthly: number | null; transactioncurrencyid_guid: string | null }, { cs_totalexpensesmonthly_formatted?: string; transactioncurrencyid_formatted?: string }>;
    cs_totalexpensesmonthly_base: WebAttribute<cs_budget_Select, { cs_totalexpensesmonthly_base: number | null; transactioncurrencyid_guid: string | null }, { cs_totalexpensesmonthly_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
    cs_totalexpensesquaterly: WebAttribute<cs_budget_Select, { cs_totalexpensesquaterly: number | null; transactioncurrencyid_guid: string | null }, { cs_totalexpensesquaterly_formatted?: string; transactioncurrencyid_formatted?: string }>;
    cs_totalexpensesquaterly_base: WebAttribute<cs_budget_Select, { cs_totalexpensesquaterly_base: number | null; transactioncurrencyid_guid: string | null }, { cs_totalexpensesquaterly_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
    cs_totalexpensesweekly: WebAttribute<cs_budget_Select, { cs_totalexpensesweekly: number | null; transactioncurrencyid_guid: string | null }, { cs_totalexpensesweekly_formatted?: string; transactioncurrencyid_formatted?: string }>;
    cs_totalexpensesweekly_base: WebAttribute<cs_budget_Select, { cs_totalexpensesweekly_base: number | null; transactioncurrencyid_guid: string | null }, { cs_totalexpensesweekly_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
    cs_totalincomesannualy: WebAttribute<cs_budget_Select, { cs_totalincomesannualy: number | null; transactioncurrencyid_guid: string | null }, { cs_totalincomesannualy_formatted?: string; transactioncurrencyid_formatted?: string }>;
    cs_totalincomesannualy_base: WebAttribute<cs_budget_Select, { cs_totalincomesannualy_base: number | null; transactioncurrencyid_guid: string | null }, { cs_totalincomesannualy_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
    cs_totalincomesdaily: WebAttribute<cs_budget_Select, { cs_totalincomesdaily: number | null; transactioncurrencyid_guid: string | null }, { cs_totalincomesdaily_formatted?: string; transactioncurrencyid_formatted?: string }>;
    cs_totalincomesdaily_base: WebAttribute<cs_budget_Select, { cs_totalincomesdaily_base: number | null; transactioncurrencyid_guid: string | null }, { cs_totalincomesdaily_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
    cs_totalincomesfortnightly: WebAttribute<cs_budget_Select, { cs_totalincomesfortnightly: number | null; transactioncurrencyid_guid: string | null }, { cs_totalincomesfortnightly_formatted?: string; transactioncurrencyid_formatted?: string }>;
    cs_totalincomesfortnightly_base: WebAttribute<cs_budget_Select, { cs_totalincomesfortnightly_base: number | null; transactioncurrencyid_guid: string | null }, { cs_totalincomesfortnightly_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
    cs_totalincomesmonthly: WebAttribute<cs_budget_Select, { cs_totalincomesmonthly: number | null; transactioncurrencyid_guid: string | null }, { cs_totalincomesmonthly_formatted?: string; transactioncurrencyid_formatted?: string }>;
    cs_totalincomesmonthly_base: WebAttribute<cs_budget_Select, { cs_totalincomesmonthly_base: number | null; transactioncurrencyid_guid: string | null }, { cs_totalincomesmonthly_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
    cs_totalincomesquaterly: WebAttribute<cs_budget_Select, { cs_totalincomesquaterly: number | null; transactioncurrencyid_guid: string | null }, { cs_totalincomesquaterly_formatted?: string; transactioncurrencyid_formatted?: string }>;
    cs_totalincomesquaterly_base: WebAttribute<cs_budget_Select, { cs_totalincomesquaterly_base: number | null; transactioncurrencyid_guid: string | null }, { cs_totalincomesquaterly_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
    cs_totalincomesweekly: WebAttribute<cs_budget_Select, { cs_totalincomesweekly: number | null; transactioncurrencyid_guid: string | null }, { cs_totalincomesweekly_formatted?: string; transactioncurrencyid_formatted?: string }>;
    cs_totalincomesweekly_base: WebAttribute<cs_budget_Select, { cs_totalincomesweekly_base: number | null; transactioncurrencyid_guid: string | null }, { cs_totalincomesweekly_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
    exchangerate: WebAttribute<cs_budget_Select, { exchangerate: number | null }, {  }>;
    importsequencenumber: WebAttribute<cs_budget_Select, { importsequencenumber: number | null }, {  }>;
    modifiedby_guid: WebAttribute<cs_budget_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
    modifiedon: WebAttribute<cs_budget_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
    modifiedonbehalfby_guid: WebAttribute<cs_budget_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
    overriddencreatedon: WebAttribute<cs_budget_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
    ownerid_guid: WebAttribute<cs_budget_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
    owningbusinessunit_guid: WebAttribute<cs_budget_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
    owningteam_guid: WebAttribute<cs_budget_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
    owninguser_guid: WebAttribute<cs_budget_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
    statecode: WebAttribute<cs_budget_Select, { statecode: cs_budget_statecode | null }, { statecode_formatted?: string }>;
    statuscode: WebAttribute<cs_budget_Select, { statuscode: cs_budget_statuscode | null }, { statuscode_formatted?: string }>;
    timezoneruleversionnumber: WebAttribute<cs_budget_Select, { timezoneruleversionnumber: number | null }, {  }>;
    transactioncurrencyid_guid: WebAttribute<cs_budget_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
    utcconversiontimezonecode: WebAttribute<cs_budget_Select, { utcconversiontimezonecode: number | null }, {  }>;
    versionnumber: WebAttribute<cs_budget_Select, { versionnumber: number | null }, {  }>;
  }
  interface cs_budget_Filter {
    createdby_guid: XQW.Guid;
    createdon: Date;
    createdonbehalfby_guid: XQW.Guid;
    cs_budgetid: XQW.Guid;
    cs_name: string;
    cs_period: cs_period;
    cs_totalavailableannualy: number;
    cs_totalavailableannualy_base: number;
    cs_totalavailabledaily: number;
    cs_totalavailabledaily_base: number;
    cs_totalavailablefortnightly: number;
    cs_totalavailablefortnightly_base: number;
    cs_totalavailablemonthly: number;
    cs_totalavailablemonthly_base: number;
    cs_totalavailablequaterly: number;
    cs_totalavailablequaterly_base: number;
    cs_totalavailableweekly: number;
    cs_totalavailableweekly_base: number;
    cs_totalexpensesannualy: number;
    cs_totalexpensesannualy_base: number;
    cs_totalexpensesdaily: number;
    cs_totalexpensesdaily_base: number;
    cs_totalexpensesfortnightly: number;
    cs_totalexpensesfortnightly_base: number;
    cs_totalexpensesmonthly: number;
    cs_totalexpensesmonthly_base: number;
    cs_totalexpensesquaterly: number;
    cs_totalexpensesquaterly_base: number;
    cs_totalexpensesweekly: number;
    cs_totalexpensesweekly_base: number;
    cs_totalincomesannualy: number;
    cs_totalincomesannualy_base: number;
    cs_totalincomesdaily: number;
    cs_totalincomesdaily_base: number;
    cs_totalincomesfortnightly: number;
    cs_totalincomesfortnightly_base: number;
    cs_totalincomesmonthly: number;
    cs_totalincomesmonthly_base: number;
    cs_totalincomesquaterly: number;
    cs_totalincomesquaterly_base: number;
    cs_totalincomesweekly: number;
    cs_totalincomesweekly_base: number;
    exchangerate: any;
    importsequencenumber: number;
    modifiedby_guid: XQW.Guid;
    modifiedon: Date;
    modifiedonbehalfby_guid: XQW.Guid;
    overriddencreatedon: Date;
    ownerid_guid: XQW.Guid;
    owningbusinessunit_guid: XQW.Guid;
    owningteam_guid: XQW.Guid;
    owninguser_guid: XQW.Guid;
    statecode: cs_budget_statecode;
    statuscode: cs_budget_statuscode;
    timezoneruleversionnumber: number;
    transactioncurrencyid_guid: XQW.Guid;
    utcconversiontimezonecode: number;
    versionnumber: number;
  }
  interface cs_budget_Expand {
    cs_cs_budget_cs_expense_Budget: WebExpand<cs_budget_Expand, cs_expense_Select, cs_expense_Filter, { cs_cs_budget_cs_expense_Budget: cs_expense_Result[] }>;
    cs_cs_budget_cs_income_Budget: WebExpand<cs_budget_Expand, cs_income_Select, cs_income_Filter, { cs_cs_budget_cs_income_Budget: cs_income_Result[] }>;
  }
  interface cs_budget_FormattedResult {
    createdby_formatted?: string;
    createdon_formatted?: string;
    createdonbehalfby_formatted?: string;
    cs_period_formatted?: string;
    cs_totalavailableannualy_base_formatted?: string;
    cs_totalavailableannualy_formatted?: string;
    cs_totalavailabledaily_base_formatted?: string;
    cs_totalavailabledaily_formatted?: string;
    cs_totalavailablefortnightly_base_formatted?: string;
    cs_totalavailablefortnightly_formatted?: string;
    cs_totalavailablemonthly_base_formatted?: string;
    cs_totalavailablemonthly_formatted?: string;
    cs_totalavailablequaterly_base_formatted?: string;
    cs_totalavailablequaterly_formatted?: string;
    cs_totalavailableweekly_base_formatted?: string;
    cs_totalavailableweekly_formatted?: string;
    cs_totalexpensesannualy_base_formatted?: string;
    cs_totalexpensesannualy_formatted?: string;
    cs_totalexpensesdaily_base_formatted?: string;
    cs_totalexpensesdaily_formatted?: string;
    cs_totalexpensesfortnightly_base_formatted?: string;
    cs_totalexpensesfortnightly_formatted?: string;
    cs_totalexpensesmonthly_base_formatted?: string;
    cs_totalexpensesmonthly_formatted?: string;
    cs_totalexpensesquaterly_base_formatted?: string;
    cs_totalexpensesquaterly_formatted?: string;
    cs_totalexpensesweekly_base_formatted?: string;
    cs_totalexpensesweekly_formatted?: string;
    cs_totalincomesannualy_base_formatted?: string;
    cs_totalincomesannualy_formatted?: string;
    cs_totalincomesdaily_base_formatted?: string;
    cs_totalincomesdaily_formatted?: string;
    cs_totalincomesfortnightly_base_formatted?: string;
    cs_totalincomesfortnightly_formatted?: string;
    cs_totalincomesmonthly_base_formatted?: string;
    cs_totalincomesmonthly_formatted?: string;
    cs_totalincomesquaterly_base_formatted?: string;
    cs_totalincomesquaterly_formatted?: string;
    cs_totalincomesweekly_base_formatted?: string;
    cs_totalincomesweekly_formatted?: string;
    modifiedby_formatted?: string;
    modifiedon_formatted?: string;
    modifiedonbehalfby_formatted?: string;
    overriddencreatedon_formatted?: string;
    ownerid_formatted?: string;
    owningbusinessunit_formatted?: string;
    owningteam_formatted?: string;
    owninguser_formatted?: string;
    statecode_formatted?: string;
    statuscode_formatted?: string;
    transactioncurrencyid_formatted?: string;
  }
  interface cs_budget_Result extends cs_budget_Base, cs_budget_Relationships {
    "@odata.etag": string;
    createdby_guid: string | null;
    createdonbehalfby_guid: string | null;
    modifiedby_guid: string | null;
    modifiedonbehalfby_guid: string | null;
    ownerid_guid: string | null;
    owningbusinessunit_guid: string | null;
    owningteam_guid: string | null;
    owninguser_guid: string | null;
    transactioncurrencyid_guid: string | null;
  }
  interface cs_budget_RelatedOne {
  }
  interface cs_budget_RelatedMany {
    cs_cs_budget_cs_expense_Budget: WebMappingRetrieve<WebNs.cs_expense_Select,WebNs.cs_expense_Expand,WebNs.cs_expense_Filter,WebNs.cs_expense_Fixed,WebNs.cs_expense_Result,WebNs.cs_expense_FormattedResult>;
    cs_cs_budget_cs_income_Budget: WebMappingRetrieve<WebNs.cs_income_Select,WebNs.cs_income_Expand,WebNs.cs_income_Filter,WebNs.cs_income_Fixed,WebNs.cs_income_Result,WebNs.cs_income_FormattedResult>;
  }
}
interface WebEntitiesRetrieve {
  cs_budgets: WebMappingRetrieve<WebNs.cs_budget_Select,WebNs.cs_budget_Expand,WebNs.cs_budget_Filter,WebNs.cs_budget_Fixed,WebNs.cs_budget_Result,WebNs.cs_budget_FormattedResult>;
}
interface WebEntitiesRelated {
  cs_budgets: WebMappingRelated<WebNs.cs_budget_RelatedOne,WebNs.cs_budget_RelatedMany>;
}
interface WebEntitiesCUDA {
  cs_budgets: WebMappingCUDA<WebNs.cs_budget_Create,WebNs.cs_budget_Update,WebNs.cs_budget_Select>;
}
declare namespace WebNs {
  interface cs_expense_Base extends WebEntity {
    createdon?: Date | null;
    cs_expenseid?: string | null;
    cs_name?: string | null;
    cs_period?: cs_period | null;
    cs_value?: number | null;
    cs_value_base?: number | null;
    exchangerate?: number | null;
    importsequencenumber?: number | null;
    modifiedon?: Date | null;
    overriddencreatedon?: Date | null;
    statecode?: cs_expense_statecode | null;
    statuscode?: cs_expense_statuscode | null;
    timezoneruleversionnumber?: number | null;
    transactioncurrencyid_guid?: string | null;
    utcconversiontimezonecode?: number | null;
    versionnumber?: number | null;
  }
  interface cs_expense_Relationships {
    cs_Budget?: cs_budget_Result | null;
    cs_ExpenseCategory?: cs_expensecategory_Result | null;
    cs_Recurrence?: cs_recurrence_Result | null;
    cs_cs_expense_cs_recurrence_Expense?: cs_recurrence_Result[] | null;
  }
  interface cs_expense extends cs_expense_Base, cs_expense_Relationships {
    cs_Budget_bind$cs_budgets?: string | null;
    cs_ExpenseCategory_bind$cs_expensecategories?: string | null;
    cs_Recurrence_bind$cs_recurrences?: string | null;
    ownerid_bind$owners?: string | null;
    transactioncurrencyid_bind$transactioncurrencies?: string | null;
  }
  interface cs_expense_Create extends cs_expense {
  }
  interface cs_expense_Update extends cs_expense {
  }
  interface cs_expense_Select {
    createdby_guid: WebAttribute<cs_expense_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
    createdon: WebAttribute<cs_expense_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
    createdonbehalfby_guid: WebAttribute<cs_expense_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
    cs_budget_guid: WebAttribute<cs_expense_Select, { cs_budget_guid: string | null }, { cs_budget_formatted?: string }>;
    cs_expensecategory_guid: WebAttribute<cs_expense_Select, { cs_expensecategory_guid: string | null }, { cs_expensecategory_formatted?: string }>;
    cs_expenseid: WebAttribute<cs_expense_Select, { cs_expenseid: string | null }, {  }>;
    cs_name: WebAttribute<cs_expense_Select, { cs_name: string | null }, {  }>;
    cs_period: WebAttribute<cs_expense_Select, { cs_period: cs_period | null }, { cs_period_formatted?: string }>;
    cs_recurrence_guid: WebAttribute<cs_expense_Select, { cs_recurrence_guid: string | null }, { cs_recurrence_formatted?: string }>;
    cs_value: WebAttribute<cs_expense_Select, { cs_value: number | null; transactioncurrencyid_guid: string | null }, { cs_value_formatted?: string; transactioncurrencyid_formatted?: string }>;
    cs_value_base: WebAttribute<cs_expense_Select, { cs_value_base: number | null; transactioncurrencyid_guid: string | null }, { cs_value_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
    exchangerate: WebAttribute<cs_expense_Select, { exchangerate: number | null }, {  }>;
    importsequencenumber: WebAttribute<cs_expense_Select, { importsequencenumber: number | null }, {  }>;
    modifiedby_guid: WebAttribute<cs_expense_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
    modifiedon: WebAttribute<cs_expense_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
    modifiedonbehalfby_guid: WebAttribute<cs_expense_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
    overriddencreatedon: WebAttribute<cs_expense_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
    ownerid_guid: WebAttribute<cs_expense_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
    owningbusinessunit_guid: WebAttribute<cs_expense_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
    owningteam_guid: WebAttribute<cs_expense_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
    owninguser_guid: WebAttribute<cs_expense_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
    statecode: WebAttribute<cs_expense_Select, { statecode: cs_expense_statecode | null }, { statecode_formatted?: string }>;
    statuscode: WebAttribute<cs_expense_Select, { statuscode: cs_expense_statuscode | null }, { statuscode_formatted?: string }>;
    timezoneruleversionnumber: WebAttribute<cs_expense_Select, { timezoneruleversionnumber: number | null }, {  }>;
    transactioncurrencyid_guid: WebAttribute<cs_expense_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
    utcconversiontimezonecode: WebAttribute<cs_expense_Select, { utcconversiontimezonecode: number | null }, {  }>;
    versionnumber: WebAttribute<cs_expense_Select, { versionnumber: number | null }, {  }>;
  }
  interface cs_expense_Filter {
    createdby_guid: XQW.Guid;
    createdon: Date;
    createdonbehalfby_guid: XQW.Guid;
    cs_budget_guid: XQW.Guid;
    cs_expensecategory_guid: XQW.Guid;
    cs_expenseid: XQW.Guid;
    cs_name: string;
    cs_period: cs_period;
    cs_recurrence_guid: XQW.Guid;
    cs_value: number;
    cs_value_base: number;
    exchangerate: any;
    importsequencenumber: number;
    modifiedby_guid: XQW.Guid;
    modifiedon: Date;
    modifiedonbehalfby_guid: XQW.Guid;
    overriddencreatedon: Date;
    ownerid_guid: XQW.Guid;
    owningbusinessunit_guid: XQW.Guid;
    owningteam_guid: XQW.Guid;
    owninguser_guid: XQW.Guid;
    statecode: cs_expense_statecode;
    statuscode: cs_expense_statuscode;
    timezoneruleversionnumber: number;
    transactioncurrencyid_guid: XQW.Guid;
    utcconversiontimezonecode: number;
    versionnumber: number;
  }
  interface cs_expense_Expand {
    cs_Budget: WebExpand<cs_expense_Expand, cs_budget_Select, cs_budget_Filter, { cs_Budget: cs_budget_Result }>;
    cs_ExpenseCategory: WebExpand<cs_expense_Expand, cs_expensecategory_Select, cs_expensecategory_Filter, { cs_ExpenseCategory: cs_expensecategory_Result }>;
    cs_Recurrence: WebExpand<cs_expense_Expand, cs_recurrence_Select, cs_recurrence_Filter, { cs_Recurrence: cs_recurrence_Result }>;
    cs_cs_expense_cs_recurrence_Expense: WebExpand<cs_expense_Expand, cs_recurrence_Select, cs_recurrence_Filter, { cs_cs_expense_cs_recurrence_Expense: cs_recurrence_Result[] }>;
  }
  interface cs_expense_FormattedResult {
    createdby_formatted?: string;
    createdon_formatted?: string;
    createdonbehalfby_formatted?: string;
    cs_budget_formatted?: string;
    cs_expensecategory_formatted?: string;
    cs_period_formatted?: string;
    cs_recurrence_formatted?: string;
    cs_value_base_formatted?: string;
    cs_value_formatted?: string;
    modifiedby_formatted?: string;
    modifiedon_formatted?: string;
    modifiedonbehalfby_formatted?: string;
    overriddencreatedon_formatted?: string;
    ownerid_formatted?: string;
    owningbusinessunit_formatted?: string;
    owningteam_formatted?: string;
    owninguser_formatted?: string;
    statecode_formatted?: string;
    statuscode_formatted?: string;
    transactioncurrencyid_formatted?: string;
  }
  interface cs_expense_Result extends cs_expense_Base, cs_expense_Relationships {
    "@odata.etag": string;
    createdby_guid: string | null;
    createdonbehalfby_guid: string | null;
    cs_budget_guid: string | null;
    cs_expensecategory_guid: string | null;
    cs_recurrence_guid: string | null;
    modifiedby_guid: string | null;
    modifiedonbehalfby_guid: string | null;
    ownerid_guid: string | null;
    owningbusinessunit_guid: string | null;
    owningteam_guid: string | null;
    owninguser_guid: string | null;
    transactioncurrencyid_guid: string | null;
  }
  interface cs_expense_RelatedOne {
    cs_Budget: WebMappingRetrieve<WebNs.cs_budget_Select,WebNs.cs_budget_Expand,WebNs.cs_budget_Filter,WebNs.cs_budget_Fixed,WebNs.cs_budget_Result,WebNs.cs_budget_FormattedResult>;
    cs_ExpenseCategory: WebMappingRetrieve<WebNs.cs_expensecategory_Select,WebNs.cs_expensecategory_Expand,WebNs.cs_expensecategory_Filter,WebNs.cs_expensecategory_Fixed,WebNs.cs_expensecategory_Result,WebNs.cs_expensecategory_FormattedResult>;
    cs_Recurrence: WebMappingRetrieve<WebNs.cs_recurrence_Select,WebNs.cs_recurrence_Expand,WebNs.cs_recurrence_Filter,WebNs.cs_recurrence_Fixed,WebNs.cs_recurrence_Result,WebNs.cs_recurrence_FormattedResult>;
  }
  interface cs_expense_RelatedMany {
    cs_cs_expense_cs_recurrence_Expense: WebMappingRetrieve<WebNs.cs_recurrence_Select,WebNs.cs_recurrence_Expand,WebNs.cs_recurrence_Filter,WebNs.cs_recurrence_Fixed,WebNs.cs_recurrence_Result,WebNs.cs_recurrence_FormattedResult>;
  }
}
interface WebEntitiesRetrieve {
  cs_expenses: WebMappingRetrieve<WebNs.cs_expense_Select,WebNs.cs_expense_Expand,WebNs.cs_expense_Filter,WebNs.cs_expense_Fixed,WebNs.cs_expense_Result,WebNs.cs_expense_FormattedResult>;
}
interface WebEntitiesRelated {
  cs_expenses: WebMappingRelated<WebNs.cs_expense_RelatedOne,WebNs.cs_expense_RelatedMany>;
}
interface WebEntitiesCUDA {
  cs_expenses: WebMappingCUDA<WebNs.cs_expense_Create,WebNs.cs_expense_Update,WebNs.cs_expense_Select>;
}
declare namespace WebNs {
  interface cs_expensecategory_Base extends WebEntity {
    createdon?: Date | null;
    cs_expensecategoryid?: string | null;
    cs_name?: string | null;
    importsequencenumber?: number | null;
    modifiedon?: Date | null;
    overriddencreatedon?: Date | null;
    statecode?: cs_expensecategory_statecode | null;
    statuscode?: cs_expensecategory_statuscode | null;
    timezoneruleversionnumber?: number | null;
    utcconversiontimezonecode?: number | null;
    versionnumber?: number | null;
  }
  interface cs_expensecategory_Relationships {
    cs_cs_expensecategory_cs_expense_ExpenseCategory?: cs_expense_Result[] | null;
  }
  interface cs_expensecategory extends cs_expensecategory_Base, cs_expensecategory_Relationships {
    ownerid_bind$owners?: string | null;
  }
  interface cs_expensecategory_Create extends cs_expensecategory {
  }
  interface cs_expensecategory_Update extends cs_expensecategory {
  }
  interface cs_expensecategory_Select {
    createdby_guid: WebAttribute<cs_expensecategory_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
    createdon: WebAttribute<cs_expensecategory_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
    createdonbehalfby_guid: WebAttribute<cs_expensecategory_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
    cs_expensecategoryid: WebAttribute<cs_expensecategory_Select, { cs_expensecategoryid: string | null }, {  }>;
    cs_name: WebAttribute<cs_expensecategory_Select, { cs_name: string | null }, {  }>;
    importsequencenumber: WebAttribute<cs_expensecategory_Select, { importsequencenumber: number | null }, {  }>;
    modifiedby_guid: WebAttribute<cs_expensecategory_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
    modifiedon: WebAttribute<cs_expensecategory_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
    modifiedonbehalfby_guid: WebAttribute<cs_expensecategory_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
    overriddencreatedon: WebAttribute<cs_expensecategory_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
    ownerid_guid: WebAttribute<cs_expensecategory_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
    owningbusinessunit_guid: WebAttribute<cs_expensecategory_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
    owningteam_guid: WebAttribute<cs_expensecategory_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
    owninguser_guid: WebAttribute<cs_expensecategory_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
    statecode: WebAttribute<cs_expensecategory_Select, { statecode: cs_expensecategory_statecode | null }, { statecode_formatted?: string }>;
    statuscode: WebAttribute<cs_expensecategory_Select, { statuscode: cs_expensecategory_statuscode | null }, { statuscode_formatted?: string }>;
    timezoneruleversionnumber: WebAttribute<cs_expensecategory_Select, { timezoneruleversionnumber: number | null }, {  }>;
    utcconversiontimezonecode: WebAttribute<cs_expensecategory_Select, { utcconversiontimezonecode: number | null }, {  }>;
    versionnumber: WebAttribute<cs_expensecategory_Select, { versionnumber: number | null }, {  }>;
  }
  interface cs_expensecategory_Filter {
    createdby_guid: XQW.Guid;
    createdon: Date;
    createdonbehalfby_guid: XQW.Guid;
    cs_expensecategoryid: XQW.Guid;
    cs_name: string;
    importsequencenumber: number;
    modifiedby_guid: XQW.Guid;
    modifiedon: Date;
    modifiedonbehalfby_guid: XQW.Guid;
    overriddencreatedon: Date;
    ownerid_guid: XQW.Guid;
    owningbusinessunit_guid: XQW.Guid;
    owningteam_guid: XQW.Guid;
    owninguser_guid: XQW.Guid;
    statecode: cs_expensecategory_statecode;
    statuscode: cs_expensecategory_statuscode;
    timezoneruleversionnumber: number;
    utcconversiontimezonecode: number;
    versionnumber: number;
  }
  interface cs_expensecategory_Expand {
    cs_cs_expensecategory_cs_expense_ExpenseCategory: WebExpand<cs_expensecategory_Expand, cs_expense_Select, cs_expense_Filter, { cs_cs_expensecategory_cs_expense_ExpenseCategory: cs_expense_Result[] }>;
  }
  interface cs_expensecategory_FormattedResult {
    createdby_formatted?: string;
    createdon_formatted?: string;
    createdonbehalfby_formatted?: string;
    modifiedby_formatted?: string;
    modifiedon_formatted?: string;
    modifiedonbehalfby_formatted?: string;
    overriddencreatedon_formatted?: string;
    ownerid_formatted?: string;
    owningbusinessunit_formatted?: string;
    owningteam_formatted?: string;
    owninguser_formatted?: string;
    statecode_formatted?: string;
    statuscode_formatted?: string;
  }
  interface cs_expensecategory_Result extends cs_expensecategory_Base, cs_expensecategory_Relationships {
    "@odata.etag": string;
    createdby_guid: string | null;
    createdonbehalfby_guid: string | null;
    modifiedby_guid: string | null;
    modifiedonbehalfby_guid: string | null;
    ownerid_guid: string | null;
    owningbusinessunit_guid: string | null;
    owningteam_guid: string | null;
    owninguser_guid: string | null;
  }
  interface cs_expensecategory_RelatedOne {
  }
  interface cs_expensecategory_RelatedMany {
    cs_cs_expensecategory_cs_expense_ExpenseCategory: WebMappingRetrieve<WebNs.cs_expense_Select,WebNs.cs_expense_Expand,WebNs.cs_expense_Filter,WebNs.cs_expense_Fixed,WebNs.cs_expense_Result,WebNs.cs_expense_FormattedResult>;
  }
}
interface WebEntitiesRetrieve {
  cs_expensecategories: WebMappingRetrieve<WebNs.cs_expensecategory_Select,WebNs.cs_expensecategory_Expand,WebNs.cs_expensecategory_Filter,WebNs.cs_expensecategory_Fixed,WebNs.cs_expensecategory_Result,WebNs.cs_expensecategory_FormattedResult>;
}
interface WebEntitiesRelated {
  cs_expensecategories: WebMappingRelated<WebNs.cs_expensecategory_RelatedOne,WebNs.cs_expensecategory_RelatedMany>;
}
interface WebEntitiesCUDA {
  cs_expensecategories: WebMappingCUDA<WebNs.cs_expensecategory_Create,WebNs.cs_expensecategory_Update,WebNs.cs_expensecategory_Select>;
}
declare namespace WebNs {
  interface cs_income_Base extends WebEntity {
    createdon?: Date | null;
    cs_incomeid?: string | null;
    cs_name?: string | null;
    cs_period?: cs_period | null;
    cs_value?: number | null;
    cs_value_base?: number | null;
    exchangerate?: number | null;
    importsequencenumber?: number | null;
    modifiedon?: Date | null;
    overriddencreatedon?: Date | null;
    statecode?: cs_income_statecode | null;
    statuscode?: cs_income_statuscode | null;
    timezoneruleversionnumber?: number | null;
    transactioncurrencyid_guid?: string | null;
    utcconversiontimezonecode?: number | null;
    versionnumber?: number | null;
  }
  interface cs_income_Relationships {
    cs_Budget?: cs_budget_Result | null;
    cs_IncomeCategory?: cs_incomecategory_Result | null;
    cs_cs_income_cs_recurrence_Income?: cs_recurrence_Result[] | null;
  }
  interface cs_income extends cs_income_Base, cs_income_Relationships {
    cs_Budget_bind$cs_budgets?: string | null;
    cs_IncomeCategory_bind$cs_incomecategories?: string | null;
    ownerid_bind$owners?: string | null;
    transactioncurrencyid_bind$transactioncurrencies?: string | null;
  }
  interface cs_income_Create extends cs_income {
  }
  interface cs_income_Update extends cs_income {
  }
  interface cs_income_Select {
    createdby_guid: WebAttribute<cs_income_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
    createdon: WebAttribute<cs_income_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
    createdonbehalfby_guid: WebAttribute<cs_income_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
    cs_budget_guid: WebAttribute<cs_income_Select, { cs_budget_guid: string | null }, { cs_budget_formatted?: string }>;
    cs_incomecategory_guid: WebAttribute<cs_income_Select, { cs_incomecategory_guid: string | null }, { cs_incomecategory_formatted?: string }>;
    cs_incomeid: WebAttribute<cs_income_Select, { cs_incomeid: string | null }, {  }>;
    cs_name: WebAttribute<cs_income_Select, { cs_name: string | null }, {  }>;
    cs_period: WebAttribute<cs_income_Select, { cs_period: cs_period | null }, { cs_period_formatted?: string }>;
    cs_value: WebAttribute<cs_income_Select, { cs_value: number | null; transactioncurrencyid_guid: string | null }, { cs_value_formatted?: string; transactioncurrencyid_formatted?: string }>;
    cs_value_base: WebAttribute<cs_income_Select, { cs_value_base: number | null; transactioncurrencyid_guid: string | null }, { cs_value_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
    exchangerate: WebAttribute<cs_income_Select, { exchangerate: number | null }, {  }>;
    importsequencenumber: WebAttribute<cs_income_Select, { importsequencenumber: number | null }, {  }>;
    modifiedby_guid: WebAttribute<cs_income_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
    modifiedon: WebAttribute<cs_income_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
    modifiedonbehalfby_guid: WebAttribute<cs_income_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
    overriddencreatedon: WebAttribute<cs_income_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
    ownerid_guid: WebAttribute<cs_income_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
    owningbusinessunit_guid: WebAttribute<cs_income_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
    owningteam_guid: WebAttribute<cs_income_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
    owninguser_guid: WebAttribute<cs_income_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
    statecode: WebAttribute<cs_income_Select, { statecode: cs_income_statecode | null }, { statecode_formatted?: string }>;
    statuscode: WebAttribute<cs_income_Select, { statuscode: cs_income_statuscode | null }, { statuscode_formatted?: string }>;
    timezoneruleversionnumber: WebAttribute<cs_income_Select, { timezoneruleversionnumber: number | null }, {  }>;
    transactioncurrencyid_guid: WebAttribute<cs_income_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
    utcconversiontimezonecode: WebAttribute<cs_income_Select, { utcconversiontimezonecode: number | null }, {  }>;
    versionnumber: WebAttribute<cs_income_Select, { versionnumber: number | null }, {  }>;
  }
  interface cs_income_Filter {
    createdby_guid: XQW.Guid;
    createdon: Date;
    createdonbehalfby_guid: XQW.Guid;
    cs_budget_guid: XQW.Guid;
    cs_incomecategory_guid: XQW.Guid;
    cs_incomeid: XQW.Guid;
    cs_name: string;
    cs_period: cs_period;
    cs_value: number;
    cs_value_base: number;
    exchangerate: any;
    importsequencenumber: number;
    modifiedby_guid: XQW.Guid;
    modifiedon: Date;
    modifiedonbehalfby_guid: XQW.Guid;
    overriddencreatedon: Date;
    ownerid_guid: XQW.Guid;
    owningbusinessunit_guid: XQW.Guid;
    owningteam_guid: XQW.Guid;
    owninguser_guid: XQW.Guid;
    statecode: cs_income_statecode;
    statuscode: cs_income_statuscode;
    timezoneruleversionnumber: number;
    transactioncurrencyid_guid: XQW.Guid;
    utcconversiontimezonecode: number;
    versionnumber: number;
  }
  interface cs_income_Expand {
    cs_Budget: WebExpand<cs_income_Expand, cs_budget_Select, cs_budget_Filter, { cs_Budget: cs_budget_Result }>;
    cs_IncomeCategory: WebExpand<cs_income_Expand, cs_incomecategory_Select, cs_incomecategory_Filter, { cs_IncomeCategory: cs_incomecategory_Result }>;
    cs_cs_income_cs_recurrence_Income: WebExpand<cs_income_Expand, cs_recurrence_Select, cs_recurrence_Filter, { cs_cs_income_cs_recurrence_Income: cs_recurrence_Result[] }>;
  }
  interface cs_income_FormattedResult {
    createdby_formatted?: string;
    createdon_formatted?: string;
    createdonbehalfby_formatted?: string;
    cs_budget_formatted?: string;
    cs_incomecategory_formatted?: string;
    cs_period_formatted?: string;
    cs_value_base_formatted?: string;
    cs_value_formatted?: string;
    modifiedby_formatted?: string;
    modifiedon_formatted?: string;
    modifiedonbehalfby_formatted?: string;
    overriddencreatedon_formatted?: string;
    ownerid_formatted?: string;
    owningbusinessunit_formatted?: string;
    owningteam_formatted?: string;
    owninguser_formatted?: string;
    statecode_formatted?: string;
    statuscode_formatted?: string;
    transactioncurrencyid_formatted?: string;
  }
  interface cs_income_Result extends cs_income_Base, cs_income_Relationships {
    "@odata.etag": string;
    createdby_guid: string | null;
    createdonbehalfby_guid: string | null;
    cs_budget_guid: string | null;
    cs_incomecategory_guid: string | null;
    modifiedby_guid: string | null;
    modifiedonbehalfby_guid: string | null;
    ownerid_guid: string | null;
    owningbusinessunit_guid: string | null;
    owningteam_guid: string | null;
    owninguser_guid: string | null;
    transactioncurrencyid_guid: string | null;
  }
  interface cs_income_RelatedOne {
    cs_Budget: WebMappingRetrieve<WebNs.cs_budget_Select,WebNs.cs_budget_Expand,WebNs.cs_budget_Filter,WebNs.cs_budget_Fixed,WebNs.cs_budget_Result,WebNs.cs_budget_FormattedResult>;
    cs_IncomeCategory: WebMappingRetrieve<WebNs.cs_incomecategory_Select,WebNs.cs_incomecategory_Expand,WebNs.cs_incomecategory_Filter,WebNs.cs_incomecategory_Fixed,WebNs.cs_incomecategory_Result,WebNs.cs_incomecategory_FormattedResult>;
  }
  interface cs_income_RelatedMany {
    cs_cs_income_cs_recurrence_Income: WebMappingRetrieve<WebNs.cs_recurrence_Select,WebNs.cs_recurrence_Expand,WebNs.cs_recurrence_Filter,WebNs.cs_recurrence_Fixed,WebNs.cs_recurrence_Result,WebNs.cs_recurrence_FormattedResult>;
  }
}
interface WebEntitiesRetrieve {
  cs_incomes: WebMappingRetrieve<WebNs.cs_income_Select,WebNs.cs_income_Expand,WebNs.cs_income_Filter,WebNs.cs_income_Fixed,WebNs.cs_income_Result,WebNs.cs_income_FormattedResult>;
}
interface WebEntitiesRelated {
  cs_incomes: WebMappingRelated<WebNs.cs_income_RelatedOne,WebNs.cs_income_RelatedMany>;
}
interface WebEntitiesCUDA {
  cs_incomes: WebMappingCUDA<WebNs.cs_income_Create,WebNs.cs_income_Update,WebNs.cs_income_Select>;
}
declare namespace WebNs {
  interface cs_incomecategory_Base extends WebEntity {
    createdon?: Date | null;
    cs_incomecategoryid?: string | null;
    cs_name?: string | null;
    importsequencenumber?: number | null;
    modifiedon?: Date | null;
    overriddencreatedon?: Date | null;
    statecode?: cs_incomecategory_statecode | null;
    statuscode?: cs_incomecategory_statuscode | null;
    timezoneruleversionnumber?: number | null;
    utcconversiontimezonecode?: number | null;
    versionnumber?: number | null;
  }
  interface cs_incomecategory_Relationships {
    cs_cs_incomecategory_cs_income_IncomeCategory?: cs_income_Result[] | null;
  }
  interface cs_incomecategory extends cs_incomecategory_Base, cs_incomecategory_Relationships {
    ownerid_bind$owners?: string | null;
  }
  interface cs_incomecategory_Create extends cs_incomecategory {
  }
  interface cs_incomecategory_Update extends cs_incomecategory {
  }
  interface cs_incomecategory_Select {
    createdby_guid: WebAttribute<cs_incomecategory_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
    createdon: WebAttribute<cs_incomecategory_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
    createdonbehalfby_guid: WebAttribute<cs_incomecategory_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
    cs_incomecategoryid: WebAttribute<cs_incomecategory_Select, { cs_incomecategoryid: string | null }, {  }>;
    cs_name: WebAttribute<cs_incomecategory_Select, { cs_name: string | null }, {  }>;
    importsequencenumber: WebAttribute<cs_incomecategory_Select, { importsequencenumber: number | null }, {  }>;
    modifiedby_guid: WebAttribute<cs_incomecategory_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
    modifiedon: WebAttribute<cs_incomecategory_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
    modifiedonbehalfby_guid: WebAttribute<cs_incomecategory_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
    overriddencreatedon: WebAttribute<cs_incomecategory_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
    ownerid_guid: WebAttribute<cs_incomecategory_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
    owningbusinessunit_guid: WebAttribute<cs_incomecategory_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
    owningteam_guid: WebAttribute<cs_incomecategory_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
    owninguser_guid: WebAttribute<cs_incomecategory_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
    statecode: WebAttribute<cs_incomecategory_Select, { statecode: cs_incomecategory_statecode | null }, { statecode_formatted?: string }>;
    statuscode: WebAttribute<cs_incomecategory_Select, { statuscode: cs_incomecategory_statuscode | null }, { statuscode_formatted?: string }>;
    timezoneruleversionnumber: WebAttribute<cs_incomecategory_Select, { timezoneruleversionnumber: number | null }, {  }>;
    utcconversiontimezonecode: WebAttribute<cs_incomecategory_Select, { utcconversiontimezonecode: number | null }, {  }>;
    versionnumber: WebAttribute<cs_incomecategory_Select, { versionnumber: number | null }, {  }>;
  }
  interface cs_incomecategory_Filter {
    createdby_guid: XQW.Guid;
    createdon: Date;
    createdonbehalfby_guid: XQW.Guid;
    cs_incomecategoryid: XQW.Guid;
    cs_name: string;
    importsequencenumber: number;
    modifiedby_guid: XQW.Guid;
    modifiedon: Date;
    modifiedonbehalfby_guid: XQW.Guid;
    overriddencreatedon: Date;
    ownerid_guid: XQW.Guid;
    owningbusinessunit_guid: XQW.Guid;
    owningteam_guid: XQW.Guid;
    owninguser_guid: XQW.Guid;
    statecode: cs_incomecategory_statecode;
    statuscode: cs_incomecategory_statuscode;
    timezoneruleversionnumber: number;
    utcconversiontimezonecode: number;
    versionnumber: number;
  }
  interface cs_incomecategory_Expand {
    cs_cs_incomecategory_cs_income_IncomeCategory: WebExpand<cs_incomecategory_Expand, cs_income_Select, cs_income_Filter, { cs_cs_incomecategory_cs_income_IncomeCategory: cs_income_Result[] }>;
  }
  interface cs_incomecategory_FormattedResult {
    createdby_formatted?: string;
    createdon_formatted?: string;
    createdonbehalfby_formatted?: string;
    modifiedby_formatted?: string;
    modifiedon_formatted?: string;
    modifiedonbehalfby_formatted?: string;
    overriddencreatedon_formatted?: string;
    ownerid_formatted?: string;
    owningbusinessunit_formatted?: string;
    owningteam_formatted?: string;
    owninguser_formatted?: string;
    statecode_formatted?: string;
    statuscode_formatted?: string;
  }
  interface cs_incomecategory_Result extends cs_incomecategory_Base, cs_incomecategory_Relationships {
    "@odata.etag": string;
    createdby_guid: string | null;
    createdonbehalfby_guid: string | null;
    modifiedby_guid: string | null;
    modifiedonbehalfby_guid: string | null;
    ownerid_guid: string | null;
    owningbusinessunit_guid: string | null;
    owningteam_guid: string | null;
    owninguser_guid: string | null;
  }
  interface cs_incomecategory_RelatedOne {
  }
  interface cs_incomecategory_RelatedMany {
    cs_cs_incomecategory_cs_income_IncomeCategory: WebMappingRetrieve<WebNs.cs_income_Select,WebNs.cs_income_Expand,WebNs.cs_income_Filter,WebNs.cs_income_Fixed,WebNs.cs_income_Result,WebNs.cs_income_FormattedResult>;
  }
}
interface WebEntitiesRetrieve {
  cs_incomecategories: WebMappingRetrieve<WebNs.cs_incomecategory_Select,WebNs.cs_incomecategory_Expand,WebNs.cs_incomecategory_Filter,WebNs.cs_incomecategory_Fixed,WebNs.cs_incomecategory_Result,WebNs.cs_incomecategory_FormattedResult>;
}
interface WebEntitiesRelated {
  cs_incomecategories: WebMappingRelated<WebNs.cs_incomecategory_RelatedOne,WebNs.cs_incomecategory_RelatedMany>;
}
interface WebEntitiesCUDA {
  cs_incomecategories: WebMappingCUDA<WebNs.cs_incomecategory_Create,WebNs.cs_incomecategory_Update,WebNs.cs_incomecategory_Select>;
}
declare namespace WebNs {
  interface cs_recurrence_Base extends WebEntity {
    createdon?: Date | null;
    cs_day?: number | null;
    cs_daysofweek?: cs_daysofweek | null;
    cs_everyxmonths?: number | null;
    cs_everyxweeks?: number | null;
    cs_last?: boolean | null;
    cs_month?: cs_months | null;
    cs_name?: string | null;
    cs_oneoff?: boolean | null;
    cs_oneoffdate?: Date | null;
    cs_period?: cs_period | null;
    cs_recurrenceid?: string | null;
    cs_rounding?: cs_rounding | null;
    importsequencenumber?: number | null;
    modifiedon?: Date | null;
    overriddencreatedon?: Date | null;
    statecode?: cs_recurrence_statecode | null;
    statuscode?: cs_recurrence_statuscode | null;
    timezoneruleversionnumber?: number | null;
    utcconversiontimezonecode?: number | null;
    versionnumber?: number | null;
  }
  interface cs_recurrence_Relationships {
    cs_Expense?: cs_expense_Result | null;
    cs_Income?: cs_income_Result | null;
    cs_cs_recurrence_cs_expense_Recurrence?: cs_expense_Result[] | null;
  }
  interface cs_recurrence extends cs_recurrence_Base, cs_recurrence_Relationships {
    cs_Expense_bind$cs_expenses?: string | null;
    cs_Income_bind$cs_incomes?: string | null;
    ownerid_bind$owners?: string | null;
  }
  interface cs_recurrence_Create extends cs_recurrence {
  }
  interface cs_recurrence_Update extends cs_recurrence {
  }
  interface cs_recurrence_Select {
    createdby_guid: WebAttribute<cs_recurrence_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
    createdon: WebAttribute<cs_recurrence_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
    createdonbehalfby_guid: WebAttribute<cs_recurrence_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
    cs_day: WebAttribute<cs_recurrence_Select, { cs_day: number | null }, {  }>;
    cs_daysofweek: WebAttribute<cs_recurrence_Select, { cs_daysofweek: cs_daysofweek | null }, { cs_daysofweek_formatted?: string }>;
    cs_everyxmonths: WebAttribute<cs_recurrence_Select, { cs_everyxmonths: number | null }, {  }>;
    cs_everyxweeks: WebAttribute<cs_recurrence_Select, { cs_everyxweeks: number | null }, {  }>;
    cs_expense_guid: WebAttribute<cs_recurrence_Select, { cs_expense_guid: string | null }, { cs_expense_formatted?: string }>;
    cs_income_guid: WebAttribute<cs_recurrence_Select, { cs_income_guid: string | null }, { cs_income_formatted?: string }>;
    cs_last: WebAttribute<cs_recurrence_Select, { cs_last: boolean | null }, {  }>;
    cs_month: WebAttribute<cs_recurrence_Select, { cs_month: cs_months | null }, { cs_month_formatted?: string }>;
    cs_name: WebAttribute<cs_recurrence_Select, { cs_name: string | null }, {  }>;
    cs_oneoff: WebAttribute<cs_recurrence_Select, { cs_oneoff: boolean | null }, {  }>;
    cs_oneoffdate: WebAttribute<cs_recurrence_Select, { cs_oneoffdate: Date | null }, { cs_oneoffdate_formatted?: string }>;
    cs_period: WebAttribute<cs_recurrence_Select, { cs_period: cs_period | null }, { cs_period_formatted?: string }>;
    cs_recurrenceid: WebAttribute<cs_recurrence_Select, { cs_recurrenceid: string | null }, {  }>;
    cs_rounding: WebAttribute<cs_recurrence_Select, { cs_rounding: cs_rounding | null }, { cs_rounding_formatted?: string }>;
    importsequencenumber: WebAttribute<cs_recurrence_Select, { importsequencenumber: number | null }, {  }>;
    modifiedby_guid: WebAttribute<cs_recurrence_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
    modifiedon: WebAttribute<cs_recurrence_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
    modifiedonbehalfby_guid: WebAttribute<cs_recurrence_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
    overriddencreatedon: WebAttribute<cs_recurrence_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
    ownerid_guid: WebAttribute<cs_recurrence_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
    owningbusinessunit_guid: WebAttribute<cs_recurrence_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
    owningteam_guid: WebAttribute<cs_recurrence_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
    owninguser_guid: WebAttribute<cs_recurrence_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
    statecode: WebAttribute<cs_recurrence_Select, { statecode: cs_recurrence_statecode | null }, { statecode_formatted?: string }>;
    statuscode: WebAttribute<cs_recurrence_Select, { statuscode: cs_recurrence_statuscode | null }, { statuscode_formatted?: string }>;
    timezoneruleversionnumber: WebAttribute<cs_recurrence_Select, { timezoneruleversionnumber: number | null }, {  }>;
    utcconversiontimezonecode: WebAttribute<cs_recurrence_Select, { utcconversiontimezonecode: number | null }, {  }>;
    versionnumber: WebAttribute<cs_recurrence_Select, { versionnumber: number | null }, {  }>;
  }
  interface cs_recurrence_Filter {
    createdby_guid: XQW.Guid;
    createdon: Date;
    createdonbehalfby_guid: XQW.Guid;
    cs_day: number;
    cs_daysofweek: cs_daysofweek;
    cs_everyxmonths: number;
    cs_everyxweeks: number;
    cs_expense_guid: XQW.Guid;
    cs_income_guid: XQW.Guid;
    cs_last: boolean;
    cs_month: cs_months;
    cs_name: string;
    cs_oneoff: boolean;
    cs_oneoffdate: Date;
    cs_period: cs_period;
    cs_recurrenceid: XQW.Guid;
    cs_rounding: cs_rounding;
    importsequencenumber: number;
    modifiedby_guid: XQW.Guid;
    modifiedon: Date;
    modifiedonbehalfby_guid: XQW.Guid;
    overriddencreatedon: Date;
    ownerid_guid: XQW.Guid;
    owningbusinessunit_guid: XQW.Guid;
    owningteam_guid: XQW.Guid;
    owninguser_guid: XQW.Guid;
    statecode: cs_recurrence_statecode;
    statuscode: cs_recurrence_statuscode;
    timezoneruleversionnumber: number;
    utcconversiontimezonecode: number;
    versionnumber: number;
  }
  interface cs_recurrence_Expand {
    cs_Expense: WebExpand<cs_recurrence_Expand, cs_expense_Select, cs_expense_Filter, { cs_Expense: cs_expense_Result }>;
    cs_Income: WebExpand<cs_recurrence_Expand, cs_income_Select, cs_income_Filter, { cs_Income: cs_income_Result }>;
    cs_cs_recurrence_cs_expense_Recurrence: WebExpand<cs_recurrence_Expand, cs_expense_Select, cs_expense_Filter, { cs_cs_recurrence_cs_expense_Recurrence: cs_expense_Result[] }>;
  }
  interface cs_recurrence_FormattedResult {
    createdby_formatted?: string;
    createdon_formatted?: string;
    createdonbehalfby_formatted?: string;
    cs_daysofweek_formatted?: string;
    cs_expense_formatted?: string;
    cs_income_formatted?: string;
    cs_month_formatted?: string;
    cs_oneoffdate_formatted?: string;
    cs_period_formatted?: string;
    cs_rounding_formatted?: string;
    modifiedby_formatted?: string;
    modifiedon_formatted?: string;
    modifiedonbehalfby_formatted?: string;
    overriddencreatedon_formatted?: string;
    ownerid_formatted?: string;
    owningbusinessunit_formatted?: string;
    owningteam_formatted?: string;
    owninguser_formatted?: string;
    statecode_formatted?: string;
    statuscode_formatted?: string;
  }
  interface cs_recurrence_Result extends cs_recurrence_Base, cs_recurrence_Relationships {
    "@odata.etag": string;
    createdby_guid: string | null;
    createdonbehalfby_guid: string | null;
    cs_expense_guid: string | null;
    cs_income_guid: string | null;
    modifiedby_guid: string | null;
    modifiedonbehalfby_guid: string | null;
    ownerid_guid: string | null;
    owningbusinessunit_guid: string | null;
    owningteam_guid: string | null;
    owninguser_guid: string | null;
  }
  interface cs_recurrence_RelatedOne {
    cs_Expense: WebMappingRetrieve<WebNs.cs_expense_Select,WebNs.cs_expense_Expand,WebNs.cs_expense_Filter,WebNs.cs_expense_Fixed,WebNs.cs_expense_Result,WebNs.cs_expense_FormattedResult>;
    cs_Income: WebMappingRetrieve<WebNs.cs_income_Select,WebNs.cs_income_Expand,WebNs.cs_income_Filter,WebNs.cs_income_Fixed,WebNs.cs_income_Result,WebNs.cs_income_FormattedResult>;
  }
  interface cs_recurrence_RelatedMany {
    cs_cs_recurrence_cs_expense_Recurrence: WebMappingRetrieve<WebNs.cs_expense_Select,WebNs.cs_expense_Expand,WebNs.cs_expense_Filter,WebNs.cs_expense_Fixed,WebNs.cs_expense_Result,WebNs.cs_expense_FormattedResult>;
  }
}
interface WebEntitiesRetrieve {
  cs_recurrences: WebMappingRetrieve<WebNs.cs_recurrence_Select,WebNs.cs_recurrence_Expand,WebNs.cs_recurrence_Filter,WebNs.cs_recurrence_Fixed,WebNs.cs_recurrence_Result,WebNs.cs_recurrence_FormattedResult>;
}
interface WebEntitiesRelated {
  cs_recurrences: WebMappingRelated<WebNs.cs_recurrence_RelatedOne,WebNs.cs_recurrence_RelatedMany>;
}
interface WebEntitiesCUDA {
  cs_recurrences: WebMappingCUDA<WebNs.cs_recurrence_Create,WebNs.cs_recurrence_Update,WebNs.cs_recurrence_Select>;
}
declare namespace SDK {
  namespace REST {
    function createRecord(object: RestNs.cs_budget, type: "cs_budget", successCallback: (result: RestNs.cs_budgetResult) => any, errorCallback: (err: Error) => any): void;
    function deleteRecord(id: string, type: "cs_budget", successCallBack: () => any, errorCallback: (err: Error) => any): void;
    function retrieveRecord(id: string, type: "cs_budget", select: string | null, expand: string | null, successCallback: (result: RestNs.cs_budgetResult) => any, errorCallback: (err: Error) => any): void;
    function updateRecord(id: string, object: RestNs.cs_budget, type: "cs_budget", successCallBack: () => any, errorCallback: (err: Error) => any): void;
    function retrieveMultipleRecords(type: "cs_budget", options: string, successCallback: (result: RestNs.cs_budgetResult[]) => any, errorCallback: (err: Error) => any, onComplete: any): void;
    function createRecord(object: RestNs.cs_expense, type: "cs_expense", successCallback: (result: RestNs.cs_expenseResult) => any, errorCallback: (err: Error) => any): void;
    function deleteRecord(id: string, type: "cs_expense", successCallBack: () => any, errorCallback: (err: Error) => any): void;
    function retrieveRecord(id: string, type: "cs_expense", select: string | null, expand: string | null, successCallback: (result: RestNs.cs_expenseResult) => any, errorCallback: (err: Error) => any): void;
    function updateRecord(id: string, object: RestNs.cs_expense, type: "cs_expense", successCallBack: () => any, errorCallback: (err: Error) => any): void;
    function retrieveMultipleRecords(type: "cs_expense", options: string, successCallback: (result: RestNs.cs_expenseResult[]) => any, errorCallback: (err: Error) => any, onComplete: any): void;
    function createRecord(object: RestNs.cs_expensecategory, type: "cs_expensecategory", successCallback: (result: RestNs.cs_expensecategoryResult) => any, errorCallback: (err: Error) => any): void;
    function deleteRecord(id: string, type: "cs_expensecategory", successCallBack: () => any, errorCallback: (err: Error) => any): void;
    function retrieveRecord(id: string, type: "cs_expensecategory", select: string | null, expand: string | null, successCallback: (result: RestNs.cs_expensecategoryResult) => any, errorCallback: (err: Error) => any): void;
    function updateRecord(id: string, object: RestNs.cs_expensecategory, type: "cs_expensecategory", successCallBack: () => any, errorCallback: (err: Error) => any): void;
    function retrieveMultipleRecords(type: "cs_expensecategory", options: string, successCallback: (result: RestNs.cs_expensecategoryResult[]) => any, errorCallback: (err: Error) => any, onComplete: any): void;
    function createRecord(object: RestNs.cs_income, type: "cs_income", successCallback: (result: RestNs.cs_incomeResult) => any, errorCallback: (err: Error) => any): void;
    function deleteRecord(id: string, type: "cs_income", successCallBack: () => any, errorCallback: (err: Error) => any): void;
    function retrieveRecord(id: string, type: "cs_income", select: string | null, expand: string | null, successCallback: (result: RestNs.cs_incomeResult) => any, errorCallback: (err: Error) => any): void;
    function updateRecord(id: string, object: RestNs.cs_income, type: "cs_income", successCallBack: () => any, errorCallback: (err: Error) => any): void;
    function retrieveMultipleRecords(type: "cs_income", options: string, successCallback: (result: RestNs.cs_incomeResult[]) => any, errorCallback: (err: Error) => any, onComplete: any): void;
    function createRecord(object: RestNs.cs_incomecategory, type: "cs_incomecategory", successCallback: (result: RestNs.cs_incomecategoryResult) => any, errorCallback: (err: Error) => any): void;
    function deleteRecord(id: string, type: "cs_incomecategory", successCallBack: () => any, errorCallback: (err: Error) => any): void;
    function retrieveRecord(id: string, type: "cs_incomecategory", select: string | null, expand: string | null, successCallback: (result: RestNs.cs_incomecategoryResult) => any, errorCallback: (err: Error) => any): void;
    function updateRecord(id: string, object: RestNs.cs_incomecategory, type: "cs_incomecategory", successCallBack: () => any, errorCallback: (err: Error) => any): void;
    function retrieveMultipleRecords(type: "cs_incomecategory", options: string, successCallback: (result: RestNs.cs_incomecategoryResult[]) => any, errorCallback: (err: Error) => any, onComplete: any): void;
    function createRecord(object: RestNs.cs_recurrence, type: "cs_recurrence", successCallback: (result: RestNs.cs_recurrenceResult) => any, errorCallback: (err: Error) => any): void;
    function deleteRecord(id: string, type: "cs_recurrence", successCallBack: () => any, errorCallback: (err: Error) => any): void;
    function retrieveRecord(id: string, type: "cs_recurrence", select: string | null, expand: string | null, successCallback: (result: RestNs.cs_recurrenceResult) => any, errorCallback: (err: Error) => any): void;
    function updateRecord(id: string, object: RestNs.cs_recurrence, type: "cs_recurrence", successCallBack: () => any, errorCallback: (err: Error) => any): void;
    function retrieveMultipleRecords(type: "cs_recurrence", options: string, successCallback: (result: RestNs.cs_recurrenceResult[]) => any, errorCallback: (err: Error) => any, onComplete: any): void;
    function createRecord(object: RestNs.RestEntity, type: string, successCallback: (result: RestNs.RestEntity) => any, errorCallback: (err: Error) => any): void;
    function deleteRecord(id: string, type: string, successCallBack: () => any, errorCallback: (err: Error) => any): void;
    function retrieveRecord(id: string, type: string, select: string | null, expand: string | null, successCallback: (result: RestNs.RestEntity) => any, errorCallback: (err: Error) => any): void;
    function updateRecord(id: string, object: RestNs.RestEntity, type: string, successCallBack: () => any, errorCallback: (err: Error) => any): void;
    function retrieveMultipleRecords(type: string, options: string, successCallback: (result: RestNs.RestEntity[]) => any, errorCallback: (err: Error) => any, onComplete: any): void;
    function associateRecords(parentId: string, parentType: string, relationshipName: string, childId: string, childType: string, successCallBack: () => any, errorCallback: (err: Error) => any): void;
    function disassociateRecords(parentId: string, parentType: string, relationshipName: string, childId: string, childType: string, successCallBack: () => any, errorCallback: (err: Error) => any): void;
  }
}
declare namespace RestNs {
  interface RestMapping<O, S, E, F, R> {
  }
  interface RestEntity {
  }
  interface cs_budgetBase extends RestEntity {
  }
  interface cs_budgetResult extends cs_budgetBase {
  }
  interface cs_budget_Select {
  }
  interface cs_budget extends cs_budgetBase {
  }
  interface cs_expenseBase extends RestEntity {
  }
  interface cs_expenseResult extends cs_expenseBase {
  }
  interface cs_expense_Select {
  }
  interface cs_expense extends cs_expenseBase {
  }
  interface cs_expensecategoryBase extends RestEntity {
  }
  interface cs_expensecategoryResult extends cs_expensecategoryBase {
  }
  interface cs_expensecategory_Select {
  }
  interface cs_expensecategory extends cs_expensecategoryBase {
  }
  interface cs_incomeBase extends RestEntity {
  }
  interface cs_incomeResult extends cs_incomeBase {
  }
  interface cs_income_Select {
  }
  interface cs_income extends cs_incomeBase {
  }
  interface cs_incomecategoryBase extends RestEntity {
  }
  interface cs_incomecategoryResult extends cs_incomecategoryBase {
  }
  interface cs_incomecategory_Select {
  }
  interface cs_incomecategory extends cs_incomecategoryBase {
  }
  interface cs_recurrenceBase extends RestEntity {
  }
  interface cs_recurrenceResult extends cs_recurrenceBase {
  }
  interface cs_recurrence_Select {
  }
  interface cs_recurrence extends cs_recurrenceBase {
  }
}
declare namespace RestNs {
  interface cs_budgetBase extends RestEntity {
    CreatedBy?: SDK.EntityReference | null;
    CreatedOn?: Date | null;
    CreatedOnBehalfBy?: SDK.EntityReference | null;
    ExchangeRate?: string | null;
    ImportSequenceNumber?: number | null;
    ModifiedBy?: SDK.EntityReference | null;
    ModifiedOn?: Date | null;
    ModifiedOnBehalfBy?: SDK.EntityReference | null;
    OverriddenCreatedOn?: Date | null;
    OwnerId?: SDK.EntityReference | null;
    OwningBusinessUnit?: SDK.EntityReference | null;
    OwningTeam?: SDK.EntityReference | null;
    OwningUser?: SDK.EntityReference | null;
    TimeZoneRuleVersionNumber?: number | null;
    TransactionCurrencyId?: SDK.EntityReference | null;
    UTCConversionTimeZoneCode?: number | null;
    VersionNumber?: number | null;
    cs_Period?: cs_period | null;
    cs_TotalAvailableAnnualy?: SDK.Money | null;
    cs_TotalAvailableDaily?: SDK.Money | null;
    cs_TotalAvailableFortnightly?: SDK.Money | null;
    cs_TotalAvailableMonthly?: SDK.Money | null;
    cs_TotalAvailableQuaterly?: SDK.Money | null;
    cs_TotalAvailableWeekly?: SDK.Money | null;
    cs_TotalExpensesAnnualy?: SDK.Money | null;
    cs_TotalExpensesDaily?: SDK.Money | null;
    cs_TotalExpensesFortnightly?: SDK.Money | null;
    cs_TotalExpensesMonthly?: SDK.Money | null;
    cs_TotalExpensesQuaterly?: SDK.Money | null;
    cs_TotalExpensesWeekly?: SDK.Money | null;
    cs_TotalIncomesAnnualy?: SDK.Money | null;
    cs_TotalIncomesDaily?: SDK.Money | null;
    cs_TotalIncomesFortnightly?: SDK.Money | null;
    cs_TotalIncomesMonthly?: SDK.Money | null;
    cs_TotalIncomesQuaterly?: SDK.Money | null;
    cs_TotalIncomesWeekly?: SDK.Money | null;
    cs_budgetId?: string | null;
    cs_name?: string | null;
    cs_totalavailableannualy_Base?: SDK.Money | null;
    cs_totalavailabledaily_Base?: SDK.Money | null;
    cs_totalavailablefortnightly_Base?: SDK.Money | null;
    cs_totalavailablemonthly_Base?: SDK.Money | null;
    cs_totalavailablequaterly_Base?: SDK.Money | null;
    cs_totalavailableweekly_Base?: SDK.Money | null;
    cs_totalexpensesannualy_Base?: SDK.Money | null;
    cs_totalexpensesdaily_Base?: SDK.Money | null;
    cs_totalexpensesfortnightly_Base?: SDK.Money | null;
    cs_totalexpensesmonthly_Base?: SDK.Money | null;
    cs_totalexpensesquaterly_Base?: SDK.Money | null;
    cs_totalexpensesweekly_Base?: SDK.Money | null;
    cs_totalincomesannualy_Base?: SDK.Money | null;
    cs_totalincomesdaily_Base?: SDK.Money | null;
    cs_totalincomesfortnightly_Base?: SDK.Money | null;
    cs_totalincomesmonthly_Base?: SDK.Money | null;
    cs_totalincomesquaterly_Base?: SDK.Money | null;
    cs_totalincomesweekly_Base?: SDK.Money | null;
    statecode?: SDK.OptionSet<cs_budget_statecode> | null;
    statuscode?: SDK.OptionSet<cs_budget_statuscode> | null;
  }
  interface cs_budget extends cs_budgetBase {
    cs_cs_budget_cs_expense_Budget?: cs_expense[] | null;
    cs_cs_budget_cs_income_Budget?: cs_income[] | null;
  }
  interface cs_budgetResult extends cs_budgetBase {
    cs_cs_budget_cs_expense_Budget?: SDK.Results<cs_expenseResult> | null;
    cs_cs_budget_cs_income_Budget?: SDK.Results<cs_incomeResult> | null;
  }
  interface cs_budget_Select extends cs_budget_Expand {
    CreatedBy: RestAttribute<cs_budget_Select>;
    CreatedOn: RestAttribute<cs_budget_Select>;
    CreatedOnBehalfBy: RestAttribute<cs_budget_Select>;
    ExchangeRate: RestAttribute<cs_budget_Select>;
    ImportSequenceNumber: RestAttribute<cs_budget_Select>;
    ModifiedBy: RestAttribute<cs_budget_Select>;
    ModifiedOn: RestAttribute<cs_budget_Select>;
    ModifiedOnBehalfBy: RestAttribute<cs_budget_Select>;
    OverriddenCreatedOn: RestAttribute<cs_budget_Select>;
    OwnerId: RestAttribute<cs_budget_Select>;
    OwningBusinessUnit: RestAttribute<cs_budget_Select>;
    OwningTeam: RestAttribute<cs_budget_Select>;
    OwningUser: RestAttribute<cs_budget_Select>;
    TimeZoneRuleVersionNumber: RestAttribute<cs_budget_Select>;
    TransactionCurrencyId: RestAttribute<cs_budget_Select>;
    UTCConversionTimeZoneCode: RestAttribute<cs_budget_Select>;
    VersionNumber: RestAttribute<cs_budget_Select>;
    cs_Period: RestAttribute<cs_budget_Select>;
    cs_TotalAvailableAnnualy: RestAttribute<cs_budget_Select>;
    cs_TotalAvailableDaily: RestAttribute<cs_budget_Select>;
    cs_TotalAvailableFortnightly: RestAttribute<cs_budget_Select>;
    cs_TotalAvailableMonthly: RestAttribute<cs_budget_Select>;
    cs_TotalAvailableQuaterly: RestAttribute<cs_budget_Select>;
    cs_TotalAvailableWeekly: RestAttribute<cs_budget_Select>;
    cs_TotalExpensesAnnualy: RestAttribute<cs_budget_Select>;
    cs_TotalExpensesDaily: RestAttribute<cs_budget_Select>;
    cs_TotalExpensesFortnightly: RestAttribute<cs_budget_Select>;
    cs_TotalExpensesMonthly: RestAttribute<cs_budget_Select>;
    cs_TotalExpensesQuaterly: RestAttribute<cs_budget_Select>;
    cs_TotalExpensesWeekly: RestAttribute<cs_budget_Select>;
    cs_TotalIncomesAnnualy: RestAttribute<cs_budget_Select>;
    cs_TotalIncomesDaily: RestAttribute<cs_budget_Select>;
    cs_TotalIncomesFortnightly: RestAttribute<cs_budget_Select>;
    cs_TotalIncomesMonthly: RestAttribute<cs_budget_Select>;
    cs_TotalIncomesQuaterly: RestAttribute<cs_budget_Select>;
    cs_TotalIncomesWeekly: RestAttribute<cs_budget_Select>;
    cs_budgetId: RestAttribute<cs_budget_Select>;
    cs_name: RestAttribute<cs_budget_Select>;
    cs_totalavailableannualy_Base: RestAttribute<cs_budget_Select>;
    cs_totalavailabledaily_Base: RestAttribute<cs_budget_Select>;
    cs_totalavailablefortnightly_Base: RestAttribute<cs_budget_Select>;
    cs_totalavailablemonthly_Base: RestAttribute<cs_budget_Select>;
    cs_totalavailablequaterly_Base: RestAttribute<cs_budget_Select>;
    cs_totalavailableweekly_Base: RestAttribute<cs_budget_Select>;
    cs_totalexpensesannualy_Base: RestAttribute<cs_budget_Select>;
    cs_totalexpensesdaily_Base: RestAttribute<cs_budget_Select>;
    cs_totalexpensesfortnightly_Base: RestAttribute<cs_budget_Select>;
    cs_totalexpensesmonthly_Base: RestAttribute<cs_budget_Select>;
    cs_totalexpensesquaterly_Base: RestAttribute<cs_budget_Select>;
    cs_totalexpensesweekly_Base: RestAttribute<cs_budget_Select>;
    cs_totalincomesannualy_Base: RestAttribute<cs_budget_Select>;
    cs_totalincomesdaily_Base: RestAttribute<cs_budget_Select>;
    cs_totalincomesfortnightly_Base: RestAttribute<cs_budget_Select>;
    cs_totalincomesmonthly_Base: RestAttribute<cs_budget_Select>;
    cs_totalincomesquaterly_Base: RestAttribute<cs_budget_Select>;
    cs_totalincomesweekly_Base: RestAttribute<cs_budget_Select>;
    statecode: RestAttribute<cs_budget_Select>;
    statuscode: RestAttribute<cs_budget_Select>;
  }
  interface cs_budget_Filter {
    CreatedBy: XQR.EntityReferenceFilter;
    CreatedOn: Date;
    CreatedOnBehalfBy: XQR.EntityReferenceFilter;
    ExchangeRate: any;
    ImportSequenceNumber: number;
    ModifiedBy: XQR.EntityReferenceFilter;
    ModifiedOn: Date;
    ModifiedOnBehalfBy: XQR.EntityReferenceFilter;
    OverriddenCreatedOn: Date;
    OwnerId: XQR.EntityReferenceFilter;
    OwningBusinessUnit: XQR.EntityReferenceFilter;
    OwningTeam: XQR.EntityReferenceFilter;
    OwningUser: XQR.EntityReferenceFilter;
    TimeZoneRuleVersionNumber: number;
    TransactionCurrencyId: XQR.EntityReferenceFilter;
    UTCConversionTimeZoneCode: number;
    VersionNumber: number;
    cs_Period: cs_period;
    cs_TotalAvailableAnnualy: XQR.ValueContainerFilter<number>;
    cs_TotalAvailableDaily: XQR.ValueContainerFilter<number>;
    cs_TotalAvailableFortnightly: XQR.ValueContainerFilter<number>;
    cs_TotalAvailableMonthly: XQR.ValueContainerFilter<number>;
    cs_TotalAvailableQuaterly: XQR.ValueContainerFilter<number>;
    cs_TotalAvailableWeekly: XQR.ValueContainerFilter<number>;
    cs_TotalExpensesAnnualy: XQR.ValueContainerFilter<number>;
    cs_TotalExpensesDaily: XQR.ValueContainerFilter<number>;
    cs_TotalExpensesFortnightly: XQR.ValueContainerFilter<number>;
    cs_TotalExpensesMonthly: XQR.ValueContainerFilter<number>;
    cs_TotalExpensesQuaterly: XQR.ValueContainerFilter<number>;
    cs_TotalExpensesWeekly: XQR.ValueContainerFilter<number>;
    cs_TotalIncomesAnnualy: XQR.ValueContainerFilter<number>;
    cs_TotalIncomesDaily: XQR.ValueContainerFilter<number>;
    cs_TotalIncomesFortnightly: XQR.ValueContainerFilter<number>;
    cs_TotalIncomesMonthly: XQR.ValueContainerFilter<number>;
    cs_TotalIncomesQuaterly: XQR.ValueContainerFilter<number>;
    cs_TotalIncomesWeekly: XQR.ValueContainerFilter<number>;
    cs_budgetId: XQR.Guid;
    cs_name: string;
    cs_totalavailableannualy_Base: XQR.ValueContainerFilter<number>;
    cs_totalavailabledaily_Base: XQR.ValueContainerFilter<number>;
    cs_totalavailablefortnightly_Base: XQR.ValueContainerFilter<number>;
    cs_totalavailablemonthly_Base: XQR.ValueContainerFilter<number>;
    cs_totalavailablequaterly_Base: XQR.ValueContainerFilter<number>;
    cs_totalavailableweekly_Base: XQR.ValueContainerFilter<number>;
    cs_totalexpensesannualy_Base: XQR.ValueContainerFilter<number>;
    cs_totalexpensesdaily_Base: XQR.ValueContainerFilter<number>;
    cs_totalexpensesfortnightly_Base: XQR.ValueContainerFilter<number>;
    cs_totalexpensesmonthly_Base: XQR.ValueContainerFilter<number>;
    cs_totalexpensesquaterly_Base: XQR.ValueContainerFilter<number>;
    cs_totalexpensesweekly_Base: XQR.ValueContainerFilter<number>;
    cs_totalincomesannualy_Base: XQR.ValueContainerFilter<number>;
    cs_totalincomesdaily_Base: XQR.ValueContainerFilter<number>;
    cs_totalincomesfortnightly_Base: XQR.ValueContainerFilter<number>;
    cs_totalincomesmonthly_Base: XQR.ValueContainerFilter<number>;
    cs_totalincomesquaterly_Base: XQR.ValueContainerFilter<number>;
    cs_totalincomesweekly_Base: XQR.ValueContainerFilter<number>;
    statecode: XQR.ValueContainerFilter<cs_budget_statecode>;
    statuscode: XQR.ValueContainerFilter<cs_budget_statuscode>;
  }
  interface cs_budget_Expand {
    cs_cs_budget_cs_expense_Budget: RestExpand<cs_budget_Select,cs_expense_Select>;
    cs_cs_budget_cs_income_Budget: RestExpand<cs_budget_Select,cs_income_Select>;
  }
}
interface RestEntities {
  cs_budget: RestMapping<RestNs.cs_budget,RestNs.cs_budget_Select,RestNs.cs_budget_Expand,RestNs.cs_budget_Filter,RestNs.cs_budgetResult>;
}
declare namespace RestNs {
  interface cs_expenseBase extends RestEntity {
    CreatedBy?: SDK.EntityReference | null;
    CreatedOn?: Date | null;
    CreatedOnBehalfBy?: SDK.EntityReference | null;
    ExchangeRate?: string | null;
    ImportSequenceNumber?: number | null;
    ModifiedBy?: SDK.EntityReference | null;
    ModifiedOn?: Date | null;
    ModifiedOnBehalfBy?: SDK.EntityReference | null;
    OverriddenCreatedOn?: Date | null;
    OwnerId?: SDK.EntityReference | null;
    OwningBusinessUnit?: SDK.EntityReference | null;
    OwningTeam?: SDK.EntityReference | null;
    OwningUser?: SDK.EntityReference | null;
    TimeZoneRuleVersionNumber?: number | null;
    TransactionCurrencyId?: SDK.EntityReference | null;
    UTCConversionTimeZoneCode?: number | null;
    VersionNumber?: number | null;
    cs_Budget?: SDK.EntityReference | null;
    cs_ExpenseCategory?: SDK.EntityReference | null;
    cs_Period?: SDK.OptionSet<cs_period> | null;
    cs_Recurrence?: SDK.EntityReference | null;
    cs_Value?: SDK.Money | null;
    cs_expenseId?: string | null;
    cs_name?: string | null;
    cs_value_Base?: SDK.Money | null;
    statecode?: SDK.OptionSet<cs_expense_statecode> | null;
    statuscode?: SDK.OptionSet<cs_expense_statuscode> | null;
  }
  interface cs_expense extends cs_expenseBase {
    cs_cs_budget_cs_expense_Budget?: cs_budget | null;
    cs_cs_expense_cs_recurrence_Expense?: cs_recurrence[] | null;
    cs_cs_expensecategory_cs_expense_ExpenseCategory?: cs_expensecategory | null;
    cs_cs_recurrence_cs_expense_Recurrence?: cs_recurrence | null;
  }
  interface cs_expenseResult extends cs_expenseBase {
    cs_cs_budget_cs_expense_Budget?: cs_budget | null;
    cs_cs_expense_cs_recurrence_Expense?: SDK.Results<cs_recurrenceResult> | null;
    cs_cs_expensecategory_cs_expense_ExpenseCategory?: cs_expensecategory | null;
    cs_cs_recurrence_cs_expense_Recurrence?: cs_recurrence | null;
  }
  interface cs_expense_Select extends cs_expense_Expand {
    CreatedBy: RestAttribute<cs_expense_Select>;
    CreatedOn: RestAttribute<cs_expense_Select>;
    CreatedOnBehalfBy: RestAttribute<cs_expense_Select>;
    ExchangeRate: RestAttribute<cs_expense_Select>;
    ImportSequenceNumber: RestAttribute<cs_expense_Select>;
    ModifiedBy: RestAttribute<cs_expense_Select>;
    ModifiedOn: RestAttribute<cs_expense_Select>;
    ModifiedOnBehalfBy: RestAttribute<cs_expense_Select>;
    OverriddenCreatedOn: RestAttribute<cs_expense_Select>;
    OwnerId: RestAttribute<cs_expense_Select>;
    OwningBusinessUnit: RestAttribute<cs_expense_Select>;
    OwningTeam: RestAttribute<cs_expense_Select>;
    OwningUser: RestAttribute<cs_expense_Select>;
    TimeZoneRuleVersionNumber: RestAttribute<cs_expense_Select>;
    TransactionCurrencyId: RestAttribute<cs_expense_Select>;
    UTCConversionTimeZoneCode: RestAttribute<cs_expense_Select>;
    VersionNumber: RestAttribute<cs_expense_Select>;
    cs_Budget: RestAttribute<cs_expense_Select>;
    cs_ExpenseCategory: RestAttribute<cs_expense_Select>;
    cs_Period: RestAttribute<cs_expense_Select>;
    cs_Recurrence: RestAttribute<cs_expense_Select>;
    cs_Value: RestAttribute<cs_expense_Select>;
    cs_expenseId: RestAttribute<cs_expense_Select>;
    cs_name: RestAttribute<cs_expense_Select>;
    cs_value_Base: RestAttribute<cs_expense_Select>;
    statecode: RestAttribute<cs_expense_Select>;
    statuscode: RestAttribute<cs_expense_Select>;
  }
  interface cs_expense_Filter {
    CreatedBy: XQR.EntityReferenceFilter;
    CreatedOn: Date;
    CreatedOnBehalfBy: XQR.EntityReferenceFilter;
    ExchangeRate: any;
    ImportSequenceNumber: number;
    ModifiedBy: XQR.EntityReferenceFilter;
    ModifiedOn: Date;
    ModifiedOnBehalfBy: XQR.EntityReferenceFilter;
    OverriddenCreatedOn: Date;
    OwnerId: XQR.EntityReferenceFilter;
    OwningBusinessUnit: XQR.EntityReferenceFilter;
    OwningTeam: XQR.EntityReferenceFilter;
    OwningUser: XQR.EntityReferenceFilter;
    TimeZoneRuleVersionNumber: number;
    TransactionCurrencyId: XQR.EntityReferenceFilter;
    UTCConversionTimeZoneCode: number;
    VersionNumber: number;
    cs_Budget: XQR.EntityReferenceFilter;
    cs_ExpenseCategory: XQR.EntityReferenceFilter;
    cs_Period: XQR.ValueContainerFilter<cs_period>;
    cs_Recurrence: XQR.EntityReferenceFilter;
    cs_Value: XQR.ValueContainerFilter<number>;
    cs_expenseId: XQR.Guid;
    cs_name: string;
    cs_value_Base: XQR.ValueContainerFilter<number>;
    statecode: XQR.ValueContainerFilter<cs_expense_statecode>;
    statuscode: XQR.ValueContainerFilter<cs_expense_statuscode>;
  }
  interface cs_expense_Expand {
    cs_cs_budget_cs_expense_Budget: RestExpand<cs_expense_Select,cs_budget_Select>;
    cs_cs_expense_cs_recurrence_Expense: RestExpand<cs_expense_Select,cs_recurrence_Select>;
    cs_cs_expensecategory_cs_expense_ExpenseCategory: RestExpand<cs_expense_Select,cs_expensecategory_Select>;
    cs_cs_recurrence_cs_expense_Recurrence: RestExpand<cs_expense_Select,cs_recurrence_Select>;
  }
}
interface RestEntities {
  cs_expense: RestMapping<RestNs.cs_expense,RestNs.cs_expense_Select,RestNs.cs_expense_Expand,RestNs.cs_expense_Filter,RestNs.cs_expenseResult>;
}
declare namespace RestNs {
  interface cs_expensecategoryBase extends RestEntity {
    CreatedBy?: SDK.EntityReference | null;
    CreatedOn?: Date | null;
    CreatedOnBehalfBy?: SDK.EntityReference | null;
    ImportSequenceNumber?: number | null;
    ModifiedBy?: SDK.EntityReference | null;
    ModifiedOn?: Date | null;
    ModifiedOnBehalfBy?: SDK.EntityReference | null;
    OverriddenCreatedOn?: Date | null;
    OwnerId?: SDK.EntityReference | null;
    OwningBusinessUnit?: SDK.EntityReference | null;
    OwningTeam?: SDK.EntityReference | null;
    OwningUser?: SDK.EntityReference | null;
    TimeZoneRuleVersionNumber?: number | null;
    UTCConversionTimeZoneCode?: number | null;
    VersionNumber?: number | null;
    cs_expensecategoryId?: string | null;
    cs_name?: string | null;
    statecode?: SDK.OptionSet<cs_expensecategory_statecode> | null;
    statuscode?: SDK.OptionSet<cs_expensecategory_statuscode> | null;
  }
  interface cs_expensecategory extends cs_expensecategoryBase {
    cs_cs_expensecategory_cs_expense_ExpenseCategory?: cs_expense[] | null;
  }
  interface cs_expensecategoryResult extends cs_expensecategoryBase {
    cs_cs_expensecategory_cs_expense_ExpenseCategory?: SDK.Results<cs_expenseResult> | null;
  }
  interface cs_expensecategory_Select extends cs_expensecategory_Expand {
    CreatedBy: RestAttribute<cs_expensecategory_Select>;
    CreatedOn: RestAttribute<cs_expensecategory_Select>;
    CreatedOnBehalfBy: RestAttribute<cs_expensecategory_Select>;
    ImportSequenceNumber: RestAttribute<cs_expensecategory_Select>;
    ModifiedBy: RestAttribute<cs_expensecategory_Select>;
    ModifiedOn: RestAttribute<cs_expensecategory_Select>;
    ModifiedOnBehalfBy: RestAttribute<cs_expensecategory_Select>;
    OverriddenCreatedOn: RestAttribute<cs_expensecategory_Select>;
    OwnerId: RestAttribute<cs_expensecategory_Select>;
    OwningBusinessUnit: RestAttribute<cs_expensecategory_Select>;
    OwningTeam: RestAttribute<cs_expensecategory_Select>;
    OwningUser: RestAttribute<cs_expensecategory_Select>;
    TimeZoneRuleVersionNumber: RestAttribute<cs_expensecategory_Select>;
    UTCConversionTimeZoneCode: RestAttribute<cs_expensecategory_Select>;
    VersionNumber: RestAttribute<cs_expensecategory_Select>;
    cs_expensecategoryId: RestAttribute<cs_expensecategory_Select>;
    cs_name: RestAttribute<cs_expensecategory_Select>;
    statecode: RestAttribute<cs_expensecategory_Select>;
    statuscode: RestAttribute<cs_expensecategory_Select>;
  }
  interface cs_expensecategory_Filter {
    CreatedBy: XQR.EntityReferenceFilter;
    CreatedOn: Date;
    CreatedOnBehalfBy: XQR.EntityReferenceFilter;
    ImportSequenceNumber: number;
    ModifiedBy: XQR.EntityReferenceFilter;
    ModifiedOn: Date;
    ModifiedOnBehalfBy: XQR.EntityReferenceFilter;
    OverriddenCreatedOn: Date;
    OwnerId: XQR.EntityReferenceFilter;
    OwningBusinessUnit: XQR.EntityReferenceFilter;
    OwningTeam: XQR.EntityReferenceFilter;
    OwningUser: XQR.EntityReferenceFilter;
    TimeZoneRuleVersionNumber: number;
    UTCConversionTimeZoneCode: number;
    VersionNumber: number;
    cs_expensecategoryId: XQR.Guid;
    cs_name: string;
    statecode: XQR.ValueContainerFilter<cs_expensecategory_statecode>;
    statuscode: XQR.ValueContainerFilter<cs_expensecategory_statuscode>;
  }
  interface cs_expensecategory_Expand {
    cs_cs_expensecategory_cs_expense_ExpenseCategory: RestExpand<cs_expensecategory_Select,cs_expense_Select>;
  }
}
interface RestEntities {
  cs_expensecategory: RestMapping<RestNs.cs_expensecategory,RestNs.cs_expensecategory_Select,RestNs.cs_expensecategory_Expand,RestNs.cs_expensecategory_Filter,RestNs.cs_expensecategoryResult>;
}
declare namespace RestNs {
  interface cs_incomeBase extends RestEntity {
    CreatedBy?: SDK.EntityReference | null;
    CreatedOn?: Date | null;
    CreatedOnBehalfBy?: SDK.EntityReference | null;
    ExchangeRate?: string | null;
    ImportSequenceNumber?: number | null;
    ModifiedBy?: SDK.EntityReference | null;
    ModifiedOn?: Date | null;
    ModifiedOnBehalfBy?: SDK.EntityReference | null;
    OverriddenCreatedOn?: Date | null;
    OwnerId?: SDK.EntityReference | null;
    OwningBusinessUnit?: SDK.EntityReference | null;
    OwningTeam?: SDK.EntityReference | null;
    OwningUser?: SDK.EntityReference | null;
    TimeZoneRuleVersionNumber?: number | null;
    TransactionCurrencyId?: SDK.EntityReference | null;
    UTCConversionTimeZoneCode?: number | null;
    VersionNumber?: number | null;
    cs_Budget?: SDK.EntityReference | null;
    cs_IncomeCategory?: SDK.EntityReference | null;
    cs_Period?: SDK.OptionSet<cs_period> | null;
    cs_Value?: SDK.Money | null;
    cs_incomeId?: string | null;
    cs_name?: string | null;
    cs_value_Base?: SDK.Money | null;
    statecode?: SDK.OptionSet<cs_income_statecode> | null;
    statuscode?: SDK.OptionSet<cs_income_statuscode> | null;
  }
  interface cs_income extends cs_incomeBase {
    cs_cs_budget_cs_income_Budget?: cs_budget | null;
    cs_cs_income_cs_recurrence_Income?: cs_recurrence[] | null;
    cs_cs_incomecategory_cs_income_IncomeCategory?: cs_incomecategory | null;
  }
  interface cs_incomeResult extends cs_incomeBase {
    cs_cs_budget_cs_income_Budget?: cs_budget | null;
    cs_cs_income_cs_recurrence_Income?: SDK.Results<cs_recurrenceResult> | null;
    cs_cs_incomecategory_cs_income_IncomeCategory?: cs_incomecategory | null;
  }
  interface cs_income_Select extends cs_income_Expand {
    CreatedBy: RestAttribute<cs_income_Select>;
    CreatedOn: RestAttribute<cs_income_Select>;
    CreatedOnBehalfBy: RestAttribute<cs_income_Select>;
    ExchangeRate: RestAttribute<cs_income_Select>;
    ImportSequenceNumber: RestAttribute<cs_income_Select>;
    ModifiedBy: RestAttribute<cs_income_Select>;
    ModifiedOn: RestAttribute<cs_income_Select>;
    ModifiedOnBehalfBy: RestAttribute<cs_income_Select>;
    OverriddenCreatedOn: RestAttribute<cs_income_Select>;
    OwnerId: RestAttribute<cs_income_Select>;
    OwningBusinessUnit: RestAttribute<cs_income_Select>;
    OwningTeam: RestAttribute<cs_income_Select>;
    OwningUser: RestAttribute<cs_income_Select>;
    TimeZoneRuleVersionNumber: RestAttribute<cs_income_Select>;
    TransactionCurrencyId: RestAttribute<cs_income_Select>;
    UTCConversionTimeZoneCode: RestAttribute<cs_income_Select>;
    VersionNumber: RestAttribute<cs_income_Select>;
    cs_Budget: RestAttribute<cs_income_Select>;
    cs_IncomeCategory: RestAttribute<cs_income_Select>;
    cs_Period: RestAttribute<cs_income_Select>;
    cs_Value: RestAttribute<cs_income_Select>;
    cs_incomeId: RestAttribute<cs_income_Select>;
    cs_name: RestAttribute<cs_income_Select>;
    cs_value_Base: RestAttribute<cs_income_Select>;
    statecode: RestAttribute<cs_income_Select>;
    statuscode: RestAttribute<cs_income_Select>;
  }
  interface cs_income_Filter {
    CreatedBy: XQR.EntityReferenceFilter;
    CreatedOn: Date;
    CreatedOnBehalfBy: XQR.EntityReferenceFilter;
    ExchangeRate: any;
    ImportSequenceNumber: number;
    ModifiedBy: XQR.EntityReferenceFilter;
    ModifiedOn: Date;
    ModifiedOnBehalfBy: XQR.EntityReferenceFilter;
    OverriddenCreatedOn: Date;
    OwnerId: XQR.EntityReferenceFilter;
    OwningBusinessUnit: XQR.EntityReferenceFilter;
    OwningTeam: XQR.EntityReferenceFilter;
    OwningUser: XQR.EntityReferenceFilter;
    TimeZoneRuleVersionNumber: number;
    TransactionCurrencyId: XQR.EntityReferenceFilter;
    UTCConversionTimeZoneCode: number;
    VersionNumber: number;
    cs_Budget: XQR.EntityReferenceFilter;
    cs_IncomeCategory: XQR.EntityReferenceFilter;
    cs_Period: XQR.ValueContainerFilter<cs_period>;
    cs_Value: XQR.ValueContainerFilter<number>;
    cs_incomeId: XQR.Guid;
    cs_name: string;
    cs_value_Base: XQR.ValueContainerFilter<number>;
    statecode: XQR.ValueContainerFilter<cs_income_statecode>;
    statuscode: XQR.ValueContainerFilter<cs_income_statuscode>;
  }
  interface cs_income_Expand {
    cs_cs_budget_cs_income_Budget: RestExpand<cs_income_Select,cs_budget_Select>;
    cs_cs_income_cs_recurrence_Income: RestExpand<cs_income_Select,cs_recurrence_Select>;
    cs_cs_incomecategory_cs_income_IncomeCategory: RestExpand<cs_income_Select,cs_incomecategory_Select>;
  }
}
interface RestEntities {
  cs_income: RestMapping<RestNs.cs_income,RestNs.cs_income_Select,RestNs.cs_income_Expand,RestNs.cs_income_Filter,RestNs.cs_incomeResult>;
}
declare namespace RestNs {
  interface cs_incomecategoryBase extends RestEntity {
    CreatedBy?: SDK.EntityReference | null;
    CreatedOn?: Date | null;
    CreatedOnBehalfBy?: SDK.EntityReference | null;
    ImportSequenceNumber?: number | null;
    ModifiedBy?: SDK.EntityReference | null;
    ModifiedOn?: Date | null;
    ModifiedOnBehalfBy?: SDK.EntityReference | null;
    OverriddenCreatedOn?: Date | null;
    OwnerId?: SDK.EntityReference | null;
    OwningBusinessUnit?: SDK.EntityReference | null;
    OwningTeam?: SDK.EntityReference | null;
    OwningUser?: SDK.EntityReference | null;
    TimeZoneRuleVersionNumber?: number | null;
    UTCConversionTimeZoneCode?: number | null;
    VersionNumber?: number | null;
    cs_incomecategoryId?: string | null;
    cs_name?: string | null;
    statecode?: SDK.OptionSet<cs_incomecategory_statecode> | null;
    statuscode?: SDK.OptionSet<cs_incomecategory_statuscode> | null;
  }
  interface cs_incomecategory extends cs_incomecategoryBase {
    cs_cs_incomecategory_cs_income_IncomeCategory?: cs_income[] | null;
  }
  interface cs_incomecategoryResult extends cs_incomecategoryBase {
    cs_cs_incomecategory_cs_income_IncomeCategory?: SDK.Results<cs_incomeResult> | null;
  }
  interface cs_incomecategory_Select extends cs_incomecategory_Expand {
    CreatedBy: RestAttribute<cs_incomecategory_Select>;
    CreatedOn: RestAttribute<cs_incomecategory_Select>;
    CreatedOnBehalfBy: RestAttribute<cs_incomecategory_Select>;
    ImportSequenceNumber: RestAttribute<cs_incomecategory_Select>;
    ModifiedBy: RestAttribute<cs_incomecategory_Select>;
    ModifiedOn: RestAttribute<cs_incomecategory_Select>;
    ModifiedOnBehalfBy: RestAttribute<cs_incomecategory_Select>;
    OverriddenCreatedOn: RestAttribute<cs_incomecategory_Select>;
    OwnerId: RestAttribute<cs_incomecategory_Select>;
    OwningBusinessUnit: RestAttribute<cs_incomecategory_Select>;
    OwningTeam: RestAttribute<cs_incomecategory_Select>;
    OwningUser: RestAttribute<cs_incomecategory_Select>;
    TimeZoneRuleVersionNumber: RestAttribute<cs_incomecategory_Select>;
    UTCConversionTimeZoneCode: RestAttribute<cs_incomecategory_Select>;
    VersionNumber: RestAttribute<cs_incomecategory_Select>;
    cs_incomecategoryId: RestAttribute<cs_incomecategory_Select>;
    cs_name: RestAttribute<cs_incomecategory_Select>;
    statecode: RestAttribute<cs_incomecategory_Select>;
    statuscode: RestAttribute<cs_incomecategory_Select>;
  }
  interface cs_incomecategory_Filter {
    CreatedBy: XQR.EntityReferenceFilter;
    CreatedOn: Date;
    CreatedOnBehalfBy: XQR.EntityReferenceFilter;
    ImportSequenceNumber: number;
    ModifiedBy: XQR.EntityReferenceFilter;
    ModifiedOn: Date;
    ModifiedOnBehalfBy: XQR.EntityReferenceFilter;
    OverriddenCreatedOn: Date;
    OwnerId: XQR.EntityReferenceFilter;
    OwningBusinessUnit: XQR.EntityReferenceFilter;
    OwningTeam: XQR.EntityReferenceFilter;
    OwningUser: XQR.EntityReferenceFilter;
    TimeZoneRuleVersionNumber: number;
    UTCConversionTimeZoneCode: number;
    VersionNumber: number;
    cs_incomecategoryId: XQR.Guid;
    cs_name: string;
    statecode: XQR.ValueContainerFilter<cs_incomecategory_statecode>;
    statuscode: XQR.ValueContainerFilter<cs_incomecategory_statuscode>;
  }
  interface cs_incomecategory_Expand {
    cs_cs_incomecategory_cs_income_IncomeCategory: RestExpand<cs_incomecategory_Select,cs_income_Select>;
  }
}
interface RestEntities {
  cs_incomecategory: RestMapping<RestNs.cs_incomecategory,RestNs.cs_incomecategory_Select,RestNs.cs_incomecategory_Expand,RestNs.cs_incomecategory_Filter,RestNs.cs_incomecategoryResult>;
}
declare namespace RestNs {
  interface cs_recurrenceBase extends RestEntity {
    CreatedBy?: SDK.EntityReference | null;
    CreatedOn?: Date | null;
    CreatedOnBehalfBy?: SDK.EntityReference | null;
    ImportSequenceNumber?: number | null;
    ModifiedBy?: SDK.EntityReference | null;
    ModifiedOn?: Date | null;
    ModifiedOnBehalfBy?: SDK.EntityReference | null;
    OverriddenCreatedOn?: Date | null;
    OwnerId?: SDK.EntityReference | null;
    OwningBusinessUnit?: SDK.EntityReference | null;
    OwningTeam?: SDK.EntityReference | null;
    OwningUser?: SDK.EntityReference | null;
    TimeZoneRuleVersionNumber?: number | null;
    UTCConversionTimeZoneCode?: number | null;
    VersionNumber?: number | null;
    cs_Day?: number | null;
    cs_DaysOfWeek?: cs_daysofweek | null;
    cs_EveryXMonths?: number | null;
    cs_EveryXWeeks?: number | null;
    cs_Expense?: SDK.EntityReference | null;
    cs_Income?: SDK.EntityReference | null;
    cs_Last?: boolean | null;
    cs_Month?: cs_months | null;
    cs_OneOff?: boolean | null;
    cs_OneOffDate?: Date | null;
    cs_Period?: SDK.OptionSet<cs_period> | null;
    cs_Rounding?: SDK.OptionSet<cs_rounding> | null;
    cs_name?: string | null;
    cs_recurrenceId?: string | null;
    statecode?: SDK.OptionSet<cs_recurrence_statecode> | null;
    statuscode?: SDK.OptionSet<cs_recurrence_statuscode> | null;
  }
  interface cs_recurrence extends cs_recurrenceBase {
    cs_cs_expense_cs_recurrence_Expense?: cs_expense | null;
    cs_cs_income_cs_recurrence_Income?: cs_income | null;
    cs_cs_recurrence_cs_expense_Recurrence?: cs_expense[] | null;
  }
  interface cs_recurrenceResult extends cs_recurrenceBase {
    cs_cs_expense_cs_recurrence_Expense?: cs_expense | null;
    cs_cs_income_cs_recurrence_Income?: cs_income | null;
    cs_cs_recurrence_cs_expense_Recurrence?: SDK.Results<cs_expenseResult> | null;
  }
  interface cs_recurrence_Select extends cs_recurrence_Expand {
    CreatedBy: RestAttribute<cs_recurrence_Select>;
    CreatedOn: RestAttribute<cs_recurrence_Select>;
    CreatedOnBehalfBy: RestAttribute<cs_recurrence_Select>;
    ImportSequenceNumber: RestAttribute<cs_recurrence_Select>;
    ModifiedBy: RestAttribute<cs_recurrence_Select>;
    ModifiedOn: RestAttribute<cs_recurrence_Select>;
    ModifiedOnBehalfBy: RestAttribute<cs_recurrence_Select>;
    OverriddenCreatedOn: RestAttribute<cs_recurrence_Select>;
    OwnerId: RestAttribute<cs_recurrence_Select>;
    OwningBusinessUnit: RestAttribute<cs_recurrence_Select>;
    OwningTeam: RestAttribute<cs_recurrence_Select>;
    OwningUser: RestAttribute<cs_recurrence_Select>;
    TimeZoneRuleVersionNumber: RestAttribute<cs_recurrence_Select>;
    UTCConversionTimeZoneCode: RestAttribute<cs_recurrence_Select>;
    VersionNumber: RestAttribute<cs_recurrence_Select>;
    cs_Day: RestAttribute<cs_recurrence_Select>;
    cs_DaysOfWeek: RestAttribute<cs_recurrence_Select>;
    cs_EveryXMonths: RestAttribute<cs_recurrence_Select>;
    cs_EveryXWeeks: RestAttribute<cs_recurrence_Select>;
    cs_Expense: RestAttribute<cs_recurrence_Select>;
    cs_Income: RestAttribute<cs_recurrence_Select>;
    cs_Last: RestAttribute<cs_recurrence_Select>;
    cs_Month: RestAttribute<cs_recurrence_Select>;
    cs_OneOff: RestAttribute<cs_recurrence_Select>;
    cs_OneOffDate: RestAttribute<cs_recurrence_Select>;
    cs_Period: RestAttribute<cs_recurrence_Select>;
    cs_Rounding: RestAttribute<cs_recurrence_Select>;
    cs_name: RestAttribute<cs_recurrence_Select>;
    cs_recurrenceId: RestAttribute<cs_recurrence_Select>;
    statecode: RestAttribute<cs_recurrence_Select>;
    statuscode: RestAttribute<cs_recurrence_Select>;
  }
  interface cs_recurrence_Filter {
    CreatedBy: XQR.EntityReferenceFilter;
    CreatedOn: Date;
    CreatedOnBehalfBy: XQR.EntityReferenceFilter;
    ImportSequenceNumber: number;
    ModifiedBy: XQR.EntityReferenceFilter;
    ModifiedOn: Date;
    ModifiedOnBehalfBy: XQR.EntityReferenceFilter;
    OverriddenCreatedOn: Date;
    OwnerId: XQR.EntityReferenceFilter;
    OwningBusinessUnit: XQR.EntityReferenceFilter;
    OwningTeam: XQR.EntityReferenceFilter;
    OwningUser: XQR.EntityReferenceFilter;
    TimeZoneRuleVersionNumber: number;
    UTCConversionTimeZoneCode: number;
    VersionNumber: number;
    cs_Day: number;
    cs_DaysOfWeek: cs_daysofweek;
    cs_EveryXMonths: number;
    cs_EveryXWeeks: number;
    cs_Expense: XQR.EntityReferenceFilter;
    cs_Income: XQR.EntityReferenceFilter;
    cs_Last: boolean;
    cs_Month: cs_months;
    cs_OneOff: boolean;
    cs_OneOffDate: Date;
    cs_Period: XQR.ValueContainerFilter<cs_period>;
    cs_Rounding: XQR.ValueContainerFilter<cs_rounding>;
    cs_name: string;
    cs_recurrenceId: XQR.Guid;
    statecode: XQR.ValueContainerFilter<cs_recurrence_statecode>;
    statuscode: XQR.ValueContainerFilter<cs_recurrence_statuscode>;
  }
  interface cs_recurrence_Expand {
    cs_cs_expense_cs_recurrence_Expense: RestExpand<cs_recurrence_Select,cs_expense_Select>;
    cs_cs_income_cs_recurrence_Income: RestExpand<cs_recurrence_Select,cs_income_Select>;
    cs_cs_recurrence_cs_expense_Recurrence: RestExpand<cs_recurrence_Select,cs_expense_Select>;
  }
}
interface RestEntities {
  cs_recurrence: RestMapping<RestNs.cs_recurrence,RestNs.cs_recurrence_Select,RestNs.cs_recurrence_Expand,RestNs.cs_recurrence_Filter,RestNs.cs_recurrenceResult>;
}
