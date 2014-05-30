(function() {
  var $;

  $ = jQuery;

  $.formatNumber = function(number, options) {
    var $output, rgx, x, x1, x2;
    options = $.extend({}, $.formatNumber.default_options, options);
    $output = $(options.element);
    number = parseFloat(number);
    if (isNaN(number)) {
      return false;
    }
    number = parseFloat(number).toFixed(options.decimals);
    number = number.replace(/\.|\,/g, options.decimal_pnt);
    x = number.split(options.decimal_pnt);
    x1 = x[0];
    x2 = x[1];
    rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, "$1" + "," + "$2");
    }
    x1 = x1.replace(/\,/g, options.thousands_sep);
    $output.append(x1 + options.decimal_pnt + x2);
    return $output;
  };

  $.formatNumber.default_options = {
    decimals: 2,
    decimal_pnt: '.',
    thousands_sep: ',',
    element: 'span'
  };

}).call(this);
