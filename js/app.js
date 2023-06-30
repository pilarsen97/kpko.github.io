function hello() {
    document.getElementById('1').innerHTML = 'Hello';
}

function set_text(id, text) {
    document.getElementById(id).innerHTML = text;
}

function reset() {
    document.getElementById('example').innerHTML = ''
}

function submit() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var status = document.getElementById('status');

    if (name == '') {
        status.innerHTML = 'Заполните поле ФИО'
    } else if (email == '') {
        status.innerHTML = 'Заполните поле e-mail'
    } else if (phone == '') {
        status.innerHTML = 'Заполните поле телефон'
    } else {
        status.innerHTML = `Регистрация прошла успешно. Ваши данные на сайте: ФИО - ${name} e-mail: ${email} телефон: ${phone}`;
    }
}

function setBgRed() {
    document.body.style.backgroundColor = '#DC143C';
}

function setBgColor(color) {
    document.body.style.backgroundColor = color;
}

function inputColor() {
    var input_color = document.getElementById('color').value;

    setBgColor(input_color);
}

function setFontSize(id, size) {
    document.getElementById(id).style.fontSize = size;
}

function lampOn() {
    document.getElementById('lamp').src = 'images/pic_bulbon.gif'

    document.getElementById('main').style.backgroundColor = '#fff';
    document.getElementById('main').style.color = '#000';
}

function lampOff() {
    document.getElementById('lamp').src = 'images/pic_bulboff.gif'

    document.getElementById('main').style.backgroundColor = '#000';
    document.getElementById('main').style.color = '#fff';
}

function deleteTitle() {
    document.getElementById('title').style.display = 'none';
}

function createButton() {
    var btn = document.createElement('BUTTON');
    btn.innerHTML = 'Новая кнопка';
    document.getElementById('buttonList').appendChild(btn);
}

function createParagraph() {
    var par = document.createElement('P');
    par.innerHTML = 'Новый абзац';
    document.getElementById('paragraphList').appendChild(par);
}



// Создание объекта
var person = new Object();

// добавление свойств со значениями
person.name = 'Вася'
person.surname = 'Пупкин'
person.age = '88'
person.weight = '50'
person.fullName = function() {
    return this.name + ' ' + this.surname;
}


function showPerson() {
    document.getElementById('person').innerHTML = person.fullName() + ':' + person.age;
}

// Создать объект avto
var avto = new Object();

// Создать свойства и дать им значения
// brand - Audi
avto.brand = 'Audi'
// model - A6
avto.model = 'A6'
// year - 2020
avto.year = '2020'
// color - черный
avto.color = 'черный'
avto.showInfo = function() {
    document.getElementById('avto').innerHTML = 
    'Бренд: ' + this.brand + '<br>' + 
    'Модель: ' + this.model + '<br>' + 
    'Год: ' + avto.year + '<br>' + 
    'Цвет: ' + avto.color + '<br>'
}

// Объявить функцию showAvto
function showAvto() {
    // функция должна записывать в содержимое абзаца #avto названия свойст с их начениями
    return avto.showInfo();
}

// например: Бренд: Audi
// для переноса нового свойства на новую строчку пишем в кавычках тег '<br>'
// например: 'Марка: ' + avto.brand + '<br>'

let cat = {
    poroda: 'Sphinx',
    color: 'Black',
    age: '3 y.o.'
}

cat.eyes = 'green'
cat.showInfo = function() {
    document.getElementById('cat').innerHTML =
    `Порода: ${cat.poroda} <br>
    Цвет: ${cat.color} <br>
    Возраст: ${cat.age} <br>
    Глаза: ${cat.eyes} <br>`
}

const questions = [
    {
        question: 'Вопрос 1',
        answers: {
            1: 'no',
            2: 'no',
            3: 'yes',
            4: 'no'
        },
        rightAnswer: '3'
    },
    {
        question: 'Вопрос 2',
        answers: {
            1: 'no',
            2: 'no',
            3: 'yes',
            4: 'no'
        },
        rightAnswer: '3'
    },
    {
        question: 'Вопрос 3',
        answers: {
            1: 'yes',
            2: 'no',
            3: 'no',
            4: 'no'
        },
        rightAnswer: '1'
    }
]

let testContainer = document.getElementById('test');
let resultButton = document.getElementById('resultButton');
let resultContainer = document.getElementById('result');

function generateTest(questions, testContainer, resultContainer, resultButton) {
    let out = [];
    let answers;

    for(let i=0; i<questions.length; i++) {
        answers = [];
        for(let ans_text in questions[i].answers) {
            answers.push(
                `<label><br><input type="radio" name="question${i}" value="${ans_text}"> ${ans_text}) ${questions[i].answers[ans_text]} </label>`
            );
        }
        out.push(
            `<div class="question"> ${questions[i].question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        );
    }
    testContainer.innerHTML = out.join('');
}

generateTest(questions, testContainer, resultContainer, resultButton);

function showResults(questions, testContainer, resultContainer) {
    let answerContainers = testContainer.querySelectorAll('.answers');

    let userAnswer = '';
    let rightAnswersNum = 0;

    for(let i=0; i<questions.length; i++){
        
    }
}