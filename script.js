let money = +prompt ("Ваш бюджет на месяц?"); 
let time = prompt ("Введите дату в формате YYYY-MM-DD");

let appData = {
    money: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

// for (let i = 0; i < 2; i++) {
//     let cat1 = prompt ("Введите обязательную статью расходов в этом месяце");
//     let val1 = prompt ("Во сколько обойдется "+cat1+"?");
//     if (typeof cat1 === 'string' &&
//         cat1 !== null &&
//         val1 !== null &&
//         cat1 != '' &&
//         val1 != '' &&
//         cat1.length < 50) {
//             console.log("done");
//             appData.expenses[cat1] = val1;
//     } else {
//         i--
//         alert('Ответ неверный')
//     }
// };

// let i = 0;
// while ( i < 2) {
//     i++
//     let cat1 = prompt ("Введите обязательную статью расходов в этом месяце");
//     let val1 = prompt ("Во сколько обойдется "+cat1+"?");

//     if (typeof cat1 === 'string' &&
//         cat1 != null &&
//         val1 != null &&
//         cat1 != '' &&
//         val1 != '' &&
//         cat1.length < 50) {
//             console.log("done");
//             appData.expenses[cat1] = val1;
//     } else {
//         i--
//         alert('Ответ неверный')
//     }
// };

let i = 0;
do {
    let cat1 = prompt ("Введите обязательную статью расходов в этом месяце");
    let val1 = prompt ("Во сколько обойдется "+cat1+"?");
    if (typeof cat1 === 'string' &&
        cat1 !== null &&
        val1 !== null &&
        cat1 != '' &&
        val1 != '' &&
        cat1.length < 50) {
            console.log("done");
            appData.expenses[cat1] = val1;
    } else {
        i--
        alert('Ответ неверный')
    } i++
    
} while ( i < 2); 

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка")
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень дохода")
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка")
} else {
    console.log("Произошла ошибка")
};
