let money, time;

function start(){
    money = +prompt ("Ваш бюджет на месяц?"); 
    time = prompt ("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money ==""|| money == null) {
        money = +prompt ("Ваш бюджет на месяц?");
    }
}
start();


let appData = {
    money: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
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
        }
    };
} 
chooseExpenses();

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

// let i = 0;
// do {
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
//     } i++
    
// } while ( i < 2); 


function detectDayBudget (budget) {
    let day = 30;
    a = (budget / day).toFixed();
    alert("Ежедневный бюджет: " + a);
    return a;
};
appData.moneyPerDay = detectDayBudget(money);

function detectLevel (){
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка")
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень дохода")
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка")
    } else {
        console.log("Произошла ошибка")
    };
};
detectLevel();

function checkSavings() {
    if(appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings ();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let stat = prompt ("Статья необязательных расходов?");
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
}
}
}