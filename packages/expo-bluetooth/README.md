# expo-bluetooth

## Introduction

Expo Bluetooth provides access to native Bluetooth Low-Energy features in React Native.

### What's not included

- Background scanning: Because of how strict Apple is about this permission, I've prioritized it very low.
- Restoration: React Native state + the asynchronous nature of the native Bluetooth API makes this a very messy and unreliable feature.
- Mesh Networks: Basically completely unrealted to this library.
- Android classic Bluetooth API: Because of the minimum Android version, I've decided it'd make for a much better cross-platform experience if this wasn't supported.
- Acting as a peripheral: This would make sense as a different library, something that extends `CBPeripheralManager` on iOS the same way we extend the `Central` here. You would also need an extra iOS permission: `NSBluetoothPeripheralUsageDescription`
- Encrypted requests: Feel free to open a PR.
- Android Web: Not even a thing.
- Enable/Disable Bluetooth on iOS: Not possible.
- Beacons: This should be in a different library, perhaps building on this one.

## Methods

`requestPermissionAsync`
`getPermissionAsync`
`startScanningAsync`
`initAsync`
`stopScanningAsync`
`observeUpdates`
`observeCentralStateAsync`
`connectAsync`
`disconnectAsync`
`readDescriptorAsync`
`writeDescriptorAsync`
`setNotifyCharacteristicAsync`
`readCharacteristicAsync`
`writeCharacteristicAsync`
`writeCharacteristicWithoutResponseAsync`
`readRSSIAsync`
`getPeripheralsAsync`
`getConnectedPeripheralsAsync`
`getCentralAsync`
`getPeripheralAsync`
`getServiceAsync`
`getCharacteristicAsync`
`getDescriptorAsync`
`isScanningAsync`
`discoverServicesForPeripheralAsync`
`discoverIncludedServicesForServiceAsync`
`discoverCharacteristicsForServiceAsync`
`discoverDescriptorsForCharacteristicAsync`
`loadPeripheralAsync`
`_loadChildrenRecursivelyAsync`
`_reset`
`_getGATTStatusError`

## Types

### SomeType

Description

| Name | Type     | Description                                          | iOS | Android |
| ---- | -------- | ---------------------------------------------------- | --- | ------- |
| id   | `string` | Immutable identifier used for querying and indexing. | ✅  | ✅      |
| name | `string` | Full name with proper format.                        | ✅  | ✅      |

### Group

> iOS Only

## Constants