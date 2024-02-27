interface VideoPlayerElements {
  videoPlayer: HTMLVideoElement;
  playButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
}

interface VideoPlayerActions {
  playToggle(): void;
  stop(): void;
  initEvents(): void;
}

export default class VideoPlayer implements VideoPlayerActions {
  private videoPlayer: HTMLVideoElement;
  private playButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;

  constructor(VideoPlayerElements: VideoPlayerElements) {
    this.videoPlayer = VideoPlayerElements.videoPlayer;
    this.playButton = VideoPlayerElements.playButton;
    this.stopButton = VideoPlayerElements.stopButton;
  }

  initEvents(): void {
    this.playButton.addEventListener('click', () => {
      this.playToggle();
    });

    this.stopButton.addEventListener('click', () => {
      this.stop();
    });
  }

  playToggle(): void {
    if (this.videoPlayer.paused) {
      this.playButton.innerText = 'Pause';
      this.videoPlayer.play();
    } else {
      this.playButton.innerText = 'Play';
      this.videoPlayer.pause();
    }
  }

  stop(): void {
    this.videoPlayer.pause();
    this.videoPlayer.currentTime = 0;
    this.playButton.innerText = 'Play';
  }
}

const videoPlayer = new VideoPlayer({
  videoPlayer: document.querySelector('.video') as HTMLVideoElement,
  playButton: document.querySelector('.play') as HTMLButtonElement,
  stopButton: document.querySelector('.stop') as HTMLButtonElement,
});

videoPlayer.initEvents();
