// DAY-1
// object (non-primitive data type).
const portfolio ={
    accName : "Rudro prasad panigrahi",
    follow : "FOLLOW",
    dm : "message",
    post : 196 + "post",
    folling : 29 + "k",
    folowers : 1,
    discription : "yo its my ploser to connect with you",
    location : "ongole,AP",
}
console.log(portfolio)
 
//DAY-2

//ARTHIMETIC OPERATOR 

let num_a = 10;
let num_b = 2;

console.log("a+b =", num_a+num_b);
console.log("a-b =", num_a-num_b);
console.log("a*b =", num_a*num_b);
console.log("a/b =", num_a/num_b);
console.log("a%b =", num_a%num_b);
console.log("a**b =", num_a**num_b);

//ASSIGNMENT OPERATOR 

let X = 20;
let y = 4;

console.log("X=y =", X=y);
console.log("X+=y =", X+=y);
console.log("X-=y =", X-=y);
console.log("X*=y =", X*=y);

//COMPARISON OPERATOR 

let num = 10;
let num1 = 5;
let num2 = "10";

console.log("num==num1 =", num==num1);
console.log("num===num2", num===num2);
console.log("num===num2", num===num1);
console.log("num!=num1", num != num1);
console.log("num===num2", num !== num1);
console.log("num>num1", num>num1);
console.log("num<num1", num<num1);
console.log("num>=num1", num>=num1);

//LOGICAL OPERATOR

let kiran = 10;
let rudra = 2;
let con1 = kiran > rudra;
let con2 = kiran === rudra;

console.log("both conditation ", (con1 && con2));
console.log("atleast one conditation ", (con1 || con2));
console.log("even not any conditation true", !(kiran == rudra));


//CONDITIONAL STATEMENT 
// To impliment some conditation in the code

//IF STATEMENT
let mode="dark";
let colour  ;

if(mode="dark")
{
    colour="black";
}
console.log(colour)

//IF-ELSE STATEMENT
let age = 19;
if(age > 18){
    console.log("acces grant", age);
} 
else{
    console.log("acces not grant", age);
}


//ELSE-IF STATEMENT 

let mark = 12;

if(mark>50 && mark<=75){
    console.log("a grade", mark);
    
}
else if(mark>30 && MARK<=49) {
    console.log("b grade", mark);
      
} 
else{
    console.log("f grade", mark);
}

//ALERT
//  it will poppop a massege 
alert("well come ");

//prompt
// it will provide a input box.

prompt("rate me 1-5");

//DAY-2;

//LOOPS IN JS
// Loops are used to execute a pice of code again and again.
//types of loops
/*
1.for loop,
2. while loop,
3. do-while loop,
4. for-of loop  (used for strings,arrays)
5. for-in loop   (used for objects)
*/

//FOR LOOP :
for(i=1;i<=5;i++){
    console.log("num=", i); // execute 1 to 5
}

//WHILE LOOP :
let me = 1;
while(me>=10){
    console.log("number =", em);
    em++;
}
//DO-WHILE LOOP :
do{
    console.log("do print is =", em);
    em++;
}while(em>=7);

 //FOR-OF LOOP :
 let name="RUDRA";
 for(let i of name){
  console.log("i=",i);
 }

 // FOR-IN LOOP :
 let stu={
    name : "kiran",
    age : 18,
    cgpa : 7.2,

 };

 for(let i in stu){
    console.log("key =",i,"values", stu[i]);
 }

 //STRING CONCEPT :

 // string is a sequence of characaters used to represent the text 

 // create a string

 let str = "Siva sankar"

 //length

 console.log(str.length);

 //string indices
 
 console.log(str[0]);

 console.log(str[3]);

 //template literals 

 console.log(`he is my best friend ${str}`);

 //string slice
 //                    st end?
 console.log(str.slice( 1, 3));

 // ARRAYS IN JAVASCRIPT :

 // array is collection of similar items.

 let arr =[10,20,30,40];
 console.log(arr);

 // ARRAY INDICES :

 // to return specific value in an array

 console.log(arr[1]);

 arr[3];

 arr[2] = 200;  // change the specific value

 // LOOP OVER AN ARRAY :

 // to print all items in array ;

 for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
 }
// Array methods

let exx=[100,200,300,400];
let exx2=[10,20];


//push 
console.log(exx.push(222)); // it will add values in the end of array.
console.log(exx); //exx=[100,200,300,400,222];


//pop
console.log(exx.pop()); // it will return the END deleted value. 222 delete 


//tostring

console.log(exx.toString()); // it will convert the arrays values into string values.


//DAY-5

// FUNCTIONS :

// block of code performs a specific task, can be involved whenever needed.

function fun_name(){
    console.log("CODE WITH RUDRA");
}

console.log(fun_name());

// some of two numbers.
function sum(a,b){
    sol = a + b;
    return sol;
}
let plus = sum(10,2);
console.log(plus);


// arrow function "=>".
// its use for small tasks.
// we can store function in a variable.

const val=(a,b)=>{
    return a+b;
}

console.log(val(20,30));

// DAY-6
// METHODS IN JS :
// method is a spicial type of function which merge with object is kmown as methods.

// ForEach loop in array : (higher order function (imp))

// forEach : callbackfunction : here it is a function to exicute for each element in the array.

// a call back is a function passed as an argument to another function.

// ex :-
arr=[1,2,3,4,];
arr.forEach((val,idx,array)=>{
    console.log(val,idx,array);
})


