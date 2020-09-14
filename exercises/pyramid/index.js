// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//-- My Solution --//
function pyramid(n) {
  let block = '#'
  let space = ' '
  for (let i = 1; i <= n; i++) {
    let currentStep = ''
    currentStep += space.repeat(n - i) + block.repeat(2 * i - 1) + space.repeat(n - i)
    console.log(currentStep)
  }
}
module.exports = pyramid;

/*
  1, 3, 5, 7, 9, 11  bottom level
  1, 2, 3, 4, 5, 6   row
  0, 1, 2, 3, 4, 5   additional blocks from bottom level

  currentStep = block.repeat(i)
  bottomLevel = block.repeat(2 * i - 1)
*/