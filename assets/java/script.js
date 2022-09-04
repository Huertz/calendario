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
    $("#hora9 .description").val(localStorage.getItem("hora9"));
    $("#hora10 .description").val(localStorage.getItem("hora10"));
    $("#hora11 .description").val(localStorage.getItem("hora11"));
    $("#hora12 .description").val(localStorage.getItem("hora12"));
    $("#hora1 .description").val(localStorage.getItem("hora1"));
    $("#hora2 .description").val(localStorage.getItem("hora2"));
    $("#hora3 .description").val(localStorage.getItem("hora3"));
    $("#hora4 .description").val(localStorage.getItem("hora4"));
    $("#hora5 .description").val(localStorage.getItem("hora5"));

    // TimeCheck 
    function timeCheck() {
        // Variable for current hour
        var timeNow = moment().hour();

        $(".time-block").each(function () {
            var compareTime = parseInt($(this).attr("id").split("hour")[1]);
            // Adds the future class
            if (compareTime < timeNow) {
                $(this).removeClass("present");
                $(this).removeClass("future");
                $(this).addClass("past");
                // Adds the present class
            } else if (compareTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
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
