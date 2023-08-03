# Dettle

A tiny fully-featured debounce and throttle implementation.

## Install

```sh
npm install --save dettle
```

## Usage

```ts
import {debounce, throttle} from 'dettle';

const fn = () => console.log ( 'Fired!' );

// Debouncing

const debounced = debounce ( fn, 1000, {
  leading: false,
  maxWait: 3000
});

debounced (); // Schedule function for execution
debounced (); // Re-schedule function for execution

debounced.flush (); // Execute the function immediately, if there's a scheduled execution
debounced.cancel (); // Cancel the scheduled execution

// Throttling
// The API for throttling is basically the same, except that:
// - `maxWait` is set implicitly for you to be equal to the wait time
// - `leading` is `true` by default rather than `false`

const throttled = throttle ( fn, 1000 );

throttled (); // Call the function immediately
throttled (); // Schedule function for execution

throttled.flush (); // Execute the function immediately, if there's a scheduled execution
throttled.cancel (); // Cancel the scheduled execution
```

## License

MIT © Fabio Spampinato
