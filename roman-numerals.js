// function toRoman(number) {
//   const romanNumerals = {
//     1: "I",
//     5: "V",
//     10: "X",
//     50: "L",
//     100: "C",
//     500: "D",
//     1000: "M"
//   }

//   let numeral = "";

//   for(let key in romanNumerals) {
//     if (number == key) {
//       return romanNumerals[key];
//     }

//     if (number == key - 1) {
//       return numeral + romanNumerals[1] + romanNumerals[number + 1];
//     }

//     if (number == key + 1) {
//       return numeral + romanNumerals[number - 1] + romanNumerals[1];
//     }
//   }

//   for (let i = 0; i < number; i++) {
//     numeral += romanNumerals[1]
//   }

//   return numeral;
// }

const parts = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [49, 'IL'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
]

const toRoman = (arabic) => {
  if (arabic === 0) return ''
  const [sub, roman] = parts.filter(([n, _]) => n <= arabic)[0]
  return `${roman}${toRoman(arabic - sub)}`
}

export default toRoman
