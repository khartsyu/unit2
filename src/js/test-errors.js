// Файл с намеренными ошибками для демонстрации работы ESLint
// Все ошибки разрешены через eslint-disable-next-line

// eslint-disable-next-line no-var, no-unused-vars, quotes, semi
var oldVariable = "bad"

// eslint-disable-next-line no-unused-vars, semi
const unusedVar = 42

// eslint-disable-next-line no-unused-vars, quotes, semi
const badQuotes = "should be single"

// eslint-disable-next-line no-unused-vars, semi
const noSemi = 'missing semicolon'

// eslint-disable-next-line no-constant-condition, eqeqeq
if (1 == '1') {
  // eslint-disable-next-line no-console
  console.log('bad comparison');
}

// eslint-disable-next-line max-params, id-length, no-unused-vars
function tooManyParams(a, b, c, d, e) {
  return a + b + c + d + e;
}

// eslint-disable-next-line max-len, no-unused-vars, semi
const longString = 'Эта строка слишком длинная и превышает лимит в 100 символов, поэтому ESLint должен показать ошибку max-len'

// eslint-disable-next-line no-unused-vars, semi
const extraLine = 'just to have more errors'