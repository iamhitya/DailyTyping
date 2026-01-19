import {
  LOWERCASE_ALPHA,
  KEYBOARD_ROW_1,
  KEYBOARD_ROW_2,
  KEYBOARD_ROW_3,
  KEYBOARD_ROW_1_SHIFT,
  shouldIgnore,
  UPPERCASE_ALPHA,
  KEYBOARD_ROW_2_SHIFT,
  KEYBOARD_ROW_3_SHIFT,
  KEYBOARD_ROW_4,
  KEYBOARD_ROW_4_SHIFT,
  OTHER_KEYS
} from '../lib/keys'

test('lower case keys are not ignored', () => {
  LOWERCASE_ALPHA.forEach(ch => {
    expect(shouldIgnore(ch)).toBe(false)
  })
})

test('upper case keys are not ignored', () => {
  UPPERCASE_ALPHA.forEach(ch => {
    expect(shouldIgnore(ch)).toBe(false)
  })
})

test('row1, row2, row3, row4 keys are not ignored', () => {
  ;[...KEYBOARD_ROW_1, ...KEYBOARD_ROW_2, ...KEYBOARD_ROW_3, ...KEYBOARD_ROW_4].forEach(ch => {
    expect(shouldIgnore(ch)).toBe(false)
  })
})

test('Shift + row1, row2, and row3 keys are not ignored', () => {
  ;[
    ...KEYBOARD_ROW_1_SHIFT,
    ...KEYBOARD_ROW_2_SHIFT,
    ...KEYBOARD_ROW_3_SHIFT,
    ...KEYBOARD_ROW_4_SHIFT
  ].forEach(ch => {
    expect(shouldIgnore(ch)).toBe(false)
  })
})

// other keys
test('other keys are not ignored', () => {
  OTHER_KEYS.forEach(ch => {
    expect(shouldIgnore(ch)).toBe(false)
  })
})

const keysToIgnore = [
  'Alt',
  'AltGraph',
  'CapsLock',
  'Control',
  'Fn',
  'FnLock',
  'Hyper',
  'Meta',
  'NumLock',
  'OS',
  'ScrollLock',
  'Shift',
  'Super',
  'Symbol',
  'SymbolLock',
  'Tab',
  'Unidentified',
  'ContextMenu',
  'Escape',
  'PrintScreen',
  'Pause',
  'Insert',
  'Delete',
  'Home',
  'End',
  'PageUp',
  'PageDown',
  'ArrowUp',
  'ArrowDown'
]

test('remaining keys are ignored', () => {
  keysToIgnore.forEach(ch => {
    expect(shouldIgnore(ch)).toBe(true)
  })
})
