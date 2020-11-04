import { accessorProperties } from './accessorProperties';

describe('convert to binary', () => {
  test('Should return a binary number', () => {
    const obj = accessorProperties();
    obj.number = 2;
    expect(obj.binary).toBe('10');
    obj.number = 5;
    expect(obj.binary).toBe('101');
  });
});
