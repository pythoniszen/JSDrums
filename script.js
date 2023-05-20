//Plays the audio which corresponds to the key pressed
window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key="${e.code}"]`);
  const key = document.querySelector(`.key[data-key="${e.code}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.toggle('playing');
  
});

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

//Removes the class playing when the transition ends
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

//Plays the audio which corresponds to the div clicked
keys.forEach(function(key) {
  key.addEventListener('click', function(e) {

    const clickedDiv = e.target;
    const clickedDivClass = clickedDiv.classList[1];

    if (clickedDivClass === 'snare') {
      const audio = document.querySelector(`audio[data-key="KeyA"]`);
      const key = document.querySelector(`.key[data-key="KeyA"]`);
      playAudio(audio, key);
    } else if (clickedDivClass === 'hihat') {
      const audio = document.querySelector(`audio[data-key="KeyS"]`);
      const key = document.querySelector(`.key[data-key="KeyS"]`);
      playAudio(audio, key);
    } else if (clickedDivClass === 'kick') {
      const audio = document.querySelector(`audio[data-key="KeyD"]`);
      const key = document.querySelector(`.key[data-key="KeyD"]`);
      playAudio(audio, key);
    } else if (clickedDivClass === 'openhat') {
      const audio = document.querySelector(`audio[data-key="KeyF"]`);
      const key = document.querySelector(`.key[data-key="KeyF"]`);
      playAudio(audio, key);
    } else if (clickedDivClass === 'perc') {
      const audio = document.querySelector(`audio[data-key="KeyG"]`);
      const key = document.querySelector(`.key[data-key="KeyG"]`);
      playAudio(audio, key);
    } else if (clickedDivClass === 'tom') {
      const audio = document.querySelector(`audio[data-key="KeyH"]`);
      const key = document.querySelector(`.key[data-key="KeyH"]`);
      playAudio(audio, key);
    } else if (clickedDivClass === 'shaker') {
      const audio = document.querySelector(`audio[data-key="KeyJ"]`);
      const key = document.querySelector(`.key[data-key="KeyJ"]`);
      playAudio(audio, key);
    } else if (clickedDivClass === 'perc2') {
      const audio = document.querySelector(`audio[data-key="KeyK"]`);
      const key = document.querySelector(`.key[data-key="KeyK"]`);
      playAudio(audio, key);
    } else if (clickedDivClass === 'perc3') {
      const audio = document.querySelector(`audio[data-key="KeyL"]`);
      const key = document.querySelector(`.key[data-key="KeyL"]`);
      playAudio(audio, key);
    }
    
    //Checks if the audio is playing and removes the class playing
    if (isPlaying(audio)) {
      key.classList.remove('playing');
    }

  });
});

//Checks if the audio is playing
function isPlaying(audio) {
  if (audio && !audio.paused) {
    return true;
  } else {
    return false;
  }
}

function playAudio(audio, key) {
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}
