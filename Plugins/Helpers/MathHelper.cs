
using System.Collections.Generic;
using System.Linq;
using Microsoft.Xrm.Sdk;

namespace CoreySutton.BudgetBuster.Plugins
{
    internal static class MathHelper
    {
        internal static Money Sum(List<Money> money)
        {
            return new Money(money.Sum(m => m.Value));
        }
    }
}
