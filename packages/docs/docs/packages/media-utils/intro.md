---
sidebar_position: 1
---

# Media Utils

The `@twick/media-utils` package provides utilities for handling media files in your web applications. It includes functions for working with images, audio, and video files.

## Installation

```bash
pnpm add @twick/media-utils
```

## Features

- Get image dimensions
- Get audio duration
- Get video metadata
- Cache management
- Rate limiting utilities

## Quick Start

```typescript
import { getImageDimensions, getAudioDuration, getVideoMeta } from '@twick/media-utils';

// Get image dimensions
const dimensions = await getImageDimensions('path/to/image.jpg');
console.log(dimensions); // { width: 800, height: 600 }

// Get audio duration
const duration = await getAudioDuration('path/to/audio.mp3');
console.log(duration); // 180.5 (seconds)

// Get video metadata
const metadata = await getVideoMeta('path/to/video.mp4');
console.log(metadata); // { width: 1920, height: 1080, duration: 120, ... }
```

## Next Steps

Check out the [API Reference](./api) for detailed information about all available functions and their options. 