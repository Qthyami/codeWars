//Sam Harris => S.H
//patrick feeney => P.F
function abbrevName(name){
   
    
    return initials = name.match(/\b\w/g).map(m => m.toUpperCase()).join('.');
    



}

console.log(abbrevName("Hip Hop and rock n Roll"));
// слабее, берет только 2 слова первых
function abbrevName2(name){

    let nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase() + "." ;
  }

  console.log(abbrevName2('ehal greka cherez reku'));
