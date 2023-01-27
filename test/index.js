
/* IMPORT */

import {describe} from 'fava';
import {setTimeout as delay} from 'node:timers/promises';
import {debounce, throttle} from '../dist/index.js';

/* MAIN */

describe ( 'Dettle', () => {

  describe ( 'debounce', it => {

    it ( 'debounces function execution', async t => {

      let count = 0;
      let fn = () => count++;
      let dfn = debounce ( fn, 100 );

      for ( let i = 0; i < 1000; i++ ) {

        dfn ();

        await delay ( 1 );

      }

      await delay ( 500 );

      t.is ( count, 1 );

    });

  });

  describe ( 'throttle', it => {

    it ( 'throttles function execution', async t => {

      let count = 0;
      let fn = () => count++;
      let tfn = throttle ( fn, 100 );

      for ( let i = 0; i < 1000; i++ ) {

        tfn ();

        await delay ( 1 );

      }

      await delay ( 500 );

      t.true ( count > 10 );

    });

  });

});
