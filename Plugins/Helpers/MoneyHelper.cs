
using System.Collections.Generic;
using System.Linq;
using Microsoft.Xrm.Sdk;

namespace CoreySutton.BudgetBuster.Plugins
{
    internal static class MoneyHelper
    {
        internal static Money Sum(IList<Money> money)
        {
            return new Money(money?.Sum(m => m.Value) ?? 0);
        }
    }
}
