var longestRun = function (string) {
  var strLen = string.length;
  if (strLen === 0) return [];
  if (strLen === 1) return [0, 0];

  // strings of length 2 or greater
  var currentStart  = 0;
  var currentLength = 1;
  var maxStart  = 0;
  var maxLength = 1;
  var i;

  for (i = 1; i < strLen; i += 1) {
    // check if this character is the same as previous character
    if ( string[i] === string[i - 1] ) {
      currentLength += 1;
    } else {
      if (currentLength > maxLength) {
        maxStart  = currentStart;
        maxLength = currentLength;
      }
      currentStart  = i;
      currentLength = 1;
    }
  }

  return [ maxStart, maxStart + maxLength - 1 ];
};
