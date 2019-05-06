# ExObject

Extended object operation. Support for all major browsers.

- Works in IE8+
- Accepts any character
- Heavily tested
- No dependency
- Supports CommonJS/ES Module/UMD

## Installation

### Direct download

Download the script from `dist/exobject.umd.js` and include it.

```html
<script src="/path/to/exobject.umd.js"></script>
```

### Package Managers

```
npm install exobject --save
```

## Basic Usage

### UMD

```javascript
// -> object
Exo.type({});
```

### CJS / ES

```javascript
import { type } from 'exobject';

// -> object
type({});
```

## API

| Method             | Parameter  | Returns  | Describe     |
| ------------------ | --------------- | -------- | ---------------- |
| isArray | (o: any) | Boolean | Determines whether it is an Array. |
| isBoolean | (o: any) | Boolean | Determines whether it is an Booelan. |
| isDate | (o: any) | Boolean | Determines whether it is an Date. |
| isElement | (o: any) | Boolean | Determines whether it is an Element. |
| isFunction | (o: any) | Boolean | Determines whether it is an Function. |
| isNaN | (o: any) | Boolean | Determines whether it is an NaN,It is mostly used to detect the results of parseFloat() and parseInt(). |
| isNull | (o: any) | Boolean | Determines whether it is an null. |
| isNumber | (o: any) | Boolean | Determines whether it is an Number. |
| isObject | (o: any) | Boolean | Determines whether it is an Object. |
| isString | (o: any) | Boolean | Determines whether it is an String. |
| isUndefined | (o: any) | Boolean | Determines whether it is an Undefined. |
| type | (o: any) | String | Ouput the type of specified parameter. |
| assign | (target: any, ...sources: object[]) | Object | Copy the values of all enumerable own properties from one or more source objects to a target object. |
| merge | (target: any, ...sources: object[]) | Object | Merge a given object with all the properties in passed-in object(s). |