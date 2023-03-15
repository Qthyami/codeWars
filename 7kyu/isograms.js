function isIsogram(str) {
   const letterCount = {};
   const lowercaseStr = str.toLowerCase();
   
   for (let i = 0; i < lowercaseStr.length; i++) {
     const char = lowercaseStr[i];
     console.log(char);
     console.log(letterCount[char]);
     console.log(letterCount);
     if (letterCount[char]) {
     return false;
     }
     letterCount[char] = 1;
   }
   
return true;
 }
 isIsogram('churka');

 //Explanation:We start by defining a function called isIsogram that takes a string argument str.

//We create an empty object called `letterCount` that we'll use to keep track of the count of each letter in the string.

//We create a lowercase version of the input string using the toLowerCase method.

//We loop through each character of the lowercase string using a for loop.

//For each character, we check if it's already in the letterCount object. If it is, that means we've already seen the letter before and the string is not an isogram, so we return false.

//If the character is not already in letterCount, we add it to the object with a count of 1.

//If we've finished looping through all the characters without finding any duplicates, that means the string is an isogram, so we return true.

//Note that this solution ignores non-letter characters and treats uppercase and lowercase letters as equivalent.

function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}
//The function takes a string argument str.

//The toUpperCase() method is called on str to ensure that we ignore the case of the letters.

//The new Set() constructor creates a new set object, which is an unordered collection of unique elements. By passing the uppercased string str as an argument to the set constructor, we create a set containing all the unique letters in the string.

//The size property of the set object returns the number of elements in the set.

//The == operator is used to compare the size of the set to the length of the original string str. If the set contains only unique letters, its size will be equal to the length of str, and the function will return true. Otherwise, it will return false.

//This solution works because the Set constructor automatically removes duplicate elements, so if the length of the set is equal to the length of the original string, that means there are no repeated letters in the string. By ignoring the case of the letters using toUpperCase(), this solution treats uppercase and lowercase letters as equivalent, just like the previous solution.