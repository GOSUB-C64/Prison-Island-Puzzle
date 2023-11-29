// script to change colour of div using an array to cycle colours with an addEventListener

let randomColourSequence = []
generateRandomColourSequence()
console.log('Actual array of Colours', randomColourSequence)

// define the colour sequence array to guess//
function generateRandomColourSequence() {
	let colourMap = ['Green', 'Blue', 'Orange', 'Purple']
	for (i = 0; i < 4; i++) {
		//pick a random number between (0-3) and add it to the array
		let pickedColour = Math.floor(Math.random() * 4)
		randomColourSequence.push(colourMap[pickedColour])
	}
	return randomColourSequence
}

myColArr = ['white', 'Green', 'Blue', 'Orange', 'Purple']

// Get the references to the div elements
const circle1 = document.getElementById('but1')
const circle2 = document.getElementById('but2')
const circle3 = document.getElementById('but3')
const circle4 = document.getElementById('but4')

// Set an initial color
let circle1_currentColour = 0
let circle2_currentColour = 0
let circle3_currentColour = 0
let circle4_currentColour = 0

const indicator0 = document.getElementById('i0')
const indicator1 = document.getElementById('i1')
const indicator2 = document.getElementById('i2')
const indicator3 = document.getElementById('i3')

// Add event listener to change the background color on a click
circle1.addEventListener('click', function () {
	console.log('in the event listener')
	// Increment the current color index
	circle1_currentColour++
	console.log(circle1_currentColour)
	// If we reached the end of the array, restart from the beginning
	if (circle1_currentColour === myColArr.length) {
		circle1_currentColour = 1
	}

	// Change the background color
	circle1.style.backgroundColor = myColArr[circle1_currentColour]
})

// Add event listener to change the background color on a click
circle2.addEventListener('click', function () {
	console.log('in the event listener')
	// Increment the current color index
	circle2_currentColour++
	console.log(circle2_currentColour)
	// If we reached the end of the array, restart from the beginning
	if (circle2_currentColour === myColArr.length) {
		circle2_currentColour = 1
	}

	// Change the background color
	circle2.style.backgroundColor = myColArr[circle2_currentColour]
})

// Add event listener to change the background color on a click
circle3.addEventListener('click', function () {
	console.log('in the event listener')
	// Increment the current color index
	circle3_currentColour++
	console.log(circle3_currentColour)
	// If we reached the end of the array, restart from the beginning
	if (circle3_currentColour === myColArr.length) {
		circle3_currentColour = 1
	}

	// Change the background color
	circle3.style.backgroundColor = myColArr[circle3_currentColour]
})

// Add event listener to change the background color on a click
circle4.addEventListener('click', function () {
	console.log('in the event listener')
	// Increment the current color index
	circle4_currentColour++
	console.log(circle4_currentColour)
	// If we reached the end of the array, restart from the beginning
	if (circle4_currentColour === myColArr.length) {
		circle4_currentColour = 1
	}

	// Change the background color
	circle4.style.backgroundColor = myColArr[circle4_currentColour]
})

const checkBtn = document.getElementById('check')
var indexDiv = 0
var rowNum = 1 // defined to make it easier to record the guesses by copying them into the next row!
var currentRow
var newColArr = [] // this will hold the guesses

var correct0 = false
var correct1 = false
var correct2 = false
var correct3 = false

var gameWon = false


if (!gameWon) {

	
	// take users guess and place it in the guess attempts list from bottom to top then check users' guessed colour combo against pre-chosen random colour sequence and ...
	// display if any were correct, almost correct or wrong.
	checkBtn.addEventListener('click', checkAnswer)

	function checkAnswer() {
		// copy the current guess-indexes into a new array
		const checkArr = [
			circle1_currentColour,
			circle2_currentColour,
			circle3_currentColour,
			circle4_currentColour,
		]


		// make a new array by iterating through checkArr and correspond each elements' value to the colArray so we have the names of the colours to compare later with the ...
		// ACTUAL colour combo(array) to guess correctly
		for (let i = 0; i < checkArr.length; i++) {
			currentRow = document
				.getElementById(rowNum)
				.getElementsByTagName('li')[i]
			// new array!!
			newColArr[i] = myColArr[checkArr[i]] // the magic is in this line!!

			currentRow.style.backgroundColor = newColArr[i]
		}
		circle1.style.backgroundColor = 'white'
		circle2.style.backgroundColor = 'white'
		circle3.style.backgroundColor = 'white'
		circle4.style.backgroundColor = 'white'

		// get next row ready to display next guess
		rowNum++

		console.log('Checked!')
		console.log(checkArr)
		console.log('newColArr =', newColArr)

		// check key //
		// green = correct colour guessed AND correct placing //
		// yellow = correct colour BUT in the wrong place //
		// red = wrong colour! //

		// check user's guess with randomColourSequence //

		// check circle1 guess with 1st Colour //
		if (!correct0) {
			if (newColArr[0] === randomColourSequence[0]) {
				console.log('green')
				indicator0.style.backgroundColor = 'green'
				correct0 = true
				// if not true then check circle1 guess with 2nd Colour OR 3rd Colour OR 4th Colour //
			} else if (
				newColArr[0] === randomColourSequence[1] ||
				newColArr[0] === randomColourSequence[2] ||
				newColArr[0] === randomColourSequence[3]
			) {
				console.log('yellow')
				indicator0.style.backgroundColor = 'yellow'

				// if still not true then its not in the array and doesn't exist!!
			} else {
				console.log('red')
				indicator0.style.backgroundColor = 'red'
			}
		}

		// check circle2 guess with 2nd Colour //
		if (!correct1) {
			if (newColArr[1] === randomColourSequence[1]) {
				console.log('green')
				indicator1.style.backgroundColor = 'green'
				correct1 = true
				// if not true then check circle2 guess with 1st Colour OR 3rd Colour OR 4th Colour //
			} else if (
				newColArr[1] === randomColourSequence[0] ||
				newColArr[1] === randomColourSequence[2] ||
				newColArr[1] === randomColourSequence[3]
			) {
				console.log('yellow')
				indicator1.style.backgroundColor = 'yellow'

				// if still not true then its not in the array and doesn't exist!!
			} else {
				console.log('red')
				indicator1.style.backgroundColor = 'red'
			}
		}

		// check circle3 guess with 3rd Colour //
		if (!correct2) {
			if (newColArr[2] === randomColourSequence[2]) {
				console.log('green')
				indicator2.style.backgroundColor = 'green'
				correct2 = true
				// if not true then check circle3 guess with 1st Colour OR 2nd Colour OR 4th Colour //
			} else if (
				newColArr[2] === randomColourSequence[0] ||
				newColArr[2] === randomColourSequence[1] ||
				newColArr[1] === randomColourSequence[3]
			) {
				console.log('yellow')
				indicator2.style.backgroundColor = 'yellow'

				// if still not true then its not in the array and doesn't exist!!
			} else {
				console.log('red')
				indicator2.style.backgroundColor = 'red'
			}
		}

		// check circle4 guess with 4th Colour //
		if (!correct3) {
			if (newColArr[3] === randomColourSequence[3]) {
				console.log('green')
				indicator3.style.backgroundColor = 'green'
				correct3 = true
				// if not true then check circle4 guess with 1st Colour OR 2nd Colour OR 3rd Colour //
			} else if (
				newColArr[3] === randomColourSequence[0] ||
				newColArr[3] === randomColourSequence[1] ||
				newColArr[1] === randomColourSequence[2]
			) {
				console.log('yellow')
				indicator3.style.backgroundColor = 'yellow'
				// if still not true then its not in the array and doesn't exist!!
			} else {
				console.log('red')
				indicator3.style.backgroundColor = 'red'
			}
		}

		if (correct0 && correct1 && correct2 && correct3) {
			console.log('You Win!')
			alert('You Win!')
			gameWon = true
		}
	}
}
