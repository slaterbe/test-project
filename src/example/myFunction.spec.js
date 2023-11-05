const { mathFunction } = require('./myFunction');

jest.mock('./sum', () => {
  const originalModule = jest.requireActual('./sum');

  //Mock the default export and named export 'foo'
  return {
    ...originalModule,
    sum: jest.fn(() => 5)
  };
});

describe('Testing mathFunction', () => {
  test('expect', () => {
    expect(mathFunction(7)).toBe(5);
  }); 
})