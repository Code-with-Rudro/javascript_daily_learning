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