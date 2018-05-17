var longestPalindrome = function (string) {
  var result = '';
  var len = string.length;
  var i, j, word;

  for (i = 0; i < len; i += 1) {
    for (j = len; j > i; j -= 1) {
      word = string.slice(i, j);

      if ( isPalindrome( word ) && word.length > result.length) {
        result = word;
      }
    }
  }

  return result;
};

var isPalindrome = function (string) {
  var len = string.length;

  if ( len < 2 ) return true;
  if ( string[0] !== string[len - 1] ) return false;
  return isPalindrome( string.slice(1, len - 1) );
};
