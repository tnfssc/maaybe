// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class _Maybe {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor, @typescript-eslint/no-empty-function
  constructor() {}
}

const maybe = new _Maybe();

const isMaybe = (x: unknown): x is _Maybe => x instanceof _Maybe;

declare global {
  type Maybe = _Maybe;
  // eslint-disable-next-line no-var
  var maybe: Readonly<_Maybe>;
  function isMaybe(x: unknown): x is _Maybe;
  interface Window {
    readonly maybe: Readonly<_Maybe>;
    isMaybe(x: unknown): x is _Maybe;
  }
}

globalThis.maybe = maybe;
globalThis.isMaybe = isMaybe;

export {};
