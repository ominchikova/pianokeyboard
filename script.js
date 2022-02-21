const playSound = (event) => {
  const button = document.querySelector(`button[data-key="${event.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  if (!audio) return;
  button.classList.add("transform");
  audio.currentTime = 0;
  audio.play();
  console.log("ok");
};

window.addEventListener("keydown", playSound);

const removeTransition = (event) => {
  console.log(event);
  if (event.propertyName !== "transform") return;
  event.target.classList.remove("transform");
};
const keys = document.querySelectorAll("keys__buttonstyle");
keys.forEach((el) => el.addEventListener("transitionend", removeTransition));
