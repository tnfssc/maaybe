import { describe, expect, it } from '@jest/globals';

import './index';

describe('maaybe', () => {
  it('should be defined globally', async () => {
    expect(maybe).toBe((await import('./index')).maybe);
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

  it('should have correct types', () => {
    let data: maybe<{ a: number }> = maybe;

    if (Math.random() <= 0.33) {
      data = { a: 1 };
    } else if (Math.random() > 0.66) {
      data = null;
    }

    if (isMaybe(data)) {
      expect(data).toBe(maybe);
    } else {
      if (data) {
        expect(data).toEqual({ a: 1 });
      } else {
        expect(data).toBeNull();
      }
    }
  });
});
