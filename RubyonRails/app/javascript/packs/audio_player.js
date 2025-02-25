// # AUDIO PLAYER CONTROLS
const audioPlayer = document.getElementById('audioPlayer');
const startAudioBtn = document.getElementById('startAudioBtn');
const stopAudioBtn = document.getElementById('stopAudioBtn');
const audioTimeContainer = document.getElementById('audioTimeContainer');

// Enables the audio player button if it is loaded
enableCustomControls();

function enableCustomControls() {
  if (audioPlayer.readyState >= audioPlayer.HAVE_FUTURE_DATA) {
    startAudioBtn.removeAttribute('disabled');
    updateTime();
  } else {
    console.log('i think the file still has not loaded.')

    setTimeout(() => {
      enableCustomControls();
    }, 100);
  }
}
// starts audio file
startAudioBtn.addEventListener('click', function () {
  audioPlayer.play();
  stopAudioBtn.removeAttribute('disabled');
  startAudioBtn.setAttribute('disabled', 'disabled');
});

// stops audio file.
// creates a popup, asking for user confirmation -
// if the user chooses to stop the audio file, restart the page
// because the test is invalidated
stopAudioBtn.addEventListener('click', function () {
  const CONF_TEXT = "Stopping the audio file will invalidate the test.\nThe page will reload.\nPress \"OK\" to end test.\nPress \"CANCEL\" to continue."
  if (window.confirm(CONF_TEXT)) {
    window.location.reload();
  }
})

// reloads page if audio file ends before completion.
audioPlayer.addEventListener('pause', function () {
  if (!audioPlayer.ended) {
    window.alert('Paused before completion. Test invalidated.\nReloading page.');
    window.location.reload();
  }
});

//convert time to min:sec format
function timeConvert(time) {
  const minutes = Math.floor(time / 60)
  let seconds = Math.floor(time % 60)
  if (seconds < 10) seconds = `0${seconds}`
  return `${minutes}:${seconds}`
}

// capture audio time 
function updateTime() {
  let currentTime = timeConvert(audioPlayer.currentTime)
  let duration = timeConvert(audioPlayer.duration)
  audioTimeContainer.innerText = `${currentTime} / ${duration}`
}

//time needs to be updated when the audio progresses
audioPlayer.addEventListener('canplay', updateTime)
audioPlayer.addEventListener('timeupdate', updateTime)