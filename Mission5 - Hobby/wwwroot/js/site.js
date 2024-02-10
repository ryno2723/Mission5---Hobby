// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//function that takes user input and multiplies it by the hourly rate
$("#calcTotal").click(function () {
    //declare variable
    var hours = parseInt($("#hours").val());
    var hourlyRate = parseFloat($("#hourlyRate").val());

    var total = hours * hourlyRate
    //calculation
    $("#calcOutput").html("Total: $" + total.toFixed(2));
});