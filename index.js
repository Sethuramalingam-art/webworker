const worker = new Worker("worker.js");

const element = document.getElementById("btn1");

element.addEventListener("click", myfunction);

function myfunction() {
  console.log("click function");
  worker.postMessage("Hello Worker");
}
