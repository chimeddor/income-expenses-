// const name = prompt("zahialgaa oruulna uu","2022-03-");
// alert(`zahialga batalgaajlaa ${name}`);

// const isAdult = confirm("nasand hvrsen vv? ");
// console.log(isAdult)

// let n = 10;
// daraah hoyr ni adilhan
// n = n+5; n+=5;
// n+=5;
// console.log(n);

// let i = 1;
// while(i<=10){
//     console.log(i);
//     i++;
// }
// for (let i = 0; i<10;i++){
//     if(i%2){
//         console.log(i)
//         // continue
//     }
//     // console.log(i)
// }


// const pass = prompt('pass: ')
// const user = prompt('user: ')
// switch(pass && user){
//     case (p && u):
//         console.log(logged);
//         break
// }


// function helloWorld(name = "friend"){
//     let a = `hello ${name}`;
//     console.log(a);
// }

// helloWorld();
// helloWorld("chimeddorj");

//************** 선언문 ************

// function add(number1, number2){
//     return number1+number2;
// }
// const sum = add(2,4)
// console.log(sum);

// *********************** 함수 표현식 ********************
// let add = function(number1, number2){
//     return number1+number2;
// }
// const sum = add(2,4)
// console.log(sum);


// ************** 화살표 함수 ******************
// let add = (numb1, numb2)=>{
//     return numb1 + numb2;
// }
// let result = add(20,40);
// console.log(result);

// let add = (numb1, numb2) => numb1+numb2;
// let result = add(24034,3492);
// console.log(result);

// const name = "jaraa";
// const age = 25;
// const arrObject = {
//     name,
//     age,
//     school: "konkuk"
// }
// console.log('school' in arrObject);


//  const superMan = {
// 		name: "chimeddorj",
//     age : 25,
// }
// console.log(superMan.name);
// console.log(superMan['age']);
// superMan.school = "KonkukU";
// console.log(superMan)
// delete superMan.age;
// console.log(superMan);

// const add = (name, age)=>{
// 	return{
// 		name : name,
//     age: age,
// 	}
// }

// const result = add("jihyeon", 24);
// console.log(result);

// const isAdult = (user)=>{
// 		if(!('age' in user) || user.age < 20 ){
// 				return false;
// 		}
// 				return true;
// }

// const mike = {
// 	name: "mike",
//   age : 25
// };

// const lisa = {
// 	name: "lisa"
// };

// console.log(isAdult(mike))

// for(i in mike){
// 	console.log(mike[i])
// }
// ***************** Array push(), pop() **************
// let days = ["월","화","수요"]
// console.log(days);
// days.push("목");
// days.push("금");
// console.log(days);
// days.pop();
// console.log(days);

// ********************* for of and for ****************
// let month = ["july","ap","aug","dec","sep"];
// for(index = 0; index < month.length; index++){
// 	console.log(`for, ${month[index]}`);
// } 
// console.log(" ")
// for(let mont of month){
// 	console.log(`for of, ${mont}`);
// }
//  ******************* toUpperCase and toLowerCase **********************
// let desc = "Hi guys. Nice to meet you.";
// console.log(desc);
// let toUpperCase = desc.toUpperCase();
// console.log(toUpperCase);

// let toLowerCase = desc.toLowerCase();
// console.log(toLowerCase);

let text = "Hi guys. Nice to meet you.";
// console.log(text.indexOf('meet'));

if(text.indexOf('Hi') > -1){
	console.log("Ugvvlbert Hi bagtsan bna");
};

// **** slice(n,m); n=start, m=end ***********

console.log(text.slice(3,18));

//  *********** subtring(n,m) n =start/end, m=start/end

console.log(" ");
console.log(`substring, ${text.substring(4,10)}`);
console.log(`substring, ${text.substring(10,4)}`);

// ************************ substr(n,m) n=start m=shirheg *******************
console.log(`substr--->, ${text.substr(4,2)}`);
console.log(`substr--->, ${text.substr(4,3)}`);
// ************************* trim() urd ard taliin hooson zaig baihgvi bolgono ***********
let trim = "  hello my world  ";
console.log(`before trim --->,  ${trim.length}`);
console.log(`before trim --->, ${trim.slice(0,3)}`);
let afterTrim = trim.trim();
console.log(`after trim --->, ${afterTrim.slice(0,3)}`);

// ***************************** repeat(n) 문자열을 n번 반복 *******************************
let hello = "hello!";
console.log(` `)
console.log(hello.repeat(3));

//*********************** 문제열 비교***********************
console.log("a".codePointAt(0));
console.log(String.fromCodePoint(97));

let list = [
	"01. 들어가며",
	"02. JS의 역사",
	"03. 자료형",
	"04. 함수",
	"05. 배열",
];
let saveList = [];

for(let i = 0; i < list.length; i++){
	saveList.push(list[i].slice(4));	
}
console.log(saveList);



