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
table.style.borderCollapse = 'collapse';
table.style.borderSpacing = '20px';

dataSet.forEach(rowData => {
  const row = document.createElement('tr');
  row.style.border = '3px solid rgb(15, 136, 173)'; 

  const imageCell = document.createElement('td');
  const image = document.createElement('img');
  image.src = rowData.image;
  image.style.width = '250px';
  image.style.height = '250px';
  image.style.border = '1px solid black';
  image.style.borderRadius = '60px';
  imageCell.appendChild(image);
  row.appendChild(imageCell);

  const radioCells = [];
  const radioButtons = [];
  const randomNames = getRandomNames(dataSet, rowData.name);

  const allOptions = [rowData.name, ...randomNames];
  shuffleArray(allOptions);

  allOptions.forEach(option => {
    const radioCell = document.createElement('td');
    radioCell.style.width = '200px';
    const radioButton = document.createElement('input');
    radioButton.type = 'radio';
    radioButton.name = 'answer';
    radioButton.value = option;
    radioButton.style.transform = 'scale(1.5)';
    
    const nameLabel = document.createElement('label');
    nameLabel.textContent = option.split('-')[0]; // Обрізаємо текст після символу "-"
    nameLabel.style.fontSize = '22px';
    
    radioCell.appendChild(radioButton);
    radioCell.appendChild(nameLabel);
    row.appendChild(radioCell);

    radioButtons.push(radioButton);
    radioCells.push(radioCell);
  });

  table.appendChild(row);

  radioButtons.forEach(function(radioButton) {
    radioButton.addEventListener('change', function() {
      if (this.value === rowData.name) {
        row.style.backgroundColor = 'rgb(0, 255, 64)';
      } else {
        row.style.backgroundColor = 'rgb(255, 0, 0)';
      }
    });
  });

  image.addEventListener('click', function() {
    radioButtons.forEach(function(radioButton) {
      radioButton.checked = radioButton.value === rowData.name;
    });
  });
});

tableContainer.appendChild(table);
document.body.appendChild(tableContainer);

function getRandomNames(dataSet, correctName) {
  const names = dataSet.map(data => data.name);
  const randomNames = names.filter(name => name !== correctName);
  shuffleArray(randomNames);
  return randomNames.slice(0, 3);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
