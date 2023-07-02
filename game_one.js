const urlParams = new URLSearchParams(window.location.search);
const index = urlParams.get('index');

let dataSet;

switch (index) {
  case '0':
    dataSet = [
      { color: 'blue', image: 'blue.jpg', pronunciation: 'blue' },
      
    ];
    break;
  case '1':
    dataSet = [
        { name: "Blue - блакитний", image: "color/blue.png", pronunciation: "audio1/blue.mp3" },
        { name: "Red - червоний", image: "color/red.png", pronunciation: "audio1/red.mp3" },
        { name: "Yellow - жовтий", image: "color/yellow.png", pronunciation: "audio1/yellow.mp3" },
        { name: "Brown - коричневий", image: "color/brown.png", pronunciation: "audio1/brown.mp3" },
        { name: "Black - чорний", image: "color/black.png", pronunciation: "audio1/black.mp3" },
        { name: "Grey - сірий", image: "color/grey.png", pronunciation: "audio1/grey.mp3" },
        { name: "White - білий", image: "color/white.png", pronunciation: "audio1/white.mp3" },
        { name: "Green - зелений", image: "color/green.png", pronunciation: "audio1/green.mp3" },
        { name: "Orange - помаранчевий", image: "color/orange.png", pronunciation: "audio1/orange.mp3" },
        
    ];
    break;
    case '2':
    dataSet = [
        { name: "Apple - яблуко", image: "fruit/apple.png", pronunciation: "audio2/apple.mp3" },
        { name: "Banana - банан", image: "fruit/banana.png", pronunciation: "audio2/banana.mp3" },
        { name: "Cherry - вишня", image: "fruit/cherry.png", pronunciation: "audio2/cherry.mp3" },
        { name: "Grapes - виноград", image: "fruit/grapes.png", pronunciation: "audio2/grapes.mp3" },
        { name: "Kiwi - ківі", image: "fruit/kiwi.png", pronunciation: "audio2/kiwi.mp3" },
        { name: "Lemon - лимон", image: "fruit/lemon.png", pronunciation: "audio2/lemon.mp3" },
        { name: "Orange - апельсин", image: "fruit/orange2.png", pronunciation: "audio1/orange.mp3" },
        { name: "Peach - персик", image: "fruit/peach.png", pronunciation: "audio2/peach.mp3" },
        { name: "Pear - груша", image: "fruit/pear.png", pronunciation: "audio2/pear.mp3" },
        { name: "Plum - слива", image: "fruit/plum.png", pronunciation: "audio2/plum.mp3" },
        { name: "Coconut - кокос", image: "fruit/coconut.png", pronunciation: "audio2/coconut.mp3" },
        { name: "Pineapple - ананас", image: "fruit/pineapple.png", pronunciation: "audio2/pineapple.mp3" },
        
    ];
    break;
    case '3':
    dataSet = [
        { name: "Cabbage - капуста", image: "vegetables/cabbage.png", pronunciation: "audio3/cabbage.mp3" },
        { name: "Carrot - морква", image: "vegetables/carrot.png", pronunciation: "audio3/carrot.mp3" },
        { name: "Corn - кукурудза", image: "vegetables/corn.png", pronunciation: "audio3/corn.mp3" },
        { name: "Cucumber - огірок", image: "vegetables/cucumber.png", pronunciation: "audio3/cucumber.mp3" },
        { name: "Garlic - часник", image: "vegetables/garlic.png", pronunciation: "audio3/garlic.mp3" },
        { name: "Lettuce - листя салату", image: "vegetables/lettuce.png", pronunciation: "audio3/lettuce.mp3" },
        { name: "Mushroom - гриби", image: "vegetables/mushroom.png", pronunciation: "audio3/mushroom.mp3" },
        { name: "Onion - цибуля", image: "vegetables/onion.png", pronunciation: "audio3/onion.mp3" },
        { name: "Peas - горох", image: "vegetables/peas.png", pronunciation: "audio3/peas.mp3" },
        { name: "Pepper - перець", image: "vegetables/pepper.png", pronunciation: "audio3/pepper.mp3" },
        { name: "Potatoes - картопля", image: "vegetables/potatoes.png", pronunciation: "audio3/potatoes.mp3" },
        { name: "Tomato - помідор", image: "vegetables/tomato.png", pronunciation: "audio3/tomato.mp3" },
        
    ];
    break;
    case '4':
    dataSet = [
        { name: "Family - сім'я", image: "family/family.png", pronunciation: "audio4/family.mp3" },
        { name: "Mother - мати", image: "family/mother.png", pronunciation: "audio4/mother.mp3" },
        { name: "Father - тато", image: "family/father.png", pronunciation: "audio4/father.mp3" },
        { name: "Daughter - дочка", image: "family/daughter.png", pronunciation: "audio4/daughter.mp3" },
        { name: "Son - син", image: "family/son.png", pronunciation: "audio4/son.mp3" },
        { name: "Sister - сестра", image: "family/sister.png", pronunciation: "audio4/sister.mp3" },
        { name: "Brother - брат", image: "family/brother.png", pronunciation: "audio4/brother.mp3" },
        { name: "Grandmother - бабуся", image: "family/grandmother.png", pronunciation: "audio4/grandmother.mp3" },
        { name: "Grandfather - дідусь", image: "family/grandfather.png", pronunciation: "audio4/grandfather.mp3" },
        
    ];
    break;
    case '5':
    dataSet = [
        { name: "Cat - кіт", image: "pet/cat.png", pronunciation: "audio5/cat.mp3" },
        { name: "Cow - корова", image: "pet/cow.png", pronunciation: "audio5/cow.mp3" },
        { name: "Dog - собака", image: "pet/dog.png", pronunciation: "audio5/dog.mp3" },
        { name: "Goat - коза", image: "pet/goat.png", pronunciation: "audio5/goat.mp3" },
        { name: "Hamster - хом'як", image: "pet/hamster.png", pronunciation: "audio5/hamster.mp3" },
        { name: "Horse - кінь", image: "pet/horse.png", pronunciation: "audio5/horse.mp3" },
        { name: "Pig - свиня", image: "pet/pig.png", pronunciation: "audio5/pig.mp3" },
        { name: "Rabbit - кролик", image: "pet/rabbit.png", pronunciation: "audio5/rabbit.mp3" },
        { name: "Sheep - сім'я", image: "pet/sheep.png", pronunciation: "audio5/sheep.mp3" },
        
    ];
    break;
  default:
    dataSet = []; 
    break;
}

const table = document.createElement('table');
table.style.margin = '0 auto'; // Вирівнювання таблиці по центру

const cellsPerRow = 3; // Кількість комірок у рядку
let currentRow;
const imageWidth = '200px'; // Фіксована ширина зображення
const imageHeight = '200px'; // Фіксована висота зображення

for (let i = 0; i < dataSet.length; i++) {
  if (i % cellsPerRow === 0) {
    currentRow = document.createElement('tr');
    table.appendChild(currentRow);
  }

  const cell = document.createElement('td');
  cell.style.border = '2px solid #000'; // Додаємо обводку до комірки

  const container = document.createElement('div');
  container.style.display = 'flex'; // Встановлюємо гнучкий контейнер для розміщення елементів в рядок
  container.style.flexDirection = 'column'; // Розміщуємо елементи вертикально
  container.style.alignItems = 'center'; // Вирівнювання елементів по центру
  cell.appendChild(container);

  const colorCell = document.createElement('div');
  colorCell.textContent = dataSet[i].name; // Замінити на потрібну властивість, яка містить назву
  colorCell.style.textAlign = 'center'; // Вирівнювання тексту до центру
  colorCell.style.fontSize = '20px'; // Задаємо більший розмір шрифту
  container.appendChild(colorCell);

  const image = document.createElement('img');
  image.src = dataSet[i].image;
  image.style.border = '2px solid #000'; // Додаємо обводку
  image.style.borderRadius = '10px'; // Скруглюємо края
  image.style.width = imageWidth; // Встановлюємо фіксовану ширину зображення
  image.style.height = imageHeight; // Встановлюємо фіксовану висоту зображення
  container.appendChild(image);

  const audio = document.createElement('audio');
  audio.src = dataSet[i].pronunciation;
  audio.controls = true; // Додаємо елемент керування програванням
  container.appendChild(audio);

  currentRow.appendChild(cell);
}

document.body.appendChild(table);

// Перетворення словника в рядок JSON
const jsonData = JSON.stringify(tableData);

// Створення URL-адреси з параметром "data" та передача рядка JSON як значення параметра
const nextPageURL = `page_game2.html?data=${encodeURIComponent(jsonData)}`;

// Переход на наступну сторінку
window.location.href = nextPageURL;



// const table = document.createElement('table');

// for (let i = 0; i < dataSet.length; i++) {
//   const row = document.createElement('tr');

//   const colorCell = document.createElement('td');
//   colorCell.textContent = dataSet[i].name; // замінити на потрібну властивість, яка містить назву
//   row.appendChild(colorCell);

//   const imageCell = document.createElement('td');
//   const image = document.createElement('img');
//   image.src = dataSet[i].image;
//   imageCell.appendChild(image);
//   row.appendChild(imageCell);

//   const pronunciationCell = document.createElement('td');
//   const audio = document.createElement('audio');
//   audio.src = dataSet[i].pronunciation;
//   audio.controls = true; // додаємо елемент керування програванням
//   pronunciationCell.appendChild(audio);
//   row.appendChild(pronunciationCell);

//   table.appendChild(row);
// }

// document.body.appendChild(table);
