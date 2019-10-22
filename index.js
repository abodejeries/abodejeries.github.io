$(document).ready(function () {
    // Hide all the content when the page loads
    $('#content-1').hide();
    $('#content-2').hide();
    $('#content-3').hide();
    $('#content-4').hide();

    // Functions to toggle between hide and show methods
    $('#headline-1').click(1000, function () {
        $('#content-1').toggle();
    });

    $('#headline-2').click(1000, function () {
        $('#content-2').toggle();
    });

    $('#headline-3').click(1000, function () {
        $('#content-3').toggle();
    });

    $('#headline-4').click(1000, function () {
        $('#content-4').toggle();
    });

    // Invoking the Canvas method to draw on the canvas
    canvas();

});

function canvas() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.strokeStyle = "green";
    ctx.textAlign = "center";
    ctx.font = "30px Arial";
    ctx.strokeText("End of News!", 110, 50);

}
