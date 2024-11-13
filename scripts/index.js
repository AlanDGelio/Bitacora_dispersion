const words = [
  "elefante",
  "tigre",
  "jirafa",
  "hipopótamo",
  "león",
  "rinoceronte",
  "zebra",
  "cocodrilo",
  "panda",
  "koala",
  "canguro",
  "búfalo",
  "águila",
  "pingüino",
  "oso",
  "lobo",
  "serpiente",
  "camello",
  "delfín",
  "ardilla",
];

const wordElement = document.getElementById("word");

function showRandomWord() {
  // Selecciona una palabra aleatoria
  const randomWord = words[Math.floor(Math.random() * words.length)];

  // Oculta la palabra actual, cambia el texto y la muestra nuevamente
  wordElement.classList.remove("show");
  setTimeout(() => {
    wordElement.textContent = randomWord;
    wordElement.classList.add("show");
  }, 500); // Tiempo suficiente para que la transición de opacidad ocurra
}

// Llama a showRandomWord cada 2 segundos
setInterval(showRandomWord, 2000);
