// Отримання параметрів з URL
const urlParams = new URLSearchParams(window.location.search);
const encodedData = urlParams.get('data');

// Розкодування та розпакування даних
const decodedData = decodeURIComponent(encodedData);
const dataSet = JSON.parse(decodedData);

// Створення таблиці з двома колонками (ліва сторона)
const tableLeft = document.createElement('table');
tableLeft.style.float = 'left'; // Встановлення розташування таблиці з лівого боку
tableLeft.style.border = '2px solid black'; // Додавання обводки таблиці
tableLeft.style.margin = '45px';
tableLeft.style.padding = '20px';


// Масив правильних значень для кожного поля
const correctValues = ['B', 'R', 'Y', 'E', 'H', 'G', 'W', 'X', 'O','A','C','T','S','K','L','V'];

for (let i = 0; i < dataSet.length; i++) {
  const row = document.createElement('tr');

  const nameCell = document.createElement('td');
  const name = dataSet[i].name.split('-')[0].trim();
  nameCell.textContent = name;
  nameCell.style.fontSize = '20px'; // Збільшення розміру шрифту
  row.appendChild(nameCell);

  const inputCell = document.createElement('td');
  const input = document.createElement('input');
  input.type = 'text';
  input.maxLength = 1; // Обмеження на ввід одного символу
  input.style.width = '90px'; // Збільшення ширини текстового поля
  input.style.fontSize = '20px'; // Збільшення розміру шрифту

  // Додаємо подію 'input' для перевірки введеного значення
  input.addEventListener('input', function() {
    const correctValue = correctValues[i]; // Правильне значення для даного поля

    if (this.value.toUpperCase() === correctValue) {
      this.style.backgroundColor = 'rgb(128, 255, 0)'; // Зміна кольору фону текстового поля на зелений
      image.style.border = '2px solid green'; // Додавання обводки зеленого кольору до картинки
    } else {
      this.style.backgroundColor = 'rgb(255, 0, 0)'; // Скидання кольору фону текстового поля
      image.style.border = '2px solid red'; // Додавання обводки червоного кольору до картинки
    }
  });

  inputCell.appendChild(input);
  row.appendChild(inputCell);

  tableLeft.appendChild(row);
}

// Перемішування рядків таблиці
const rows = Array.from(tableLeft.rows);
rows.sort(() => Math.random() - 0.5);
rows.forEach(row => tableLeft.appendChild(row));

document.body.appendChild(tableLeft);


// Створення таблиці зображень та букв (права сторона)
const tableRight = document.createElement('table');
tableRight.style.float = 'right'; // Встановлення розташування таблиці з правого боку
tableRight.style.border = '3px solid  rgb(15, 136, 173)'; // Додавання обводки таблиц
tableRight.style.padding= '20px';
tableRight.style.margin= '25px';
const imagesPerRow = 4; // Кількість зображень у рядку
let currentRow;

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
  image.style.width = '200px'; // Встановлення ширини картинки
  image.style.height = '200px'; // Встановлення висоти картинки

  const letter = document.createElement('span');
  letter.textContent = correctValues[i]; // Відображення правильної букви

  cell.appendChild(letter);
  cell.appendChild(document.createElement('br')); // Додавання розриву між буквою та картинкою
  cell.appendChild(image);
  currentRow.appendChild(cell);
}

document.body.appendChild(tableRight);

// // Перетворення словника в рядок JSON
// const jsonData = JSON.stringify(tableData);

// // Створення URL-адреси з параметром "data" та передача рядка JSON як значення параметра
// const nextPageURL = `page_game3.html?data=${encodeURIComponent(jsonData)}`;

// // Переход на наступну сторінку
// window.location.href = nextPageURL;

const jsonData = JSON.stringify(tableData);
const nextPageURL = `page_game3.html?data=${encodeURIComponent(jsonData)}`;
window.location.href = nextPageURL;




// // Перетворення dataSet на рядок JSON
// const jsonData = JSON.stringify(dataSet);

// // Створення URL-адреси з параметром "data" та передача рядка JSON як значення параметра
// const nextPageURL = `page_game3.html?data=${encodeURIComponent(jsonData)}`;

// // Перехід на третю сторінку з передачею URL-адреси з параметром даних
// window.location.href = nextPageURL;
