// script to change colour of div using an array to cycle colours with an addEventListener

const checkBtn = document.getElementById('check')

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
	console.log("in the event listener")
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

// const row1 = document.getElementById('row1')

// checkBtn.addEventListener('click', checkAnswer)

// function checkAnswer() {
// 	const checkArr = [index1, index2, index3, index4]
// 	console.log('Checked!')
// 	console.log(checkArr)
// }

// pick a random number between (0-3)
// let pickedCol = Math.floor(Math.random() * 4)

// console.log(generateColourSequenceArray);

// // define what the colour sequence is //
// function generateColourSequenceArray(arr) {
// 	let nextColour;
// 	let colourMap = ['Green', 'Blue', 'Orange', 'Purple'];
// 	let i = 0;
// 	let colArr = [];
// 	while (colArr.length < 4) {
// 		nextColour = arr[i];
// 		colArr.push(colourMap[nextColour]);
// 		i++;
// 	}
// 	return colArr;
// }
