const playSound = (event) => {
  const button = document.querySelector(`button[data-key="${event.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);

  if (!audio) return;
  button.classList.add("transform");
  audio.currentTime = 0;
  audio.play();
};

window.addEventListener("keydown", playSound);

const removeTransition = (event) => {
  if (event.propertyName !== "transform") return;
  event.target.classList.remove("transform");
};
const keys = document.querySelectorAll(".keys__buttonstyle");
keys.forEach((el) => el.addEventListener("transitionend", removeTransition));

const playClickSound = (event) => {
  const audio = document.querySelector(`audio[data-key ="${event.target.getAttribute("data-key")}"]`);

  if (!audio) return;
  event.target.classList.add("transform");
  audio.currentTime = 0;
  audio.play();
};

keys.forEach((el) => el.addEventListener("click", playClickSound));
