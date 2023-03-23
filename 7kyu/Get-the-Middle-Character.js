function getMiddle(s)
{
  let count = 0;
for (let i=0; i< s.length; i++) {
  count++;
}
  if (count %2 ===0){
  e= count/2;
  return  s[e-1]+ s[e]; }
  else {e =count/2;
    e= count/2 - 0.5;
     return s[e]   
       }
}

//another
function getMiddle2(s)
{
    console.log((s.length-1)/2, s.length/2+1);
    //метод слайс() использует Math.floor() округляющий в меньшую сторону
  return s.slice((s.length-1)/2, s.length/2+1);
}

getMiddle2("sdfsdfs")