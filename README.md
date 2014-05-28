# formatNumber

A simple and clean way to format numbers with grouped thousands in Javascript. Function signature copied from PHP's [number_format](http://www.php.net/manual/en/function.number-format.php) function.

## Arguments

* number: The number to be formatted. If NaN, false is returned.
* decimals: The number of decimal places to show; default: 2
* decimal_pnt: The character to use for a decimal point; default: '.' (period)
* thousands_sep: The character to use for the thousands seperator; default ',' (comma)

## Usage

Default format is US with comma thousand seperators and decimal point.

```javascript
// US format example
console.log(formatNumber(1000000));
1,000,000.00
```

```javascript
// French format
console.log(formatNumber('1000000', 2, ',', ' '));
1 000 000,00
```
