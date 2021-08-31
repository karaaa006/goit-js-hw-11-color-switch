import data from "../db/data";

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};
let timerID = 0;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getColor = () => {
  const num = randomIntegerFromInterval(0, data.length - 1);
  document.body.style.backgroundColor = data[num];
};

refs.startBtn.addEventListener("click", (e) => {
  e.target.setAttribute("disabled", true);
  timerID = setInterval(getColor, 1000);
});

refs.stopBtn.addEventListener("click", () => {
  refs.startBtn.removeAttribute("disabled");
  clearInterval(timerID);
});
