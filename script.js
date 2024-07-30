/* 
 const student = {
    fullName: "TonyStarks",
    age: 24,
    price: 70,
    isPass: "true",
};
student ["name"] = "Rahul Sharma";
console.log (student["name"]);

const product = {
 title: "Ball Pen",
 rating: 4,
 offer: 5,
 price: 50,
};
console.log (product);

const profile = {
    username: "@Anushka",
    isFollow: false,
    followimg: 23,
    followers: 34,
};
console.log (typeof profile["isFollow"]);

//Arithmetic Operators
let a = 5;
let b = 2;

console.log ("a = " , a , " & b = " , b);
console.log ("a + b = " , a + b);
console.log ("a - b = " , a - b);
console.log ("a * b = " , a * b);
console.log ("a / b = " , a / b);
console.log ("a % b = " , a % b);
console.log ("a ** b = " , a ** b);

//Unary Operators
let a = 5;
let b = 2;
 
console. log ("a = ", a, "& b = ", b);

console. log ("a++ = ", a++, "& b++ = ", b++);
console. log ("a = ", a, "& b = ", b);

console. log ("a-- = ", a--, "& b-- = ", b--);
console. log ("a = ", a, "& b = ", b);

console. log ("++a = ", ++a, "& ++b = ", ++b);
console. log ("a = ", a, "& b = ", b);

console. log ("--a = ", --a, "& --b = ", --b);
console. log ("a = ", a, "& b = ", b);

//Assignment Operator
let a = 5;
let b = 2;

a += 4; // a = a + 4
console. log ("a = ", a);

//Comparison Operator

let a = 5;
let b = "5";
console.log ("5 != 2", a != b); 
console.log ("a == b", a == b);


let a = 5;
let b = "5";
console.log ("5 < 2", a < b); 
console.log ("5 < = 2", a <= b);
console.log ("5 > = 2", a >= b); 

// Logical Operators
let a = 6;
let b = 5;

console.log ("cond1 && cond2 = ", a < b && a == 6); 

let age = 25;
if ( age > 18) {
    console.log ("You can vote")
}

let mode = "black";
let color;

if (mode == "dark") 
 {
    color = "black";
 }
 if (mode == "light")
 {
    color = "white";
 }
 console.log(color); 

//if else
let mode = "black";
let color;

if (mode == "dark") 
    {
       color = "black";
    }
    else
    {
       color = "white";
    }
    console.log(color);


let age = 25;

if (age >= 18){
    console.log ("vote");
} else {
    console.log ("not vote");
}

//ternary operator, simpler version of if else   
let age =25;
let result = age>=18 ? "adult" : "not adult";
console.log (result); 

alert("Hello");

//Get user to input a number using prompt ("Enter a number:"). Check the number is multiple of 5 or not.

let num = prompt ("Enter a number");
if (num % 5 === 0)
{
    console.log (num, "is a multiple of 5");
}
else{
    console.log (num, "is not a multiple of 5");
}


//Practice ques 2
let score = 75;
let grade;

if (score >= 90 && score <= 100)
{
    grade = "A";
}
else if(score >= 70 && score <= 89){
    grade = "B";
}
else if(score >= 60 && score <= 69){
    grade = "C";
}
else if(score >= 50 && score <= 59){
    grade = "D";
}
else if(score >= 0 && score <= 49){
    grade = "F";
}
console.log ("according to your scores, your grade was ", grade); 


//Loop 
for (let count = 1; count<= 100000; count++){
    console.log ("Apna college");
}
console.log ("Loop has ended"); 

 //Calculate sum of 1 to 5
 let sum = 0;
 let n = 6;
 
 for (let i=1; i <= n; i++){
    sum = sum + i;
 }
 console.log ("sum = ", sum);
 console.log ("loop has ended"); 

 //while loop
let i=1;
while (i<=5){
    console.log ("Apna College");
    i++;
} 

//do while loop

let i = 1;
do{
    console.log("i = ", i);
    i++;
} while (i <= 5); 

//for-of loop

let str = "apna college";
let size = 0;
for (let i of str){
    console.log ("i = ", i);
    size ++;
}
console.log ("string size = ", size); 

//for in loop

let student = {
    name: "Anushka",
    age: 24,
    cgpa: 8.03,
    isPass: true,
};
for (let key in student){
    console.log ("key = ", key, "value = ", student[key]);
} 

//Practice Questions 1

//Loop 
for (let num = 0; num<= 100; num++){
    if(num % 2 !== 0){
    console.log ("num = ", num);
}
} 

//Practice Questions 2

let gameNum = 25;
let userNum = prompt("Guess the gameNum: ");

while (userNum != gameNum) {
    userNum = prompt("You entered the wrong num. Guess the gameNum again: ");
}
console.log ("Congratulation, you entered the right num"); 

//normal method to print a string
let obj = {
    item: "pen",
    price: 10,
}
console.log ("The cost of", obj.item, "is", obj.price, "rupees"); 

//To print a string using Template Literals

let obj ={
    item: "pen",
    price: 10,
}
let output = `The cost of ${obj.item} is ${obj.price} rupees`;
console.log (output);

//to add a value inside the string expression

let specialString = `This is a template literal ${1 + 2 + 3}`;
console.log (specialString);


//str.toUpperCase

let str = "Apna College";
let newStr = str.toUpperCase(); //o.,;r we can store the new string into the original string i.e., let str = str.toUpperCase; 
console.log(str);
console.log(newStr);


let fullName = prompt("Enter your name without spaces");
let userName = "@" + fullName + fullName.length;
console.log (userName);

//printing an array using for loop

let heroes = ["Ironman" , "Thor", "Shaktiman", "Avengers", "Spiderman"];
for (let i = 0; i < heroes.length; i++){
console.log(heroes[i]);
}

for (let hero of heroes){
    console.log(hero);
}

let marks = [80, 45, 70, 39, 20];
let sum = 0;
for (let val of marks) {
    sum += val;
}
let avg = sum / marks.length;
console.log (`The average marks is = ${avg}`);


//To change the values of an array by applying 10& offer on each index value

let items = [200, 90, 110, 400, 50];
let i = 0;
for (val of items){
    console.log(`value at index ${i} = ${val}`);
    let offer = val / 10;
    items[i] = items[i] - offer;
    console.log (`value after offer = ${items[i]}`);
    i++;
}

let items = [200, 90, 110, 400, 50];
for (let i= 0; i< items.length; i++){
    let offer = items[i]/ 10;

    items[i]= items[i] - offer;
}
console.log ("New offer price:",items);


let marvelheroes = ["ironman", "thor", "spiderman"];
let dcheroes = ["Shaktiman", "superman"];
    let heroes = marvelheroes.concat(dcheroes);
    console.log(heroes);
*/

let marks = [89, 91, 200, 39, 40];
console.log (marks);