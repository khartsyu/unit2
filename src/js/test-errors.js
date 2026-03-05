// Файл с намеренными ошибками для проверки ESLint

// Ошибка: var вместо const/let
var oldVariable = "bad"

// Ошибка: неиспользуемая переменная
const unusedVar = 42

// Ошибка: двойные кавычки
const badQuotes = "should be single"

// Ошибка: нет точки с запятой
const noSemi = 'missing semicolon'

// Ошибка: == вместо ===
if (1 == '1') {
  console.log('bad comparison')
}

// Ошибка: слишком много параметров
function tooManyParams(a, b, c, d, e) {
  return a + b + c + d + e
}

// Ошибка: слишком длинная строка
const longString = 'Эта строка слишком длинная и превышает лимит в 100 символов, поэтому ESLint должен показать ошибку max-len'

// Вызов функций
tooManyParams(1, 2, 3, 4, 5)