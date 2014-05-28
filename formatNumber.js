var formatNumber = function( number, decimals, decimal_point, thousands_sep )
{
 	number = parseFloat(number);
	if (isNaN(number)) return false;
	
	// Check for a decimal or set a default of 2
 	decimals = decimals || 2;
	
	// Decimal point
 	decimal_point = decimal_point || '.';

	// Thousands seperator
	thousands_sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep;
	
	number = parseFloat(number).toFixed(decimals); // force number to float
	number = number.replace(/\.|\,/g, decimal_point);
	
	var x = number.split(decimal_point);
	var x1 = x[0];
	var x2 = x[1];
	var rgx = /(\d+)(\d{3})/;
    
	while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }

	var output = x1.replace(/\,/g, thousands_sep);

	return (output + decimal_point + x2);
}
