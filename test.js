"use stric"


// functions 

// function for getting 12 hr time 
const get12HoursTime = (timeHours) => {

	//if time is greater then 12. i.e. 13+ 
	if (timeHours > 12) {
		return timeHours - 12;
	} else {
		return timeHours;
	}
}

// function for determinig AM/PM 
const getAmPm = (timeHours) => {
	if (timeHours >= 12){
		return "PM";
	} else {
		return "AM";
	}
}

// blinking dots 
const getBlinkingDots = (timeSeconds) => {
	if (timeSeconds % 2 === 0){
		return ":";
	} else {
		return "";
	}
}

// call all of them 
const clock = () => {
	time = new Date();
	timeHours = time.getHours();
	timeHours12 = get12HoursTime(timeHours);		// refer to function
	timeMinutes = time.getMinutes();
	timeSeconds = time.getSeconds();
	amPM = getAmPm(timeHours);
	blinkingDots = getBlinkingDots(timeSeconds);
	clockTime = timeHours12 + blinkingDots + timeMinutes + blinkingDots + timeSeconds;
	console.log(clockTime);
}
// end of functions 

// start of calling  

let time = new Date();
let timeHours = time.getHours();
let timeHours12 = get12HoursTime(timeHours);		// refer to function
let timeMinutes = time.getMinutes();
let timeSeconds = time.getSeconds();
let amPM = getAmPm(timeHours);
let blinkingDots = getBlinkingDots(timeSeconds);


// get all called 

  
setInterval(clock, 1000);
