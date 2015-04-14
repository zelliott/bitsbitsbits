var bToH = function (b) {
  var h = '';

  var lookup = {
    '0000': '0', '0001': '1', '0010': '2', '0011': '3', '0100': '4',
    '0101': '5', '0110': '6', '0111': '7', '1000': '8', '1001': '9',
    '1010': 'A', '1011': 'B', '1100': 'C', '1101': 'D', '1110': 'E',
    '1111': 'F'
  };

  // Pad number with zeroes
  var padding = 4 - (b.length % 4);
  for (var p = 0; p < padding; p++) {
    b = '0' + b;
  }

  for (var i = 0; i < b.length; i+=4) {
    var key = b.substring(i, i+4);
    h += lookup[key];
  }
  return h;
};

var bToD = function (b) {
  var d = 0;

  for (var i = b.length - 1; i >= 0; i--) {
    var bit = parseInt(b.charAt(i));
    d += bit * (Math.pow(2, ((b.length - 1) - i)));
  }
  return d;
};

var hToB = function (h) {
  var b = '';
  var lookup = {
    '0': '0000', '1': '0001', '2': '0010', '3': '0011',
    '4': '0100', '5': '0101', '6': '0110', '7': '0111',
    '8': '1000', '9': '1001', 'A': '1010', 'B': '1011',
    'C': '1100', 'D': '1101', 'E': '1110', 'F': '1111'
  };

  for (var i = 0; i < h.length; i++) {
    var key = h.charAt(i);
    b += lookup[key];
  }
  return b;
};

var hToD = function (h) {
  var d = 0;

  for (var i = h.length - 1; i >= 0; i--) {

    var lookup = {
      '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
      '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
      'A': 10, 'B': 11, 'C': 12, 'D': 13, 'E': 14,
      'F': 15
    };

    var hex = lookup[h.charAt(i)];    
    d += hex * (Math.pow(16, ((h.length - 1) - i)));
  }
  return d;
};

var dToB = function (d) {
  var b = '';
  while (d !== 0) {
    if (d % 2 === 1) {
      b = '1' + b;
    } else {
      b = '0' + b;
    }
    d = Math.floor(d / 2);
  }
  return b;
};

var dToH = function (d) {
  // Unimplemented because lazy
};

$(document).ready(function () {
  var b = $('#b').val(),
    h = $('#h').val(),
    d = $('#d').val();

  $('input[type=text]').on('keyup', function () {
    var id = $(this).attr('id');
    if (id === 'b') {
      b = $(this).val();
      $('#h').val(bToH(b));
      $('#d').val(bToD(b));
    } else if (id === 'h') {
      h = $(this).val();
      $('#b').val(hToB(h));
      $('#d').val(hToD(h));
    } else if (id === 'd') {
      d = $(this).val();
      $('#b').val(dToB(d));
      $('#h').val(bToH($('#b').val()));
    } else {
      console.log('what are you even trying to do rn');
    }
  });
});
