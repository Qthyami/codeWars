function generateHashtag (str) {

let answ= str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
if (answ.length>=140) {
    return false ;
   } else if (answ === "") {
    return false;
   } 
return "#"+ answ;
}
console.log(generateHashtag ("Hello mommy")); // Output: ["Apple", "Banana", "Orange"]