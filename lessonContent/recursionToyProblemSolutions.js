// Reverse string

function reverseStr(str) {
  debugger;
  if(str === '') {
    return str;
  }
  else {
    var subString = str.substr(1);
    var charAt0 = str.charAt(0)
    return reverseStr(subString) + charAt0
  }
}

reverseStr('abc');
