const backgroundVideo = document.querySelector(".video-background video");
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
    audioEvents.forEach(eventName => {
      document.removeEventListener(eventName, enableVideoAudio, true);
    });
  } catch (error) {
    await playVideoMuted();

    if (error.name !== "NotAllowedError") {
      console.error("Não foi possível reproduzir o áudio do convite.", error);
    }
  } finally {
    audioStartPending = false;
  }
}

audioEvents.forEach(eventName => {
  document.addEventListener(eventName, enableVideoAudio, true);
});

playVideoMuted();
