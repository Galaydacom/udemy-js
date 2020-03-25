// let num = 20;
// function showFirstMessage(text) {
//     alert(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage("Hello World!");
// console.log(num);

// function calc(a, b) {
//     return (a+ b);
// }

// console.log( calc(3, 4) );
// console.log( calc(8, 4) );

function retVar() {
    let num = 50;
    return num;
}

let anozerNum = retVar();
console.log(anozerNum);

// var calc = function (a, b) {
//     return (a+ b);
// }
// console.log( calc(3, 4) );
// console.log( calc(8, 4) );

let calc = (a, b) => a + b
console.log(calc(3, 4));
console.log(calc(8, 4))

let str = "test";
console.log(str.length); // узнали сколько букв в строке, использовали метод

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = "12.2px";
//console.log(Math.round(12.2));
console.log(parseInt(twelve));// перврдить числа в другую систему/ в данном случае округлет число 
console.log(parseFloat(twelve)); //выводит только число, откидываются px