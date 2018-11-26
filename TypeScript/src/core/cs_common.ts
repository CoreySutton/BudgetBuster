module BudgetBlaster
{
    export class Common
    {
        public static Contains(array: any[], value: any): boolean {
            return array.indexOf(value) !== -1;
        }

        public static GetOrdinalNumber(number: number): string {

            if (number <= 0) return null;

            switch (number) {
            case 1:
                return "1st";
            case 2:
                return "2nd";
            case 3:
                return "3rd";
            default:
                return `${number}th`;
            }
        }

        public static GetFormattedDate(date: Date): string {
            var mm = date.getMonth() + 1; // getMonth() is zero-based
            var dd = date.getDate();

            return [date.getFullYear(),
                (mm > 9 ? "" : "0") + mm,
                (dd > 9 ? "" : "0") + dd
            ].join("");
        }
    }
}