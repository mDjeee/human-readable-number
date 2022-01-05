module.exports = function toReadable (number) {
    let str = "";
    let ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    if(number>=100){
        str += ones[(number - (number%100)) / 100] + ' hundred';
        if(number % 100 < 20 && number % 100 >= 10) {
            str += ' ' + teens[number % 100 - 10];
        }
        if(number % 100 >= 20) {
            str += ' ' + tens[((number % 100) - ((number % 100) % 10)) / 10];
            if((number % 100) % 10 >= 0){
                str += ' ' + ones[(number % 100) % 10];
            }
        }
        if(number % 100 < 10){
            str += ' ' + ones[(number % 100) % 10];
        }
    }
    else if(number >= 10){
        if(number < 20 && number >= 10) {
            str += teens[number - 10];
        }
        if(number >= 20) {
            str += ' ' + tens[(number - (number % 10)) / 10];
            if(number % 10){
                str += ' ' + ones[number % 10];
            }
        }
    }
    else {
        str = ones[number];
        if(number === 0){
            str = 'zero';
        }
    }
    return str.trim();
}
