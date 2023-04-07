class RomanNumerals {
    static toRoman(num) {
      let arab =[1,4,5,9,10,40,50,90,100,400,500,900,1000];
      let roma = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
      let romaAnsw= [];
      for (let i=0; i<arab.length && num>0; i++){
        if (num > arab[12]) {
            romaAnsw.push(roma[12])
            num=num-arab[12];
            i=0;
        }

        else if (num === arab[i]) {
            romaAnsw.push(roma[i]);
            break;
        }

         else if (num < arab[i]) {
            romaAnsw.push(roma[i-1]);
            num=num-arab[i-1];          
            i=0;
        }
    
      }

      return romaAnsw.join("");
    }
  
    static fromRoman(str) {
        let arab =[1,4,5,9,10,40,50,90,100,400,500,900,1000];
        let roma = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
        let newArab=0;
        let newRoma =str.split("");
        let newRomaFiltered=[];
        for(let j=0; j<newRoma.length; j++){
          if (roma.includes(newRoma[j]+newRoma[j+1])) {
            newRomaFiltered.push((newRoma[j]+newRoma[j+1]));
            j=j+1;
          }
          else newRomaFiltered.push(newRoma[j]);
        }
       
        for (let i=0; i<newRomaFiltered.length; i++) {
           let m= roma.indexOf(newRomaFiltered[i]);           
           newArab = newArab+ arab[m];
              }

      return newArab;
    }
  }

  console.log(RomanNumerals.fromRoman("MMCMLIV"));
  



  // из арабского в римское через объект:
  function solution(number){
    // convert the number to a roman numeral
  let  roman = {M:1000,CM:900, D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 }
  
  let ans = '';
  while(number>0){
      for(a in roman){ 
          if(roman[a]<=number){ 
            ans += a; number-=roman[a]; break;
        }
              
      }
  }
  return ans;
  }