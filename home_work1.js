// exercise 1
var name = "Juls";
let age = 32;
const town = "Ростов-на-Дону";
console.log(`Привет, меня зовут : ${name}, мне: ${age} лет, я из ${town}`)

//exercise 2
var isOnline = true;
if(isOnline === true){
console.log(' Пользователь онлайн')
} else {
console.log(' Пользователь офлайн')
}

//exercise 3

arrProducts = ['яблоко','кофе','пироженка с вишней']
console.log(arrProducts.lenght);
console.log(arrProducts[0], arrProducts[2]);
console.log(arrProducts.includes('кофе'))

//exercise 4

let user ={
    name: "Lina",
    email: "linaname@gmail.com",
    age: 42
}
console.log(user.name);
console.log(user.email)

//exercise 5
console.log("5"+4); //54 
console.log("5"-2); //3 
console.log(true + false) //1

//exercise 6

console.log(typeof NaN) // выведет number, NaN считается числом
console.log(null + undefined) // NaN, потому что оба значения при сложении приводятся к числу, но не являются числами
console.log(undefined + undefined) // NaN, undefined при приведении к числу становится NaN, и два NaN в сумме также дают NaN
console.log(undefined + undefined) // NaN, undefined при приведении к числу становится NaN, и два NaN в сумме также дают NaN
console.log(undefined + undefined) // NaN, undefined при приведении к числу становится NaN, и два NaN в сумме также дают NaN
console.log(null + null) // 0, оба операнда придятся к числу, а null = 0
console.log(null + 1) // 0, null = 0, 0+1=1
console.log(null + "") // "null", при сложении null приводится к строке, а "null" + пустая строка = "null" 