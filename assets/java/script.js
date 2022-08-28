// var currentDayEl = $("#currentDay");
// Function Display Current Time 
// function currentTime() {
//     var rightNow = moment().format("dddd, MMMM Do YYYY");
//     currentDayEl.text(rightNow);
// }


// Current Day
var rightNow = moment().format('dddd, MMMM Do YYYY')
$("#currentDay").text(rightNow)

// If statement for colors 
var today = new Date().getHours();
if (today >= 7 && today <= 19) {
   document.$currentColorEl.style.background = "#77dd77";
if (today === today)
    document.$currentColorEl.style.background = '#ff6961'
} else {
    document.$currentColorEl.style.background = "Blue";
}