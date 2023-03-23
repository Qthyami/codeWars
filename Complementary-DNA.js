function DNAStrand(dna){
let arr = dna.split("");
let wrap =[];
for (i=0; i < arr.length; i++) {
    switch (arr[i]) {
    case "A" :
    wrap.push("T");
         break;
    case "T" :
        wrap.push("A");
        break;
    case "C" :
        wrap.push("G");
        break;
    case "G" :
        wrap.push("C")
        break;

    }
       
          
  
}
return wrap.join("");
  }
  console.log(DNAStrand("ATTGC"));

  //smarter approach:
  let pairs = {'A':'T','T':'A','C':'G','G':'C'};

  function DNAStrand2(dna){
    return dna.split('').map(function(v){ return pairs[v] }).join('');
  }
  console.log(DNAStrand2("ATTGCTT"))

 