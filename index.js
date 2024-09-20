const clear_function = () => console.clear();
Object.defineProperty(globalThis, "clear", { get: clear_function });

const $ = (el) => document.querySelector(el);
const $$ = (el) => document.querySelectorAll(el);

const beatsContainer = $("#beats");
const lengthbeatsContainer = beatsContainer.children.length;
const buttonStart = $("#start-timer");
const buttonStop = $("#stop-timer");

const audio = new Audio('./src/audio/metronome.mp3');

let intervalId;
let index = 0;

const createBeat = function () {
  const intervalId = setInterval(() => {    
    if (index === lengthbeatsContainer) {
      index = 0;
    }
    removeClass();
    beatsContainer.children[index].classList.add("press");    
    audio.play();
    index++;
  }, 1000);
  return intervalId;
};

buttonStart.addEventListener("click", () => {  
  console.log("Start...")
  if(intervalId) return;
  intervalId = createBeat();
});
buttonStop.addEventListener("click", () => {
  console.log("Stop...")
  clearInterval(intervalId);
  index = 0;
  removeClass();
  intervalId = null;
});

function removeClass() {
  Array.from(beatsContainer.children).forEach((item) => {
    if (item.classList.contains("press")) {
      item.classList.remove("press");
    }
  });
}


