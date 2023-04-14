function sumStrings(a,b) { 
  let numRegex = /\D/g;
  let c =0;
  if (numRegex.test(a) && numRegex.test(b)) {
    c = 0;
    
  } else if(numRegex.test(a) ){
    a = 0;
    a = BigInt(a);
    b = BigInt(b);
    c = a + b;
  } else if(numRegex.test(b) ) {
    b=0;
    a = BigInt(a);
    b = BigInt(b);    
    c = a + b;
  } else {
  a = BigInt(a);
  b = BigInt(b);
  c = a + b;
  }
  return c = c.toString();
} 
    
  



 