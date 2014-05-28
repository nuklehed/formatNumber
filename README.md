formatNumber
============

A simple clean way to format numbers with Javascript. Inspired by PHP's format_number function.

Arguments
============
number: The number to be formatted. If NaN, false is returned.
decimals: The number of decimal places to show; default: 2
decimal_pnt: The character to use for a decimal point; default: '.' (period)
thousands_sep: The character to use for the thousands seperator; default ',' (comma)

Usage
============
Default format is US with comma thousand seperators and decimal point.

// US format example
console.log(formatNumber(1000000));
1,000,000.00

// French format
console.log(formatNumber('1000000', 2, ',', ' '));
1 000 000,00
