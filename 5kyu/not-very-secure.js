//функция, которая разрешает прием строки только из букв и чисел, пробелы и знаки запрещены
function alphanumeric(string){
let regex= /[^a-z0-9]/gi;
if (regex.test(string) === true) {
    return false;
} else if (string==="") {
    return false;
}
else return true;
  }
 console.log( alphanumeric(''));