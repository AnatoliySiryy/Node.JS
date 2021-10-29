const path = require('path');

console.log(filename);

console.log(path.basename(filename)); // Имя документа
console.log(path.dirname(filename));  // Имя каталога
console.log(path.extname(filename));  // Расширение файла

console.log(path.parse(filename));    // Возвращает информацию про файл
 
console.log(path.join(dirname, 'test', 'second.html'));        // Объединяет все данные в Path
console.log(path.resolve(__dirname, './test', 'second.html')); // Преобразует путь в абсолютный