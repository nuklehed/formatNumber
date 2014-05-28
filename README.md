# formatNumber

A simple and clean way to format numbers with grouped thousands in Javascript. Function signature copied from PHP's [number_format](http://www.php.net/manual/en/function.number-format.php) function.

## Arguments

* number: The number to be formatted. If NaN, false is returned.
* decimals: The number of decimal places to show; default: 2
* decimal_pnt: The character to use for a decimal point; default: '.' (period)
* thousands_sep: The character to use for the thousands seperator; default ',' (comma)

## Usage

English notation is the default which includes a comma thousands seperator and a period decimal point.

```javascript
// English notation example
console.log(formatNumber(1000000));
1,000,000.00
```

```javascript
// French notation example; note: the number is passed as a string!
console.log(formatNumber('1000000', 2, ',', ' '));
1 000 000,00
```

```javascript
// English notation without thousands separator
console.log(formatNumber(1000000, 2, '.', ''));
// 1000000.00
