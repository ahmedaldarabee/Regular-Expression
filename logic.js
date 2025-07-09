console.log("Regular Expression or regex | Email - IP - Phone - URL ");
console.log("Check about complecated data\n");

let username = "ahmed nayel mohammad Ahmed al darabee";
let regex = /Ahmeds/ig

// match function in string
    // that return array of matched element +
    // index of needed word and main string +
    // null if there is no result!
    
// modifiers | Flags:
    // Note, you can working with difference flage at the same time 
    // i [ Case-Insensitive Searching ],
    // g [ Global around all statement ],
    // m [ Multi-line ], when you have muliple line needed to search on it
    

console.log(username.match(regex));
