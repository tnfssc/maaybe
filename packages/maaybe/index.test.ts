import { describe, expect, it } from '@jest/globals';

import './index';

describe('maaybe', () => {
  it('should be defined', () => {
    expect(maybe).toBeDefined();
  });

  it('should have isMaybe', () => {
    expect(isMaybe).toBeDefined();
    expect(typeof isMaybe).toBe('function');
  });

  it('should be a Maybe', () => {
    expect(isMaybe(maybe)).toBeTruthy();
  });

  it('should not be a Maybe', () => {
    expect(isMaybe(null)).toBeFalsy();
    expect(isMaybe(undefined)).toBeFalsy();
    expect(isMaybe(0)).toBeFalsy();
    expect(isMaybe('')).toBeFalsy();
    expect(isMaybe({})).toBeFalsy();
    expect(isMaybe([])).toBeFalsy();
    expect(isMaybe(() => void null)).toBeFalsy();
    expect(isMaybe(true)).toBeFalsy();
    expect(isMaybe(false)).toBeFalsy();
  });

  it('should have correct types', () => {
    let x: maybe = maybe;

    x = false;
    x = true;
    x = maybe;

    expect(x).toBe(maybe);

    let y: maybe<() => void> = maybe;

    y = () => void null;
    y = null;
    y = maybe;

    expect(y).toBe(maybe);
  });
});
