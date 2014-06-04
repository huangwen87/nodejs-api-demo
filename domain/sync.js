/**
 * 同步情况下，可以很好的捕捉到runtime异常
 */

 
function sync_error() {
    var r = Math.random() * 10;
    console.log("random num is " + r);
    if (r > 5) {
        throw new Error("Error: random num" + r + " > 5");
    }
}

setInterval(function () {
    try {
        sync_error();
    } catch (err) {
        console.log(err);
    }
}, 1000)