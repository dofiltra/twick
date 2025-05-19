import { audioDurationCache } from "./cache";

export const getAudioDuration = (audioSrc: string): Promise<number> => {
  if (audioDurationCache[audioSrc]) {
    return Promise.resolve(audioDurationCache[audioSrc]);
  }

  return new Promise((resolve, reject) => {
    const audio = document.createElement("audio");
    audio.preload = "metadata";
    audio.src = audioSrc;

    audio.onloadedmetadata = () => {
      const duration = audio.duration;
      audioDurationCache[audioSrc] = duration;
      resolve(duration);
    };

    audio.onerror = () => reject(new Error("Failed to load audio metadata"));
  });
};
