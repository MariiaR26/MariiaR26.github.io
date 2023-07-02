const urlParams = new URLSearchParams(window.location.search);
const encodedData = urlParams.get('data');


// Розкодування та розпакування даних
const decodedData = decodeURIComponent(encodedData);
const dataSet = JSON.parse(decodedData);

const tableContainer = document.createElement('div');
tableContainer.style.display = 'flex';
tableContainer.style.justifyContent = 'center';
// tableContainer.style.border = '1px solid black';

const table = document.createElement('table');
table.style.borderCollapse = 'collapse'; // Злиття границь таблиці
// table.style.borderSpacing = '120px';

// Перемішування рядків таблиці
const rows = Array.from(dataSet);
rows.sort(() => Math.random() - 0.5);
const columnsPerRow = 2; // Кількість колонок у рядку
for (let i = 0; i < rows.length; i += columnsPerRow) {
  const row = document.createElement('tr');
  for (let j = i; j < i + columnsPerRow && j < rows.length; j++) {
    const rowData = rows[j];

    // Колонка з картинкою
    const imageCell = document.createElement('td');
    const image = document.createElement('img');
    image.src = rowData.image; // URL зображення
    image.style.width = '200px'; // Фіксований розмір зображення
    image.style.height = '200px';
    image.style.borderRadius = '60px';
    image.style.border = '1px solid black'; 
    imageCell.appendChild(image);
    row.appendChild(imageCell);

    // Колонка з обрізаним та перемішаним name
    const nameCell = document.createElement('td');
    const trimmedName = rowData.name.split('-')[0].trim(); // Обрізаємо та видаляємо зайві пробіли після "-"
    const shuffledName = shuffleString(trimmedName); // Функція shuffleString перемішує букви в слові
    nameCell.textContent = shuffledName;
    nameCell.style.fontSize = '25px';
    row.appendChild(nameCell);

    // Колонка з текстовим полем
    const inputCell = document.createElement('td');
    const input = document.createElement('input');
    input.type = 'text';
    input.style.width = '100%';
    input.style.fontSize = '25px'; 
    input.addEventListener('input', function() {
      if (this.value.toLowerCase() === trimmedName.toLowerCase()) {
        this.style.backgroundColor = 'rgb(128, 255, 0)'; // Зміна кольору фону на зелений
      } else {
        this.style.backgroundColor = ''; // Скидання кольору фону
      }
    });
    inputCell.appendChild(input);
    row.appendChild(inputCell);
  }
  table.appendChild(row);
}

tableContainer.appendChild(table);
document.body.appendChild(tableContainer);

// Функція для перемішування рядка
function shuffleString(str) {
  let shuffled = str.split('');
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.join('');
}

const jsonData = JSON.stringify(tableData);
const nextPageURL = `page_game5.html?data=${encodeURIComponent(jsonData)}`;
window.location.href = nextPageURL;