"use strict";
let second = 0;
let time = [0, 0, 0];
let displayTime = [0, 0, 0];
setInterval(() => {
  /* time.forEach((element) => { */

  //enter in extraZero array the flag in each element to determine if the element is greater or less than 10
  for (let i = 0; i < time.length; i++) {
    if (time[i] < 10) {
      //add a 0
      displayTime[i] = `0${time[i]}`;
    } else {
      //don't add a 0
      displayTime[i] = time[i].toString(10);
    }
  }
  /* console.log(`${displayTime[0]}:${displayTime[1]}:${displayTime[2]}`); */
  document.getElementById(
    "time"
  ).textContent = `${displayTime[0]}:${displayTime[1]}:${displayTime[2]}`;

  /* console.log(...time); */
  let timeTick = false;

  //if the second reaches 59
  if (time[2] == 59) {
    //increase min by 1
    time[1]++;
    //reset sec to -1
    time[2] = -1;
  }

  //if the minute reaches 60
  if (time[1] == 60) {
    //set timeTick to true so that the min increments in the loop
    timeTick = true;
    //increase hr by 1
    time[0]++;
    //reset min to -1
    time[1] = -1;
    //reset sec to -1
    time[2] = -1;
  }

  //if the hour reaches 24
  if (time[0] == 24) {
    timeTick = true;
    //reset all
    time[0] = 0;
    time[1] = -1;
    time[2] = -1;
  }

  time[2]++;
  //increment the min only if the sec reaches 60
  if (timeTick == true) {
    time[1]++;
    timeTick = false;
  }
}, 10);
