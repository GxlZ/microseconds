# μs

A small focused library to generate and parse microseconds, for node and browsers.

To get the current timestamp, it uses [hrtime](https://nodejs.org/api/process.html#process_process_hrtime) in node.js, [performance.now](https://developer.mozilla.org/en-US/docs/Web/API/Performance.now()) in browsers. Falls back to `Date.now() * 1000`.

Best browserified with [quickstart](https://github.com/spotify/quickstart).

## API

```js
var μs = require('microseconds');
```

### now

timestamp in microseconds

```js
var now = μs.now();
1404398280599786
```

### parse

as an object

```js
var parsed = μs.parse(now);
{ microseconds: 786, milliseconds: 599, seconds: 0, minutes: 38, hours: 14, days: 16254 }
```

as a string

```js
parsed.toString();
"16254 days 14 hours 38 minutes 0 seconds 599 milliseconds 786 microseconds"

μs.parse(1000).toString();
"1 millisecond"

μs.parse(1).toString();
"1 microsecond"

μs.parse(4231002).toString();
"4 seconds 231 milliseconds 2 microseconds"
```

### since

```js
var before = μs.now();
var time = μs.since(before); // time passed
```
