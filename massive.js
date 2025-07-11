// //for(let i=0; i<=10; i++ ){
// //console.log(i)
// //};

// //let i = 0;
// //while(i <10){
// //console.log(i)
// //i++;
// //}

// // let i = 0;
// // do {
// //     console.log(i)
// //     i++;
// //     } while(i < 10)


// // let arr = ['1', 'werwe', '1awfcd']
// // for(const element of arr){
// //     console.log(element)
// // }

// // for(const element in arr){
// //     console.log(element)
// // }

// // let move = ['от заказа до рассвета', 'окулус', 'необъятный океан']
// // for(let i=0; i<=move.length; i++){
// //     console.log("Название" + move[i])
// // }

// // let move1 = ['от заказа до рассвета', 'окулус', 'необъятный океан']
// // for(const element of move1){
// //     console.log("Название" + element)
// // }


// // let i = 0;
// // while(i <20){
// // console.log([i]/2)
// // i++;
// // }

// // for(let i=0; i<=20; i++){
// //     if(i%2 === 0){
// //         console.log(i)
// //     }
// // }

// let obj = {
//     a: '123',
//     b: 23456543,
//     c: [12353, 32323],
//     d: {
//         one: 123
//     }
// }
// // console.log(obj.a);
// // console.log(obj["b"]);
// // obj.a=23323;
// // console.log(obj.a)
// // console.log(obj.c)

// // console.log("------------")
// // console.log(obj.new)
// // obj.new = "new"
// // console.log(obj.new)
// // delete obj.c
// // console.log(obj.c)

// // for(let key in obj) {
// //     console.log(key)
// //     console.log(obj[key])
// // }

// // let mashina = {
// //     marka: "Volkswagen",
// //     modelb: "Amarok",
// //     god: 2025
// // }
// // console.log(mashina)
// // console.log(`Aвтомобиль:  ${mashina.marka} ,  ${mashina.modelb}`)

// // // for (let key in mashina) {
// // //   result += `${key}: ${mashina[key]}\n`;
// // // }
// // mashina.color = "red"
// // console.log(mashina.color)
// // mashina.god = 2004
// // console.log(mashina.god)

// // декларативная функция
// // function add( a, b){
// //     if(typeof a ==='string' || typeof b === 'string'){
// //         return 'не тот тип' //обычно выкидают исключения
// //     }
// //     return a+b;
// // }
// // console.log(add(2,3));
// // console.log(add("2",3))

// // console.log("----------------------")
// // function add( a, b){
// //     return Number(a) + Number(b);
// // }
// // console.log(add(2,3));
// // console.log(add("2",3))

// // // анонимная
// // const ann = function(a,b){
// //     return a+b
// // }

// // console.log(ann(4,5))

// // //стрелочные функции

// // const strfunk = (a,b) => a + b
// // console.log(strfunk(50,50))

// // const strfunk1 = (a=10,b=20) => a + b
// // console.log(strfunk1())


// const helloName = function(a){
//     if(a == null){
//         return  'Привет' + 'user'
// }
//  return  'Привет' + a;
// }
// console.log(helloName())

// console.log('---------------------------')

// const helloName1 = function(a=' user'){
//  return  'Привет' + a;
// }
// console.log(helloName1())
// console.log(helloName1(' Juls'))



function categorized(arr){
    const result = {
        pos: [],
        neg: []
    };

    //console.log(arr.length)
    for(let i=0; i<=20; i++){
       console.log(i, ' ', arr[i]) 
    if(arr[i] >= 0){
        result.pos.push(arr[i]);
    } else {
        result.neg.push(arr[i]);
    }
}
    return result;
}
//console.log(categorized([]))
console.log(categorized([-4, -6, -33, -44, 12, 2, 6, 7]))


// function catigorized(arr){
//     const result = {
//         pos:[],
//         neg:[]
    
//     }       
//     console.log(arr.a) 
// for (let i=0; i<arr.length; i++){
//     console.log(arr[i])
// if (arr[i]>0){result.pos.push(arr[i])}else{result.neg.push(arr[i])}
// }

//          return result;


// }
// console.log(catigorized([-2,4,-5,7,1,0,-3]))