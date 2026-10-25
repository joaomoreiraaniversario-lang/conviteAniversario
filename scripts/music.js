const backgroundVideo = document.querySelector(".video-background video");
const audioButton = document.querySelector(".music-button");
const audioEvents = ["pointerdown", "keydown"];
let audioEnabled = false;
let audioStartPending = false;

async function playVideoMuted() {
  backgroundVideo.muted = true;

  try {
    await backgroundVideo.play();
  } catch (error) {
    console.error("Não foi possível reproduzir o vídeo de fundo.", error);
  }
}

async function enableVideoAudio() {
  if (audioEnabled || audioStartPending) {
    return;
  }

  audioStartPending = true;
  backgroundVideo.muted = false;

  try {
    await backgroundVideo.play();
    audioEnabled = true;
    audioButton.hidden = true;
    audioEvents.forEach(eventName => {
      document.removeEventListener(eventName, enableVideoAudio, true);
    });
  } catch (error) {
    await playVideoMuted();
    audioButton.hidden = false;

    if (error.name !== "NotAllowedError") {
      console.error("Não foi possível reproduzir o áudio do convite.", error);
    }
  } finally {
    audioStartPending = false;
  }
}

audioButton.addEventListener("click", enableVideoAudio);
audioEvents.forEach(eventName => {
  document.addEventListener(eventName, enableVideoAudio, true);
});

enableVideoAudio();
