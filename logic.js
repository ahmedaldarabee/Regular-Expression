console.log("Regular Expression or regex | Email - IP - Phone - URL ");
console.log("Check about complecated data\n");

let username = "ahmed nayel mohammad Ahmed al darabee";
let regex = /Ahmeds/ig // / ... / that known as pattern

// return result based on first finding!

// match function in string
    // that return array of matched element +
    // index of needed word and main string +
    // null if there is no result!
    
// modifiers | Flags:
    // Note, you can working with difference flage at the same time 
    // i [ Case-Insensitive Searching ],
    // g [ Global around all statement ],
    // m [ Multi-line ], when you have muliple line needed to search on it
// console.log(username.match(regex));
    
// Ranges:
    // (|) or
    // [ x - y ] from x to y
    
// What's about when i want to search about array not string?

let domains = "com org .net info code"
let domainRegex = /(info|code|com)/ig
console.log(domains.match(domainRegex),'\n');

let number = "0785266266"
let numberRegex = /[0-5]/g
console.log(number.match(numberRegex),'\n');


let numberSectionTwo = "0785266266"
// ^ refer to not
let numberRegexSectionTwo = /[^0-5]/g
console.log(numberSectionTwo.match(numberRegexSectionTwo),'\n');

let characterData = "A%m#d A! &rabae-"
let characterDataRegex = /[^A-z]/g
console.log(characterData.match(characterDataRegex),'\n');

let names = "Os1 Os1Os Os2 Os8 Os8Os"
let namesRegex = /Os[5-9]Os/g
console.log(names.match(namesRegex),'\n');

let randomTxt = "Aa785#474$med!-4al(daraBeE^E]"
let randomTxtRegexFirst = /[are]/ig
let randomTxtRegexSecond = /[^are]/g
let randomTxtRegexThird = /[a-zA-Z]/g
let randomTxtRegexFourth = /[^a-zA-Z^0-9]/g
// Z^ we target the ^ in second place that mean meaning


console.log('First Design: ',randomTxt.match(randomTxtRegexFirst),'\n');
console.log('Second Design: ',randomTxt.match(randomTxtRegexSecond),'\n');
console.log('Third Design: ',randomTxt.match(randomTxtRegexThird),'\n');

console.log('Fourth Design: ',randomTxt.match(randomTxtRegexFourth),'\n');

// now we will starting from character classes

// .that match every char in this line not in next lines
// \w matches word characters. [a-z, A-Z, 0-9 And Underscore]
// \W => matches Non word characters: like not \w
// \d =>  matches digits from 0 to 9. 
// .\D => matches non-digit characters. like not \d
// .\s  => -matches whitespace character.
// · \S => · matches non whitespace character. like not \s

console.log('\ncharacter classes');

let char = "ahmed@@@@_gmail......com";
let pattern = /\W/g
console.log(char.match(pattern),'\n');

let email = 'o@@@g...com.o@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com';

let validEmailPattern = /\w@\w.(com|net)/g
console.log(email.match(validEmailPattern),'\n');










