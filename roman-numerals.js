function toRoman(number) {
  const romanNumerals = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M"
  }

  for(let key in romanNumerals) {
    if (key == number) {
      return romanNumerals[key];
    }
  }

  let numeral = "";

  for (let i = 0; i < number; i++) {
    numeral += romanNumerals[1]
  }

  return numeral;
}

export default toRoman
