console.log("Regular Expression or regex | Email - IP - Phone - URL ");
console.log("Most Popular Tool for restrictions in the data handling\n");
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
    // (|) or () called as group
    // [ x - y ] from x to y
// skipping be as \ - back slash -
    
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
// \b => matches at the beginning or end of a word.
// \B => matches NOT at the beginning/end of a word.

console.log('\ncharacter classes');

let char = "ahmed@@@@_gmail......com";
let pattern = /\W/g
console.log(char.match(pattern),'\n');

let email = 'o@@@g...com.o@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com';

let validEmailPattern = /\w@\w.(com|net)/g
console.log(email.match(validEmailPattern),'\n');

let nameSpam = "45Spam spam33 8spam ospam2 none";
// let patternSpam = /spam\b/gi;
let patternSpam = /\bspam/gi;
console.log(nameSpam.match(patternSpam),'\n');

// test method
// that return true or false, based on needed check-pattern

console.log(`Is this pattern ${patternSpam} exist in this statement [ ${nameSpam} ]: `,patternSpam.test(nameSpam));

// Quantifiers
// +: one or more
// *: zero or more [ there exist or not ]
// ?:zero or one [ optional requirement ]


let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru";
let mailPatternFirst = /\w+@\w+.(com|net)/gi
console.log('\nQuantifiers 1: ',mails.match(mailPatternFirst),'\n');


let numsQuantifier = "0110 10 050 150 05120 0560 350 00"; 
let numsQuantifierPattern = /0\d*0/g

console.log('\nQuantifiers 2: ',numsQuantifier.match(numsQuantifierPattern),'\n');

let urls = "https://google.com http://www.website.net web.com";

let patternURL=/https?:\/\//g
console.log('\nQuantifiers 3: ',urls.match(patternURL),'\n');

let patternURL2 =/https?:\/\/(www.)?\w+.(net|com)/g
console.log('\nQuantifiers 4: ',urls.match(patternURL2),'\n');

let patternURL3 =/(https?:\/\/)?(www.)?\w+.(net|com)/g
console.log('\nQuantifiers 5: ',urls.match(patternURL3),'\n');

// {min,max} idea
let serials = "S100S S3000S S50000S S950000S";
let serialPattern = /S\d{3}S/g

console.log('\nQuantifiers 6: ',serials.match(serialPattern),'\n');

// four or five number
let serialPattern2 = /S\d{4,5}S/g
console.log('\nQuantifiers 7: ',serials.match(serialPattern2),'\n');

// at least four number
let serialPattern3 = /S\d{4,}S/g
console.log('\nQuantifiers 8: ',serials.match(serialPattern3),'\n');

// at most four number
let serialPattern4 = /S\d{0,4}S/g
console.log('\nQuantifiers 9: ',serials.match(serialPattern4),'\n');


// $   => End With Something
// ^   => Start With Something
// ?=  => Followed By Something
// ?!  => Not Followed By Something

let myString ="ingWe Love Programming";
let namesStr = "10samaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

let strPattern1 = /ing$/gi;
let strPattern2 = /^ing/gi;
let strPattern3 = /\d\w{4}(?=z)/gi;
let strPattern4 = /\d\w{4}(?!z)/gi;

console.log(namesStr.match(strPattern4),'\n');

const ahmednayel = "ahmed nayel @ darabee @ qaisy "
console.log(ahmednayel.replaceAll(/@/g,'al'));


// the main difference between: replaceAll, replace that be as"
// replace: once see needed it will out
// replaceAll: will check about all statement not like replace!
