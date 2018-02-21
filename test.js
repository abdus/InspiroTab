"use stric"


// functions 

// function for getting 12 hr time 
const get12HoursTime = (timeHours) => {

	//if time is greater then 12. i.e. 13+ 
	if (timeHours > 12) {
		let time0 = timeHours - 12;
		if (time0 < 10) {
			return "0" + time0;
		} else {
			return time0;
		}
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

// for first time calling without any delay. (if removed, time will be displayed with a delay of 1 sec)
let time = new Date();
let timeHours = time.getHours();
let timeHours12 = get12HoursTime(timeHours);		// refer to function
let timeMinutes = time.getMinutes();
let timeSeconds = time.getSeconds();
let amPM = getAmPm(timeHours);
let blinkingDots = getBlinkingDots(timeSeconds);


// get all called 

  
setInterval(clock, 1000);
