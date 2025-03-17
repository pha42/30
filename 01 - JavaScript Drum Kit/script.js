console.log("test");
const baseVolume = 0.1;
document.addEventListener("keydown", function (e) {
  console.log(e.code);
  const audio = this.querySelector(`audio[data-key=${e.code}]`);
  const keyDiv = this.querySelector(`.key[data-key="${e.code}"]`);
  if (audio) {
    console.log(keyDiv);
    keyDiv.classList.add("playing");
    audio.volume = baseVolume;
    audio.currentTime = 0;
    audio.play();
  }
  // if(!audio) return;
  // console.log(audio);
  // audio.volume = baseVolume;
  // audio.play();
});
