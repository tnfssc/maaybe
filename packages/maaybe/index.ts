// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class Maybe {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor, @typescript-eslint/no-empty-function
  constructor() {}
}

type MaybeType<T = boolean> = Readonly<Maybe> | (T extends boolean ? T : T | null);

const isMaybe = (x: unknown): x is Maybe => {
  if (x instanceof Maybe && maybe === x) return true;
  return false;
};

declare global {
  export type maybe<T = boolean> = MaybeType<T>;
  // eslint-disable-next-line no-var
  var maybe: Readonly<Maybe>;
  function isMaybe(x: unknown): x is Maybe;
  interface Window {
    readonly maybe: Readonly<Maybe>;
    isMaybe(x: unknown): x is Maybe;
  }
}

export const maybe = new Maybe();
export type maybe<T = boolean> = MaybeType<T>;

globalThis.maybe = maybe;
globalThis.isMaybe = isMaybe;
