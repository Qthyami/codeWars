const str = 'The quick brown fox jumps over the lazy dog.';
function spinWords(string){
  const words = string.split(' ');
  console.log(words);
    for (let i=0; i <words.length; i++){
      if(words[i].length>=5) {
        words[i]=words[i].split("").reverse().join("");    
      }
      else continue;
    }
    return words.join(" ");
  }
  console.log(spinWords("Hey fellow warriors" ));

  //пацанские методы
  function spinWords2(words){
    return words.split(' ').map(function (word) {
      return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
  }
  
  function spinWords3(string){
    return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
  }