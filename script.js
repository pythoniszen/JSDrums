//Plays the audio which corresponds to the key pressed
window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key="${e.code}"]`);
  const key = document.querySelector(`.key[data-key="${e.code}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');

  window.addEventListener('keyup', function(e) {
    audio.pause();
    const key = document.querySelector(`.key[data-key = "${e.code}"]`);
    key.classList.remove('playing');
  });
  
});

//Plays the audio which corresponds to the div clicked
const keys = document.querySelectorAll('.key');

keys.forEach(function(key) {
  key.addEventListener('click', function(e) {

    const clickedDiv = e.target;
    const clickedDivClass = clickedDiv.classList[1];

    if (clickedDivClass === 'snare') {
      const audio = document.querySelector(`audio[data-key="KeyA"]`);
      audio.currentTime = 0;
      audio.play();
    }

  });
});


function isPlaying(audio) {
  if (audio && !audio.paused) {
    return true;
  } else {
    return false;
  }
}
