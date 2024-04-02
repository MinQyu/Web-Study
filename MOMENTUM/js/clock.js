const clock = document.querySelector("h2#clock");


function sayHello() {
    console.log("hello");
}
function setClock() {
    const date = new Date();
    clock.innerHTML = `${String(date.getHours()).padStart(2,"0")}:${String(date.getMinutes()).padStart(2,"0")}:${String(date.getSeconds()).padStart(2,"0")}`;
}

setClock();
setInterval(setClock, 1000);
