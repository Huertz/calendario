// Current Day Header
var todaysDate = moment().format('dddd, MMMM Do YYYY')
$("#currentDay").text(todaysDate)

// Save Btn
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Stores into local storage
        localStorage.setItem(time, text);
        $('#announcement').text('Event Stored❗❗❗')
    });

    // Local storage gets item from description
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    // TimeCheck 
    function timeCheck() {
        // Variable for current hour
        var timeNow = moment().hour();

        $(".time-block").each(function () {
            var compareTime = parseInt($(this).attr("id"));
            // Adds the future class 
            if (compareTime < timeNow) {
                $(this).addClass("past");
                // Adds the present class
            } else if (compareTime === timeNow) {
                $(this).removeClass("past");
                $(this).addClass("present");
                // Adds the past class
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    }

    timeCheck();

});
