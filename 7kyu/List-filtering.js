function filter_list(l) {
    // Return a new array with the strings filtered out
    let anw =[];
    for (let i=0; i< l.length; i++ ) {
       if (typeof l[i] === "number") {
         anw.push(l[i]);
       }
      console.log (l[i]);
    }
    return anw;
  }
  console.log (filter_list2([1,2,'a','b',8,5]));

  //еще вариант
function filter_list2(l) {
    return l.filter(function(v) {return typeof v == 'number'})
  }
  // .filter создает массив со всеми элементами, прошедшими проверку