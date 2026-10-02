let btn = document.querySelector(".btn");
let body = document.querySelector("body");
let h1 = document.querySelector("h1");
let p = document.createElement("h2");
var i = 0;
btn.addEventListener("click", function () {
  //   alert("Button clicked!");
  if (i === 0) {
    btn.innerText = "Clicked!";
    document.body.style.backgroundColor = "#FFFAD3";
    h1.innerText = "HELLO WORLD!";
    p.innerText="I am AYUSH";
    body.appendChild(p);
    i = 1;
  } else {
    btn.innerText = "Click me";
    h1.innerText = "Welcome to mysite";
    document.body.style.backgroundColor = "#FFB1B1";
    body.removeChild(p);
    i = 0;
  }
});
