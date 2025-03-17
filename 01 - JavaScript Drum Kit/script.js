console.log("test");
const baseVolume = 0.1;
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
document.addEventListener("keydown", async function (e) {
  console.log(e.code);
  const audio = this.querySelector(`audio[data-key=${e.code}]`);
  const keyDiv = this.querySelector(`.key[data-key="${e.code}"]`);
 if (audio) {
    console.log(keyDiv);
    audio.volume = baseVolume;
    audio.currentTime = 0;
    audio.play();
    keyDiv.classList.add("playing");
    await wait(100);
    keyDiv.classList.remove("playing");
  }
  // if(!audio) return;
  // console.log(audio);
  // audio.volume = baseVolume;
  // audio.play();
});
document.addEventListener("DOMContentLoaded", async function (e) {
  const titleArray = ["🎶", "🎵", "🎷", "🎺", "🥁", "🪕", "🎼"];
  const titleElement = document.getElementById("title");
  let titleIndex = 0;
  function changeTitle() {
  titleElement.textContent = titleArray[titleIndex].repeat(100);
  titleIndex = (titleIndex + 1) % titleArray.length;
  }
  setInterval(changeTitle, 1000);
});
