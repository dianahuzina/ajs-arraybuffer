import ArrayBufferConverter from '../js/arraybuffer';
import { test } from '@jest/globals';
import { expect } from '@jest/globals';

test('check load', () => {
  const arrayBuffer = new ArrayBufferConverter();
  const data = arrayBuffer.load('Hello!');
  expect(data.byteLength).toBe(12);
})

test('check toString', () => {
  const arrayBuffer = new ArrayBufferConverter();
  const data = arrayBuffer.load('Hello!');
  const result = arrayBuffer.toString(data);
  expect(result).toBe('Hello!');
})