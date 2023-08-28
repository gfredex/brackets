module.exports = function check(str, bracketsConfig) {
  let tempStr = str;
  let result = '';
  let configStart = bracketsConfig;
  for (i = 0; i < tempStr.length - 1; i++) {
    for (j = 0; j < configStart.length; j++) {
      if ((tempStr[i] === configStart[j][0]) && (tempStr[i + 1] === configStart[j][1])) {
        tempStr = tempStr.replace(tempStr[i] + tempStr[i + 1], '');
        i = i - 2;
      }
    }
    result += str[i] + str[i + 1];
  }
  if (tempStr.length > 0) { return false; }
  else { return true; }
}
