var count = 0;
// document.getElementById("counter") = cElem;

function counter() {
    document.getElementById("counter").innerHTML = count;
    count = count + 1;
    setTimeout(counter, 1000)
}

counter();
