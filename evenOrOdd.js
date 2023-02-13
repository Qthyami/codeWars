
function evenOrOdd(number) {
    if (number % 2 ===0 )  {
      return "Even";
    } else if (number % 2 > 0) {
     return 'Odd';
   } else if (number % 2 < 0) {
    return 'Odd';
}
}
   console.log(evenOrOdd (-41));
// Это лучше
   function even_or_odd(number) {
    if (number%2 == 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }

  //Еще прикол 
  function even_or_odd(number) {
    return ( (number % 2) == 0 ) ? "Even" : "Odd";
  }