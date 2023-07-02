// const urlParams = new URLSearchParams(window.location.search);
// const encodedData = urlParams.get('data');

// // Розкодування та розпакування даних
// const decodedData = decodeURIComponent(encodedData);
// const dataSet = JSON.parse(decodedData);
// Отримання параметрів з URL
const urlParams = new URLSearchParams(window.location.search);
const encodedData = urlParams.get('data');


// Розкодування та розпакування даних
const decodedData = decodeURIComponent(encodedData);
const dataSet = JSON.parse(decodedData);


// Створення таблиці зображень та букв (права сторона)
const tableRight = document.createElement('table');
tableRight.style.float = 'right'; // Встановлення розташування таблиці з правого боку
tableRight.style.border = '3px solid rgb(15, 136, 173)'; // Додавання обводки таблиці

const imagesPerRow = 4; // Кількість зображень у рядку
let currentRow;

const correctValues = ['B', 'R', 'Y', 'E', 'H', 'G', 'W', 'X', 'O','A','C','T','S','K','L','V'];

for (let i = 0; i < dataSet.length; i++) {
  if (i % imagesPerRow === 0) {
    currentRow = document.createElement('tr');
    tableRight.appendChild(currentRow);
  }

  const cell = document.createElement('td');
  cell.style.border = '1px solid rgb(15, 136, 173)'; // Додавання обводки комірки
  cell.style.borderRadius = '8px'; // Додавання скруглення країв комірки

  const image = document.createElement('img');
  image.src = dataSet[i].image;
  image.style.border = '2px solid black'; // Додавання обводки картинки
  image.style.borderRadius = '8px'; // Додавання скруглення країв картинки
  image.style.width = '190px'; // Встановлення ширини картинки
  image.style.height = '180px'; // Встановлення висоти картинки

  const letter = document.createElement('span');
  letter.textContent = correctValues[i]; // Відображення правильної букви

  cell.appendChild(letter);
  cell.appendChild(document.createElement('br')); // Додавання розриву між буквою та картинкою
  cell.appendChild(image);
  currentRow.appendChild(cell);
}

document.body.appendChild(tableRight);

const tableLeft = document.createElement('table');
tableLeft.style.float = 'left';
tableLeft.style.border = '2px solid black';
tableLeft.style.margin = '8px';
tableLeft.style.padding = '8px';

for (let i = 0; i < dataSet.length; i++) {
  const row = document.createElement('tr');

  const audioCell = document.createElement('td');
  const audio = document.createElement('audio');
  audio.src = dataSet[i].pronunciation; // Замінюємо dataSet[i].audio на dataSet[i].pronunciation
  audio.controls = true;
  audioCell.appendChild(audio);
  row.appendChild(audioCell);

  const inputCell = document.createElement('td');
  const input = document.createElement('input');
  input.type = 'text';
  input.maxLength = 1;
  input.style.width = '70px';
  input.style.fontSize = '15px';

  input.addEventListener('input', function() {
    const correctValue = correctValues[i];

    if (this.value.toUpperCase() === correctValue) {
      this.style.backgroundColor = 'rgb(128, 255, 0)';
      audio.style.border = '2px solid green';
    } else {
      this.style.backgroundColor = 'rgb(255, 0, 0)';
      audio.style.border = '2px solid red';
    }
  });

  inputCell.appendChild(input);
  row.appendChild(inputCell);

  tableLeft.appendChild(row);
}

document.body.appendChild(tableLeft);

// Перемішування рядків таблиці
const rows = Array.from(tableLeft.rows);
rows.sort(() => Math.random() - 0.5);
rows.forEach(row => tableLeft.appendChild(row));

document.body.appendChild(tableLeft);

const jsonData = JSON.stringify(tableData);
const nextPageURL = `page_game4.html?data=${encodeURIComponent(jsonData)}`;
window.location.href = nextPageURL;