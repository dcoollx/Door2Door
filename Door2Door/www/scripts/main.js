// main logic
profile = localStorage.getItem('profile');
if (profile == null) {
    //show start up
    location.assign("#/page1/page5");
} else {
    //unpack profile
}
function startTimer() {
    timer = document.getElementById("mainTimer");
    var start = Date.now();
        setInterval(function () {
            var delta = Date.now() - start;
            console.log(Date.now() - start);
            timer.innerHTML = addZero(Math.floor(delta / 1000 / 60 / 60)) + ":" + addZero(new Date(delta).getMinutes()) + ":" + addZero(new Date(delta).getSeconds());
        }, 1000);
}
function addZero(time) {// simple function to add extra zeros for visual correctness

    if (time < 10) {
        return "0" + time;
    } else {
        return time;
    }

}