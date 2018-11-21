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
}
interface WebEntitiesRetrieve {
  cs_budgets: WebMappingRetrieve<cs_budget_Select,cs_budget_Expand,cs_budget_Filter,cs_budget_Fixed,cs_budget_Result,cs_budget_FormattedResult>;
}
interface WebEntitiesRelated {
  cs_budgets: WebMappingRelated<cs_budget_RelatedOne,cs_budget_RelatedMany>;
}
interface WebEntitiesCUDA {
  cs_budgets: WebMappingCUDA<cs_budget_Create,cs_budget_Update,cs_budget_Select>;
}
