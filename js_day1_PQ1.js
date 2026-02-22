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
 //day 2.