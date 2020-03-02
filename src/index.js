module.exports = function check(str, bracketsConfig) {
  let circle = 0;
  let square = 0;
  let curly = 0;
  
    for (const item of str) {
        if (circle > 0 || square > 0 || curly > 0) {
          return false;
        }
        if (item === '(') {
          circle -= 1;
        }
        if (item === ')') {
          circle += 1;
        }
        if (item === '[') {
          square -= 1;
        }
        if (item === ']') {
          square += 1;
        }
        if (item === '{') {
          curly -= 1;
        }
        if (item === '}') {
          curly += 1;
        }
    }
  
  return true;
}
