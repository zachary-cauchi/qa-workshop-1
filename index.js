/////////////////////////////
// index.js
/////////////////////////////
// This is our entry-point,
// courtesy of NodeJS
/////////////////////////////

// My primitive variables
let myValue = 19
let otherValue = 4

let isTrue = true
let isFalse = false

// My strings
let message = 'Hello from a string'
let formattedMessage = '\tI like formatted messages.\n\tEspecially new lines'
let substituted = `This is an example of substitution. My number is ${otherValue}`

// My arrays
let arrayOfNums = [ 1, 2, 5, 16, 34, 69, 72, 101 ]

let arrayOfStrs = [ 'This', 'is', 'pistachio' ]

let trailMix = [
    15,
    false,
    'Hello world!',
    [1, 2, '3 - the middle man', 4, 5]
]

// My objects

let macbook = {
    price: '$$$$',
    mass: 1.25,
    volume: [13, 50, 25],
    os: {
        name: 'OS X',
        version: 'The bad one'
    }
}

let input = process.stdin


let resAdd = myValue + otherValue

console.log(resAdd)                 // Add
console.log(myValue * otherValue)   // Multiply
console.log(myValue - otherValue)   // Subtract
console.log(myValue / otherValue)   // Divide
console.log(myValue % otherValue)   // Modulus(divide then keep remainder)

console.log(message)
console.log(formattedMessage)
console.log('The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues.\nThe 20 meter pacer test will begin in 30 seconds.\nLine up at the start.\nThe running speed starts slowly, but gets faster each minute after you hear this signal.[beep]\nA single lap should be completed each time you hear this sound. [ding]\nRemember to run in a straight line, and run as long as possible.\nThe second time you fail to complete a lap before the sound, your test is over.\nThe test will begin on the word start. On your mark, get ready, start.')

console.log('\n\n////Conditional checks////\n\n')

// Checking if one value is greater than the other
if (resAdd > myValue) {
    console.log('resAdd is greater than ' + myValue)
}

if (isTrue) {
    console.log('I got logged, so I must be true')
}

if (isTrue !== isFalse) {
    console.log('True is not equal to false!')
}

// Bracket-enclosed statements are evaluated first.
// Their result is then used as output to the remaining evaluations.
if ((2 + 2) === 3) { console.log('*chuckles* I\'m a Math-man') }

console.log('\n')

// For loops
// Conditional iteration
for (let i = 0; i < 15; i++) {
    console.log(`I'm counting up. I'm at ${i}`)
}

console.log('\n')

// Collection iteration
for (let elm of arrayOfStrs) {
    console.log(elm)
}

console.log('\n')

// Printing complex objects
console.dir(trailMix)
console.log('\n')
console.dir(macbook)
console.log('\n')
console.log(multiply)
console.log(multiply(2, 2))
console.log('\n')

// We're defining a function which we can use 
function multiply (val1, val2) {
    let returnValue = val1 * val2
    return returnValue
}

// Let's add a new function to our object
macbook.chuhching = function () {
    
    // we are inside the macbook object, meaning we can use it's own variables/properties

    return `♪ Chuh-ching, chuh-ching, I'm worth ${this.price} and much more! ♪`

}

// Let's set up a promised variable that will be set 5 seconds after we call it
let promisedAmount = delayedResponse(5000)

// Check on the promise
setTimeout(function () {
    console.log(promisedAmount)
}, 2000)

// Check back on the promise
setTimeout(function () {
    console.log(promisedAmount)
}, 6500)

// By calling this method, we can see this in action for ourselves.
console.log( macbook.chuhching() )

// Setting an event listener for stdin 'data' events
// This will be called every time we get new input data
input.on('data', function (data) {

    // Getting our data and removing white-space
    let userInput = data.trim()

    // User input exit.
    if(userInput === 'exit') {
        // Program exit.
        console.log("User input complete, program exit.");
        process.exit();
    } else {
        // Print user input in console.
        console.log(`User Input Data : ${data}`);
    }
});

/**
 * We'll create a new promise that returns a value a few seconds later.
 *
 * @param {*} time How many seconds to wait before resolving.
 * @returns
 */
function delayedResponse(time) {
    // We are returning a newly created promise
    return new Promise(function (resolve) {

        // We are going to wait for the amount of time specified in 'time'
        setTimeout(function() {
            console.log(`Sorry I'm ${time / 1000} seconds late.`)

            // Now, let's resolve this promise with a returned value of 15
            resolve(15)
        }, time)
    }).then(function (returned) {
        // This function is run when the promise is resolved
        console.log(`Then I was returned ${returned}`)
        return returned
    })
}
