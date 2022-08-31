// Current Day Header
var todaysDate = moment().format('dddd, MMMM Do YYYY')
$("#currentDay").text(todaysDate)


// Save Btn
$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);

    })

    // https://momentjs.com/docs/#/get-set/hour/
    function timeCheck() {
        // Variable for current hour
        var timeNow = moment().hour();

        $(".time-block").each(function () {
            var currHour = parseInt($(this).attr("id"));
            // Adds the future class
            if (currHour > timeNow) {
                $(this).addClass("future");
            // Adds the present class
            } else if (currHour === timeNow) {
                $(this).addClass("present");
            // Adds the past class
            } else {
                $(this).addClass("past");
            }
        })
    };


    // Local storage get item from description
    $("#hora9 .description").val(localStorage.getItem("hora9"));
    $("#hora10 .description").val(localStorage.getItem("hora10"));
    $("#hora11 .description").val(localStorage.getItem("hora11"));
    $("#hora12 .description").val(localStorage.getItem("hora12"));
    $("#hora1 .description").val(localStorage.getItem("hora1"));
    $("#hora2 .description").val(localStorage.getItem("hora2"));
    $("#hora3 .description").val(localStorage.getItem("hora3"));
    $("#hora4 .description").val(localStorage.getItem("hora4"));
    $("#hora5 .description").val(localStorage.getItem("hora5"));

    timeCheck();

})
