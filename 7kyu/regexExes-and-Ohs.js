//XO("ooxx") => true
//XO("xooxx") => false
//XO("ooxXm") => true
//XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
//XO("zzoo") => false

function XO(str) {
    let o = str.match(/[o]/gi);
    let x =str.match(/[x]/gi);
     if ((o === null && x===null)){
      return true;
    } else if ((o === null || x===null)) {
      return false;
    }
      else if (o.length === x.length) {
      return true;
    }
    else return false;
    
    
   
  }
   
  console.log(XO('lipi'));




//shorter//
function XO2(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}