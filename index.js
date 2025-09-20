let ejercicioActual;
let prepositionExercises = [];

const preguntaElement = document.getElementById("frase_a_completar");
const buttonsContainer = document.getElementById("buttons");
const optionButtons = Array.from(document.querySelectorAll('#buttons button'));
const btnReiniciar = document.getElementById("btn-reiniciar");
const rachaLabel = document.querySelector('nav p:nth-child(1)');



actualizarContadores();

fetch('ejercicios.json')
  .then(response => response.json())
  .then(data => {
    prepositionExercises = data.ejercicios;
    FraseRandom();
  })
  .catch(error => {
    console.error('Error al cargar los ejercicios:', error);
    preguntaElement.textContent = 'Error al cargar los ejercicios. Por favor recarga la página.';
  });

function FraseRandom() {
    preguntaElement.classList.add("animacion");
    optionButtons.forEach(btn => btn.classList.remove("incorrecto"));
    habilitarOpciones(true);
    
    const randomIndex = Math.floor(Math.random() * prepositionExercises.length);
    const randomExercise = prepositionExercises[randomIndex];
    
    setTimeout(() => {
        preguntaElement.classList.remove("sin-cargar");
        preguntaElement.textContent = randomExercise.sentence;
        preguntaElement.classList.remove("animacion");
    }, 500);

    console.log('Frase:', randomExercise.sentence);
    console.log('Respuesta correcta:', randomExercise.answer);

    ejercicioActual = randomExercise;
    return randomExercise;
}

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
        localStorage.setItem("correctas", parseInt(localStorage.getItem("correctas") || 0) + 1);
        const nuevaRacha = parseInt(localStorage.getItem("racha") || 0) + 1;
        localStorage.setItem("racha", nuevaRacha);
        const rachaMax = parseInt(localStorage.getItem("racha-max") || 0);
        if (nuevaRacha > rachaMax) {
            localStorage.setItem("racha-max", nuevaRacha);
            actualizarmaxracha()
        }
        FraseRandom();

    } else {
        buttonEl.classList.add("incorrecto");
        localStorage.setItem("incorrectas", parseInt(localStorage.getItem("incorrectas") || 0) + 1);
        localStorage.setItem("racha", 0);
    }
    actualizarContadores();
    habilitarOpciones(true);
    setTimeout(() => {
        buttonEl.classList.remove("correcto", "incorrecto");
    }, 500);
}

function habilitarOpciones(habilitar) {
    optionButtons.forEach(btn => btn.disabled = !habilitar);
}

function actualizarmaxracha() {
    rachaLabel.setAttribute('data-icon', "Racha Max: 🔥 " + localStorage.getItem("racha-max"));
}
actualizarmaxracha()

function actualizarContadores() {
    const rachaElement = document.getElementById("racha");
    const correctasElement = document.getElementById("correctas");
    const incorrectasElement = document.getElementById("incorrectas");
    
    rachaElement.textContent = localStorage.getItem("racha") || 0;
    correctasElement.textContent = localStorage.getItem("correctas") || 0;
    incorrectasElement.textContent = localStorage.getItem("incorrectas") || 0;
}

const infomodal = document.getElementById("infomodal");
const modal = document.getElementById("modal");
const cerrarModal = document.getElementById("cerrar-modal");     
infomodal.addEventListener("click", () => { 
    modal.classList.add("show");
});
cerrarModal.addEventListener("click", () => { 
    modal.classList.remove("show");
});
