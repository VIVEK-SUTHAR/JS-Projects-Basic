var player = document.getElementById("media");
// player.style.display = "hidden";
var recorder;
function startRecording() {
  navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
    recorder = new MediaRecorder(stream);
    recorder.start();
    let audiochunks = [];
    recorder.addEventListener("dataavailable", (e) => {
      audiochunks.push(e.data);
      console.log(audiochunks);
    });

    recorder.addEventListener("stop", () => {
      let audioblob = new Blob(audiochunks);
      let audioURL = URL.createObjectURL(audioblob);
      player.style.display = "block";
      const audio = new Audio(audioURL);
      player.src = audio;
      audio.play();
    });
  });
}

function stop() {
  recorder.stop();
}
