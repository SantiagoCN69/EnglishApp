let ejercicioActual;
let prepositionExercises = [];

const preguntaElement = document.getElementById("frase_a_completar");
const buttonsContainer = document.getElementById("buttons");
const optionButtons = Array.from(document.querySelectorAll('#buttons button'));
const btnReiniciar = document.getElementById("btn-reiniciar");

const notificacion = document.createElement('div');
notificacion.className = 'notificacion';
notificacion.textContent = '¡Correcto!';
document.body.appendChild(notificacion);

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
    preguntaElement.classList.remove("sin-cargar");
    optionButtons.forEach(btn => btn.classList.remove("incorrecto"));
    habilitarOpciones(true);
    
    const randomIndex = Math.floor(Math.random() * prepositionExercises.length);
    const randomExercise = prepositionExercises[randomIndex];
    
    preguntaElement.textContent = randomExercise.sentence;
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
        respuestaCorrectaf();
    } else {
        buttonEl.classList.add("incorrecto");
        localStorage.setItem("incorrectas", parseInt(localStorage.getItem("incorrectas") || 0) + 1);
        localStorage.setItem("racha", 0);
        actualizarContadores();

        setTimeout(() => {
            buttonEl.classList.remove("incorrecto");
            habilitarOpciones(true);
        }, 500);
    }
}

function habilitarOpciones(habilitar) {
    optionButtons.forEach(btn => btn.disabled = !habilitar);
}

function respuestaCorrectaf() {
    notificacion.classList.add('mostrar');
    localStorage.setItem("correctas", parseInt(localStorage.getItem("correctas") || 0) + 1);
    localStorage.setItem("racha", parseInt(localStorage.getItem("racha") || 0) + 1);
    actualizarContadores();

    setTimeout(() => {
        notificacion.classList.remove('mostrar');
        FraseRandom();
    }, 600);
}

function actualizarContadores() {
    const rachaElement = document.getElementById("racha");
    const correctasElement = document.getElementById("correctas");
    const incorrectasElement = document.getElementById("incorrectas");
    
    rachaElement.textContent = localStorage.getItem("racha") || 0;
    correctasElement.textContent = localStorage.getItem("correctas") || 0;
    incorrectasElement.textContent = localStorage.getItem("incorrectas") || 0;
}
