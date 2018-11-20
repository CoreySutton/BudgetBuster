namespace CoreySutton.BudgetBuster.Plugins
{
    internal abstract class ContextService
    {
        protected readonly LocalContext Ctx;

        protected ContextService(LocalContext ctx)
        {
            Ctx = ctx;
        }
    }
}
