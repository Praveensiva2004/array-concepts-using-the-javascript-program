//areay filtering
let num=[10,15,20,45,30,50,60,70];
let smallerThan=num.filter(num=>num<45);
console.log("smallest numbers:"+smallerThan);


//array mapping
let numbers=[10,15,20,45,30,50,60,70];
let number1=numbers.map((x)=>x*2);
console.log("mapping array:"+number1);

//array shift and unshift
let arr=[10,15,20,45,30,50,60,70];
arr.shift();
console.log(arr);
let arr1=[10,15,20,45,30,50,60,70];
arr1.unshift(10);
console.log(arr1);

//array searching ,find ,indexof,includes
let arr2=["apple","orange","mango","grapes"];
var res=arr2.indexOf('apple');
console.log("indexof apple is "+res);
var res1=arr2.find(arr1=>arr1.startsWith('g'));
console.log("starts with g is "+res1);


var res2=arr2.includes('orange');
console.log("includes of orange is "+res2);


//array destruction
function calculate(num1, num2) {
    const add = num1 + num2;
    const subtract = num1 - num2;
    const multiply = num1 * num2;
    const divide = num1 / num2;
  
    return [add, subtract, multiply, divide];
  }
  
  const [add, subtract, multiply, divide] = calculate(4, 7);
  console.log(add,subtract,multiply,divide)
  console.log("the added number is "+add)










