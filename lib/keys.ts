export const LOWERCASE_ALPHA = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]

export const UPPERCASE_ALPHA = LOWERCASE_ALPHA.map(e => e.toUpperCase())

export const KEYBOARD_ROW_1 = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=']
export const KEYBOARD_ROW_1_SHIFT = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+']

export const KEYBOARD_ROW_2_SHIFT = ['{', '}', `\\`]
export const KEYBOARD_ROW_2 = ['[', ']', '|']

export const KEYBOARD_ROW_3 = [';', `'`]
export const KEYBOARD_ROW_3_SHIFT = [':', '"']

export const KEYBOARD_ROW_4 = [',', `.`, '/']
export const KEYBOARD_ROW_4_SHIFT = ['<', '>', '?']

export const OTHER_KEYS = [' ', 'Enter', 'Backspace', 'ArrowLeft', 'ArrowRight']

// heat map is generated for these keys
export const HEATMAP_KEYS = [
  ...LOWERCASE_ALPHA,
  ...KEYBOARD_ROW_2,
  ...KEYBOARD_ROW_3,
  ...KEYBOARD_ROW_4,
  ' '
]

// keys that are not in this list are ignored
const KEYS_TO_USE = new Set([
  ...LOWERCASE_ALPHA,
  ...UPPERCASE_ALPHA,
  ...KEYBOARD_ROW_1,
  ...KEYBOARD_ROW_1_SHIFT,
  ...KEYBOARD_ROW_2,
  ...KEYBOARD_ROW_2_SHIFT,
  ...KEYBOARD_ROW_3,
  ...KEYBOARD_ROW_3_SHIFT,
  ...KEYBOARD_ROW_4,
  ...KEYBOARD_ROW_4_SHIFT,
  ...OTHER_KEYS
])

export function shouldIgnore(key: string): boolean {
  return !KEYS_TO_USE.has(key)
}
