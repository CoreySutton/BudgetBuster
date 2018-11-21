interface WebMappingRetrieve<ISelect, IExpand, IFilter, IFixed, Result, FormattedResult> {
}
interface WebMappingCUDA<ICreate, IUpdate, ISelect> {
}
interface WebMappingRelated<ISingle, IMultiple> {
}
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
