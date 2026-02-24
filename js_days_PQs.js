//day-1 PQ (practice question).
/*Q1 - write a code which can give grade to student according to their scores:

  90 - 100 = A,
  80 - 89 = B,
  70 - 79 = C,
  50 - 69 = D,
  0 - 49 = F,
  */

  let n = prompt("enter your mark");
  if(n>90 && n<=100){
    console.log("studnt get A grade", n);
  }
  else if(n>80 && n<=89){
    console.log("student get B grade");
  }
  else if(n>70 && n<=79){
    console.log("student get C grade");
  }
  else if(n>50 && n<=69){
    console.log("student get D grade ");
  }
  else{
    console.log("student get F grade")
  }

  //PQ-1, DAY-2
  // TO PRINT EVEM NUMBERS 0-100;
  for(let i = 0;i<=100; i++){
    if(i%2==0){
        console.log("even=",i);
    }
    
  }

  // PQ-2 RANDOM NUMBER GUSSING
 let gmnum = 25;
 let usrnum = prompt("enter yor number");
 while(usrnum!=gmnum){
   usrnum= prompt(" re enter yor number");
   
 }
 console.log("your entering number is right", usrnum);
 
//day-3

//PQ-1 RANDOM USER NAME GENERATING :
// prompt the user to enter their full name, generate fullname based on the output, start username with "@", followed by their fullname and ending with full name leanth,

// ex- kirankumar       outpot - @kirankumar10

let user = prompt("enter your fullname");
console.log(`@${user.toUpperCase(user)}${user.length}`);

// DAY-4 PRATICE QUESTION 
//PQS-4

// Q - for a given array with marks of students -> [85,97,44,37,76,60] find the average mark of the array ?

let stu=[85,97,44,37,76,60];
let sum=0;
for(i=0;i<stu.length;i++){
  sum+=stu[i];
}

 console.log(sum);
let avg = sum/stu.length;
console.log(avg);

//Q-2 
// for a given array with price of 5 items -> [250,360,44,1088], all items hav 10% off in item, the array to store after applying offer ?

let items=[250,360,44,1088];
for(i=0;i<items.length;i++){
  off=items[i]/10;
  items[i]-=off;

}
console.log(items);
