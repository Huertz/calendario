// Current Day Header
var todaysDate = moment().format('dddd, MMMM Do YYYY')
$("#currentDay").text(todaysDate)


// https://momentjs.com/docs/#/get-set/hour/
function timeCheck() {
    // Variable for current
    var timeNow = moment().hour();

    $(".time-block").each(function () {
        var currHour = parseInt($(this).attr("id"));

        if (currHour > timeNow) {
            $(this).addClass("future");
        } else if (currHour === timeNow) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

timeCheck();