let video = document.getElementById('myVideo');
function videoFunction() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
videoFunction ();