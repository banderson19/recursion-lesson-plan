var reverseArray = function (array) {
  var length = array.length;
  var start  = 0;
  var end    = length - 1;
  var temp;

  while (start < end) {
    temp         = array[start];
    array[start] = array[end];
    array[end]   = temp;

    start += 1;
    end   -= 1;
  }

  return array;
};
