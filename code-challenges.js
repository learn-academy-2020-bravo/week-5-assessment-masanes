// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

var secretCodeWord1 = "lakadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

//check each character and convert their value to a number if they are either a,e,i,o

const convertCode = (str) => {
 let splitString = str.split("");
 
 let letters = splitString.map(val => { 
     if (val.includes("a")) {
         val = 4
     } 
     else if (val.includes("e")) {
         val = 3
     } 
     else if(val.includes("i")) {
         val = 1
     } 
     else if (val.includes("o")) {
         val = 0
     }
     return val
    })
    return letters.join("")
} 
 
// console.log(convertCode(secretCodeWord1))
// console.log(convertCode(secretCodeWord2))


// --------------------2) Create a function that takes in an array and returns all the words that have the letter a in them.



var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

const letterA = (array) => {
return array.map(val => val).filter(letter => letter.includes("a") || letter.includes("A"))
}

console.log(letterA(arrayOfWords))


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]

var hand4 = [2, 1, 2, 1, 2]
// Expected output: false

//check object if unique
//add to count each time prexisting value is iterated over
const fullhouse = (array) => {
let newObject = {};
let result = null;
let count = 0;
for (let i=0; i<array.length;i++) {
    if (newObject[array[i]] === undefined) {
        newObject[array[i]] = 1
    }
    else {
        newObject[array[i]] += 1
    }
    }
    return newObject
}

let object1 = fullhouse(hand1)
let object2 = fullhouse(hand2)
let object3 = fullhouse(hand3)
let object4 = fullhouse(hand4)


//checks if the array value is either 2 or 3 || 3 and 2 since you need a pair to win and 3 of the same other number 
const winningHand = (obj) => {
    let keys = Object.values(obj)
    console.log(keys)
    let result = "";
     if (keys.length > 2) {return "not a winning hand"}
     if ((keys[0] === 2 || keys[0] === 3) && (keys[1] === 2 || keys[1] === 3)) {
         result = "full house"
     }
     else {
         result = "not a winning hand" 
        }
        return result;
    }
    

console.log(winningHand(object1))
console.log(winningHand(object2))
console.log(winningHand(object3))
console.log(winningHand(object4))
// console.log(fullhouse(hand1))
//  console.log(fullhouse(hand2))
//  console.log(fullhouse(hand3))

////gawdd damn this problem took me like 3 hours to solve! was able to solve it on my own thooo