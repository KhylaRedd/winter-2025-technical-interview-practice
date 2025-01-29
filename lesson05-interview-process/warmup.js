function reverseString(str) {
    //loop through str 
    //return str in rvs order
    //boobi => iboob
    let strr = str.split('').reverse().join('')
    return strr;
}

console.log(reverseString("Hello, World!"));
// Expected Output: "!dlroW ,olleH"

function capitalizeWords(str) {
    //capitalize the first char at index [o] on 
    //use a for each every char
    //bob, dole => Bob, Dole
    let proper = str.split(' ').map( ele => ele.charAt())
        
    });
    console.log(proper)
}

console.log(capitalizeWords("hello, world!"));
// Expected Output: 'Hello, World!'

console.log(capitalizeWords("javascript is awesome"));
// Expected Output: 'Javascript Is Awesome'

function countVowels(str) {}

console.log(countVowels("hello"));
// Expected Output: 2

console.log(countVowels("programming"));
// Expected Output: 3
