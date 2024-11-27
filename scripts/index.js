import { words, words2, words3, words4} from "./constants/constants";

const wordElement = document.getElementById("word");
const wordElement2 = document.getElementById("word2");
const wordElement3 = document.getElementById("word3");
const wordElement4 = document.getElementById("word4");
const texts = [words, words2, words3, words4];

function showRandomWord(element, texts) {
  // Selecciona una palabra aleatoria
  const randomText = texts[Math.floor(Math.random() * texts.length)];

  // Oculta la palabra actual, cambia el texto y la muestra nuevamente
  element.classList.remove("show");
  setTimeout(() => {
    element.innerHTML = randomText;
    element.classList.add("show");
  }, 500); // Tiempo suficiente para que la transición de opacidad ocurra
}

// Llama a showRandomWord cada 2 segundos
setInterval(() => showRandomWord(wordElement, texts), 5000);
setInterval(() => showRandomWord(wordElement2, texts), 2000);
setInterval(() => showRandomWord(wordElement3, texts), 2000);
setInterval(() => showRandomWord(wordElement4, texts), 2000);

