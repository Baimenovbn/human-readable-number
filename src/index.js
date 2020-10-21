const helpDict = [
  ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],

  ['', '', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '],

  ['', 'one hundred ', 'two hundred ', 'three hundred ', 'four hundred ', 'five hundred ', 'six hundred ', 'seven hundred ', 'eight hundred ', 'nine hundred '],

  ['ten', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen ']
]


module.exports = function toReadable (number) {
  if (number === 0) {
    return 'zero'
  }

  let answer = '';
  const strNum = number.toString();
  let len = strNum.length;
  let start = 0

  if (len === 2 && strNum[0] === '1') {
    return helpDict[3][parseInt(strNum[1])].trim()
  }

  if (len === 3 && strNum[1] === '1') {
    return `${helpDict[2][parseInt(strNum[0])]}${helpDict[3][parseInt(strNum[2])]}`.trim()
  }

  
  for (let i = len - 1; i >= 0; i--) {
    answer = `${helpDict[start][parseInt(strNum[i])]}${answer}`
    start++;
  }

  return answer.trim();
}
