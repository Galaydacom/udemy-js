let money = prompt ("Ваш бюджет на месяц?"); 
let time = prompt ("Введите дату в формате YYYY-MM-DD");

let appData = {
    money: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let cat1 = prompt ("Введите обязательную статью расходов в этом месяце");
let val1 = prompt ("Во сколько обойдется "+cat1+"?");

appData.expenses[cat1] = val1;
appData.expenses[prompt("Введите обязательную статью расходов в этом месяце")] = prompt ("Во сколько обойдется?");

console.log (appData)   

let budget = money / 30;
alert(budget)