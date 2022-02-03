 stringLength = require('./functions')

test('A set of tests to check the range from 1 to 10',
    () => {

      expect(stringLength('a')).toBe(1)
      expect(stringLength('to')).toBe(2)
      expect(stringLength('two')).toBe(3)
      expect(stringLength('kiss')).toBe(4)
      expect(stringLength('reach')).toBe(5)
      expect(stringLength('sergio')).toBe(6)
      expect(stringLength('defined')).toBe(7)
      expect(stringLength('12345678')).toBe(8)
      expect(stringLength('character')).toBe(9)
      expect(stringLength('characters')).toBe(10)
    })

test("error case", () => {
  expect(() => {
    stringLength('veryLongString')
  }).toThrow("Your input should be in the range of 1 to 10 characters")
})

