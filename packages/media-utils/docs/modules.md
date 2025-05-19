[@twick/media-utils](README.md) / Exports

# @twick/media-utils

## Table of contents

### Type Aliases

- [Dimensions](modules.md#dimensions)
- [VideoMeta](modules.md#videometa)

### Functions

- [getAudioDuration](modules.md#getaudioduration)
- [getImageDimensions](modules.md#getimagedimensions)
- [getVideoMeta](modules.md#getvideometa)

## Type Aliases

### Dimensions

Ƭ **Dimensions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `height` | `number` |
| `width` | `number` |

#### Defined in

types.ts:1

___

### VideoMeta

Ƭ **VideoMeta**: [`Dimensions`](modules.md#dimensions) & \{ `duration`: `number`  }

#### Defined in

types.ts:3

## Functions

### getAudioDuration

▸ **getAudioDuration**(`audioSrc`): `Promise`\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `audioSrc` | `string` |

#### Returns

`Promise`\<`number`\>

#### Defined in

get-audio-duration.ts:3

___

### getImageDimensions

▸ **getImageDimensions**(`url`): `Promise`\<[`Dimensions`](modules.md#dimensions)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`Promise`\<[`Dimensions`](modules.md#dimensions)\>

#### Defined in

get-image-dimensions.ts:21

___

### getVideoMeta

▸ **getVideoMeta**(`videoSrc`): `Promise`\<[`VideoMeta`](modules.md#videometa)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `videoSrc` | `string` |

#### Returns

`Promise`\<[`VideoMeta`](modules.md#videometa)\>

#### Defined in

get-video-metadata.ts:4
