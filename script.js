// Set the date we're counting down to
var countDownDate = new Date("Mar 8, 2025 13:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    if (document.getElementById("countdown")) {
        document.getElementById("countdown").innerHTML = days + " days, " + hours + " hours,</br> "
            + minutes + " minutes, " + seconds + " seconds";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "TODAY'S THE DAY!";
        }
    }

}, 1000);

if (document.getElementById("btn_mob")) {
    document.getElementById("btn_mob").onclick = function () {
        // location.href = "file:///Users/charliebignell/Desktop/code/wedding/faq.html";
        location.href = "https://www.charlieandfliss.co.uk/faq";

    };
    document.getElementById("btn_wide").onclick = function () {
        // location.href = "file:///Users/charliebignell/Desktop/code/wedding/faq.html";
        location.href = "https://www.charlieandfliss.co.uk/faq";

    };

}
if (document.getElementById("btn_mob_faq")) {
    document.getElementById("btn_mob_faq").onclick = function () {
        // location.href = "file:///Users/charliebignell/Desktop/code/wedding/index.html";
        location.href = "https://www.charlieandfliss.co.uk/";

    };

    document.getElementById("btn_wide_faq").onclick = function () {
        // location.href = "file:///Users/charliebignell/Desktop/code/wedding/index.html";
        location.href = "https://www.charlieandfliss.co.uk/";
    };
}
