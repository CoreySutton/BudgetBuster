using System;
using System.Collections.Generic;
using System.Data;
using Microsoft.Xrm.Sdk;

namespace CoreySutton.BudgetBuster.Plugins
{
    internal class IncomeCalculator
    {
        internal Money DailySum { get; private set; }
        internal Money WeeklySum { get; private set; }
        internal Money FortnightlySum { get; private set; }
        internal Money MonthlySum { get; private set; }
        internal Money QuaterlySum { get; private set; }
        internal Money AnnualSum { get; private set; }

        private const int _daysInYear = 365;
        private const int _weeksInYear = 52;
        private const int _fortnightsInYear = 26;
        private const int _monthsInYear = 12;
        private const int _quatersInYear = 4;

        internal void Sum(IList<cs_income> expenses)
        {
            AnnualSum = SumAnnual(expenses);
            QuaterlySum = new Money(AnnualSum.Value / _quatersInYear);
            MonthlySum = new Money(AnnualSum.Value / _monthsInYear);
            FortnightlySum = new Money(AnnualSum.Value / _fortnightsInYear);
            WeeklySum = new Money(AnnualSum.Value / _weeksInYear);
            DailySum = new Money(AnnualSum.Value / _daysInYear);
        }

        private Money SumAnnual(IList<cs_income> expenses)
        {
            Money totalAnnualExpenses = new Money();
            foreach (cs_income expense in expenses)
            {
                if (expense.cs_Period == null)
                {
                    throw new NoNullAllowedException(nameof(expense.cs_Period));
                }
                switch (expense.cs_Period.Value)
                {
                    case cs_period.Daily:
                        totalAnnualExpenses.Value += expense.cs_Value.Value * _daysInYear;
                        break;
                    case cs_period.Weekly:
                        totalAnnualExpenses.Value += expense.cs_Value.Value * _weeksInYear;
                        break;
                    case cs_period.Fortnightly:
                        totalAnnualExpenses.Value += expense.cs_Value.Value * _fortnightsInYear;
                        break;
                    case cs_period.Monthly:
                        totalAnnualExpenses.Value += expense.cs_Value.Value * _monthsInYear;
                        break;
                    case cs_period.Quaterly:
                        totalAnnualExpenses.Value += expense.cs_Value.Value * _quatersInYear;
                        break;
                    case cs_period.Annualy:
                        totalAnnualExpenses.Value += expense.cs_Value.Value;
                        break;
                    default: throw new Exception($"Unrecognized period {expense.cs_Period.Value}");
                }
            }

            return totalAnnualExpenses;
        }
    }
}