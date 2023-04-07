//преобразует строку в скобочки, если повторяется буква, то в закрывающую скобочку
function duplicateEncode(word){
   let arr = word.toLowerCase().split("");
   let newArr=[];
   for(let i=0; i< arr.length; i++){
    if (arr.filter(elem => elem === arr[i]).length > 1) {
        newArr.push(')')
    } if (arr.filter(elem => elem === arr[i]).length === 1) {
        newArr.push('(')
    }
   }
   return newArr.join("");
}

 console.log(duplicateEncode('woord'))