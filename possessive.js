// Juego de práctica — Possessive Adjectives
// Autor: Santiago Cardona
// Nota: Este módulo replica la UX del juego de preposiciones, pero con banco propio de ejercicios y claves separadas en localStorage.

let ejercicioActual;
const preguntaElement = document.getElementById("frase_a_completar");
const optionButtons = Array.from(document.querySelectorAll('#buttons button'));
const btnReiniciar = document.getElementById("btn-reiniciar");
const rachaLabel = document.querySelector('nav p:nth-child(1)');

// Claves específicas para no mezclar estadísticas entre juegos
const LS_KEYS = {
  racha: 'pos-racha',
  rachaMax: 'pos-racha-max',
  correctas: 'pos-correctas',
  incorrectas: 'pos-incorrectas'
};

// Carga de ejercicios desde JSON externo (separación limpia de datos y lógica).
// Comentario profesional: Esto facilita mantener, extender y traducir el banco de ejercicios.
let possessiveExercises = [];
fetch('possessive.json')
  .then(res => res.json())
  .then(data => {
    possessiveExercises = Array.isArray(data?.ejercicios) ? data.ejercicios : [];
    if (!possessiveExercises.length) {
      throw new Error('El JSON no contiene ejercicios válidos');
    }
    FraseRandom();
  })
  .catch(err => {
    console.error('Error al cargar possessive.json:', err);
    if (preguntaElement) {
      preguntaElement.textContent = 'Error al cargar los ejercicios. Por favor recarga la página.';
      preguntaElement.classList.remove('sin-cargar');
    }
  });

// Inicialización
actualizarContadores();
actualizarMaxRacha();

// Cargar una frase aleatoria
function FraseRandom() {
  if (!possessiveExercises.length) return;
  preguntaElement.classList.add("animacion");
  optionButtons.forEach(btn => btn.classList.remove("incorrecto", "correcto"));
  habilitarOpciones(true);

  const randomIndex = Math.floor(Math.random() * possessiveExercises.length);
  const randomExercise = possessiveExercises[randomIndex];

  setTimeout(() => {
    preguntaElement.classList.remove("sin-cargar");
    preguntaElement.textContent = randomExercise.sentence.replace("___", "_____");
    preguntaElement.classList.remove("animacion");
  }, 350);

  ejercicioActual = randomExercise;
}

// Manejo de clic en opciones
optionButtons.forEach(btn => {
  btn.addEventListener('click', (e) => onOpcionClick(e.currentTarget));
});
btnReiniciar.addEventListener("click", FraseRandom);

function onOpcionClick(buttonEl) {
  if (!ejercicioActual) return;
  const respuesta = String(buttonEl.value || '').trim().toLowerCase();
  const respuestaCorrecta = String(ejercicioActual.answer || '').trim().toLowerCase();

  habilitarOpciones(false);

  if (respuesta === respuestaCorrecta) {
    buttonEl.classList.add("correcto");
    lsInc(LS_KEYS.correctas);
    const nuevaRacha = lsInc(LS_KEYS.racha);
    const rachaMax = parseInt(localStorage.getItem(LS_KEYS.rachaMax) || '0');
    if (nuevaRacha > rachaMax) {
      localStorage.setItem(LS_KEYS.rachaMax, String(nuevaRacha));
      actualizarMaxRacha();
    }
    // Cargar nueva frase tras un breve feedback
    setTimeout(FraseRandom, 350);
  } else {
    buttonEl.classList.add("incorrecto");
    lsInc(LS_KEYS.incorrectas);
    localStorage.setItem(LS_KEYS.racha, '0');
  }

  actualizarContadores();
  setTimeout(() => {
    buttonEl.classList.remove("correcto", "incorrecto");
    habilitarOpciones(true);
  }, 400);
}

function habilitarOpciones(habilitar) {
  optionButtons.forEach(btn => btn.disabled = !habilitar);
}

function actualizarMaxRacha() {
  if (!rachaLabel) return;
  const max = localStorage.getItem(LS_KEYS.rachaMax) || '0';
  rachaLabel.setAttribute('data-icon', `Racha Max: 🔥 ${max}`);
}

function actualizarContadores() {
  const rachaElement = document.getElementById("racha");
  const correctasElement = document.getElementById("correctas");
  const incorrectasElement = document.getElementById("incorrectas");
  if (!rachaElement || !correctasElement || !incorrectasElement) return;

  rachaElement.textContent = localStorage.getItem(LS_KEYS.racha) || '0';
  correctasElement.textContent = localStorage.getItem(LS_KEYS.correctas) || '0';
  incorrectasElement.textContent = localStorage.getItem(LS_KEYS.incorrectas) || '0';
}

function lsInc(key) {
  const current = parseInt(localStorage.getItem(key) || '0');
  const next = current + 1;
  localStorage.setItem(key, String(next));
  return next;
}

// Modal info
const infomodal = document.getElementById("infomodal");
const modal = document.getElementById("modal");
const cerrarModal = document.getElementById("cerrar-modal");
infomodal?.addEventListener("click", () => modal?.classList.add("show"));
cerrarModal?.addEventListener("click", () => modal?.classList.remove("show"));

// Nota: La primera carga de frase se dispara tras cargar el JSON exitosamente.

const contenedor = document.getElementById("otras-practicas");

contenedor.innerHTML += contenedor.innerHTML;

function scrollInfinito() {
  if (contenedor.scrollLeft >= contenedor.scrollWidth / 2) {
    contenedor.scrollLeft = 0; 
  } else {
    contenedor.scrollLeft += .2; 
  }
  requestAnimationFrame(scrollInfinito);
}

scrollInfinito();
