self.onmessage = function (message) {
  // Using onmessage to receive the message in the worker.js
  let sum = 0;
  for (let i = 0; i < 10000000; i++) sum += i;
  self.postMessage(sum); // Using postMessage to send the answer back to the main.js
};
