import { limit } from "./limit";
import { Dimensions } from "./types";
import { imageDimensionsCache } from "./cache";

function loadImageDimensions(url: string): Promise<Dimensions> {
  return new Promise((resolve, reject) => {
    if (typeof document === 'undefined') {
      reject(new Error('getImageDimensions() is only available in the browser.'));
      return;
    }

    const img = new Image();
    img.onload = () => {
      resolve({ width: img.naturalWidth, height: img.naturalHeight });
    };
    img.onerror = reject;
    img.src = url;
  });
}

export function getImageDimensions(url: string): Promise<Dimensions> {
  if (imageDimensionsCache[url]) {
    return Promise.resolve(imageDimensionsCache[url]);
  }

  return limit(() => loadImageDimensions(url)).then((dimensions) => {
    imageDimensionsCache[url] = dimensions;
    return dimensions;
  });
}
