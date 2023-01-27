
/* MAIN */

type Callback = () => void;

type FN<Args extends unknown[], Return> = ( ...args: Args ) => Return;

type Debounced<Args extends unknown[]> = FN<Args, void> & { cancel: Callback, flush: Callback };

type Throttled<Args extends unknown[]> = FN<Args, void> & { cancel: Callback, flush: Callback };

/* EXPORT */

export type {Callback, FN, Debounced, Throttled};
