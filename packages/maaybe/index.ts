type Maybe = undefined;

type MaybeType<T = boolean> = Readonly<Maybe> | (T extends boolean ? T : T | null);

const isMaybe = (x: unknown): x is Readonly<Maybe> => {
  return x === undefined;
};

declare global {
  export type maybe<T = boolean> = MaybeType<T>;
  // eslint-disable-next-line no-var
  var maybe: Readonly<Maybe>;
  function isMaybe(x: unknown): x is Readonly<Maybe>;
  interface Window {
    readonly maybe: Readonly<Maybe>;
    isMaybe(x: unknown): x is Readonly<Maybe>;
  }
}

export const maybe: Readonly<Maybe> = undefined;
export type maybe<T = boolean> = MaybeType<T>;

globalThis.maybe = maybe;
globalThis.isMaybe = isMaybe;
