// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


//--- My Solution ---//
function vowels(str) {
  let vowelArr = ['a', 'e', 'i', 'o', 'u']
  let strArr = str.toLowerCase().split('')
  let count = 0;
  strArr.forEach(letter => {
    if(vowelArr.includes(letter)) {
      count++
    }
  })
  return count
}

//--- Regex Solution ---//
// function vowels(str) {
//   const matches = str.match(/[aeiou]/gi)
//   return matches ? matches.length : 0
// }

module.exports = vowels;
