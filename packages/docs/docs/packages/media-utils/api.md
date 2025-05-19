---
sidebar_position: 2
---

# API Reference

## Functions

### getImageDimensions

Gets the dimensions of an image file.

```typescript
function getImageDimensions(file: File | string): Promise<{ width: number; height: number }>
```

#### Parameters

- `file`: `File | string` - The image file or path to the image file

#### Returns

- `Promise<{ width: number; height: number }>` - The dimensions of the image

#### Example

```typescript
const dimensions = await getImageDimensions('path/to/image.jpg');
console.log(dimensions); // { width: 800, height: 600 }
```

### getAudioDuration

Gets the duration of an audio file in seconds.

```typescript
function getAudioDuration(file: File | string): Promise<number>
```

#### Parameters

- `file`: `File | string` - The audio file or path to the audio file

#### Returns

- `Promise<number>` - The duration of the audio in seconds

#### Example

```typescript
const duration = await getAudioDuration('path/to/audio.mp3');
console.log(duration); // 180.5
```

### getVideoMeta

Gets metadata about a video file.

```typescript
function getVideoMeta(file: File | string): Promise<{
  width: number;
  height: number;
  duration: number;
  codec?: string;
  bitrate?: number;
}>
```

#### Parameters

- `file`: `File | string` - The video file or path to the video file

#### Returns

- `Promise<VideoMetadata>` - The video metadata

#### Example

```typescript
const metadata = await getVideoMeta('path/to/video.mp4');
console.log(metadata);
// {
//   width: 1920,
//   height: 1080,
//   duration: 120,
//   codec: 'h264',
//   bitrate: 5000000
// }
```

## Types

### VideoMetadata

```typescript
interface VideoMetadata {
  width: number;
  height: number;
  duration: number;
  codec?: string;
  bitrate?: number;
}
```

## Error Handling

All functions throw errors in the following cases:

- File not found
- Invalid file format
- File is corrupted
- File is too large

Example error handling:

```typescript
try {
  const dimensions = await getImageDimensions('path/to/image.jpg');
} catch (error) {
  console.error('Error getting image dimensions:', error);
}
``` 