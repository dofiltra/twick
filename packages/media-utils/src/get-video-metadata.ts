import { videoMetaCache } from "./cache";
import { VideoMeta } from "./types";

export const getVideoMeta = (videoSrc: string): Promise<VideoMeta> => {
  if (videoMetaCache[videoSrc]) {
    return Promise.resolve(videoMetaCache[videoSrc]);
  }

  return new Promise((resolve, reject) => {
    const video = document.createElement("video");
    video.preload = "metadata";
    video.src = videoSrc;

    video.onloadedmetadata = () => {
      const meta: VideoMeta = {
        width: video.videoWidth,
        height: video.videoHeight,
        duration: video.duration,
      };
      videoMetaCache[videoSrc] = meta;
      resolve(meta);
    };

    video.onerror = () => reject(new Error("Failed to load video metadata"));
  });
};
