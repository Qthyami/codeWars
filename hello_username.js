
function greet(name) {
    //your code here
    let answ1= 'Hello, ';
    let answ2 = " how are you doing today?";
    let answer = answ1 + name + answ2;
    return answer;
  }

 console.log (greet("Ryan"));

 function greet(name){
  return `Hello, ${name} how are you doing today?`;
}