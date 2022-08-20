const getInput = document.getElementById('carta-texto');
const btnCriaCarta = document.getElementById('criar-carta');
const getParagrafo = document.getElementById('carta-gerada');
const estilo = ['newspaper', 'magazine1', 'magazine2'];
const tamanho = ['medium', 'big', 'reallybig'];
const rotacao = ['rotateleft', 'rotateright'];
const inclinacao = ['skewleft', 'skewright'];
let getRandomNumber;
const getParagrafoContador = document.getElementById('carta-contador');

function verificaInput() {
  if (getInput.value === ' ' || getInput.value === '') {
    getParagrafo.innerText = 'Por favor, digite o conteúdo da carta.';
    return false;
  }
  getParagrafo.innerText = '';
  return true;
}

function getRandomInt(min, max) {
  const outromin = Math.ceil(min);
  const outromax = Math.floor(max);
  return Math.floor(Math.random() * (outromax - outromin) + outromin);
}

function getEstilo() {
  getRandomNumber = getRandomInt(0, 3);
  return estilo[getRandomNumber];
}

function getTamanho() {
  getRandomNumber = getRandomInt(0, 3);
  return tamanho[getRandomNumber];
}

function getRotacao() {
  getRandomNumber = getRandomInt(0, 2);
  return rotacao[getRandomNumber];
}

function getInclinacao() {
  getRandomNumber = getRandomInt(0, 2);
  return inclinacao[getRandomNumber];
}

function estilizaSpan() {
  const getSpan = document.querySelectorAll('span');
  for (let index = 0; index < getSpan.length; index += 1) {
    getSpan[index].classList.add(getEstilo());
    getSpan[index].classList.add(getTamanho());
    getSpan[index].classList.add(getRotacao());
    getSpan[index].classList.add(getInclinacao());
  }
}

function criaPalavra(palavra) {
  const createSpan = document.createElement('span');
  createSpan.addEventListener('click', () => {
    createSpan.className = '';
    createSpan.classList.add(getEstilo());
    createSpan.classList.add(getTamanho());
    createSpan.classList.add(getRotacao());
    createSpan.classList.add(getInclinacao());
  });
  createSpan.innerText = `${palavra}`;
  getParagrafo.appendChild(createSpan);
}

function recebeInput() {
  let input;
  if (verificaInput()) {
    input = getInput.value.split(' ');
    document.getElementById('label-contador').innerText = 'Quantidade de palavras: ';
    getParagrafoContador.innerText = input.length;
    for (let index = 0; index < input.length; index += 1) {
      criaPalavra(input[index]);
    }
    estilizaSpan();
  }
}

btnCriaCarta.addEventListener('click', recebeInput);
