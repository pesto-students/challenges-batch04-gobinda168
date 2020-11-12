import { allSettled } from './allSettled';

jest.useFakeTimers();
describe('allSettled', () => {
  test('The function should return a Promise', () => {
    expect(allSettled() instanceof Promise).toBe(true);
  });

  test('Promise call should return expected status and values', () => {
    expect(
      allSettled([Promise.resolve(1), 99, Promise.reject(new Error('error'))]),
    ).resolves.toEqual([
      { status: 'fulfilled', value: 1 },
      { status: 'fulfilled', value: 99 },
      { status: 'rejected', reason: new Error('error') },
    ]);
  });
});
