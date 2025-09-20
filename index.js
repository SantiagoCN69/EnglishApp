let ejercicioActual;
let prepositionExercises = [];
const inputRespuesta = document.getElementById("respuesta-usuario");
const preguntaElement = document.getElementById("frase_a_completar");
const notificacion = document.createElement('div');
notificacion.className = 'notificacion';
notificacion.textContent = '¡Correcto!';
document.body.appendChild(notificacion);

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
    inputRespuesta.classList.remove("correcto", "incorrecto");
    inputRespuesta.value = '';
    
    const randomIndex = Math.floor(Math.random() * prepositionExercises.length);
    const randomExercise = prepositionExercises[randomIndex];
    
    preguntaElement.textContent = randomExercise.sentence;
    console.log('Frase:', randomExercise.sentence);
    console.log('Respuesta correcta:', randomExercise.answer);

    ejercicioActual = randomExercise;
    inputRespuesta.focus();
    return randomExercise;
}


document.getElementById("btn-comprobar").addEventListener("click", comprobarRespuesta);
document.getElementById("btn-reiniciar").addEventListener("click", FraseRandom);
inputRespuesta.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        comprobarRespuesta();
    }
});

function comprobarRespuesta() {
    const respuesta = inputRespuesta.value.trim().toLowerCase();
    const respuestaCorrecta = ejercicioActual.answer;
    
    inputRespuesta.classList.remove("correcto", "incorrecto");
    
    if (respuesta === respuestaCorrecta) {
        respuestaCorrectaf()  
    } else {
        inputRespuesta.classList.add("incorrecto");
        localStorage.setItem("incorrectas", parseInt(localStorage.getItem("incorrectas") || 0) + 1);
        localStorage.setItem("racha", 0);
    }
    actualizarContadores();
}


function respuestaCorrectaf() {
    notificacion.classList.add('mostrar');
    FraseRandom();
    localStorage.setItem("correctas", parseInt(localStorage.getItem("correctas") || 0) + 1);
    localStorage.setItem("racha", parseInt(localStorage.getItem("racha") || 0) + 1);

    setTimeout(() => {
        notificacion.classList.remove('mostrar');
    }, 1000);}

actualizarContadores();

function actualizarContadores() {
    const rachaElement = document.getElementById("racha");
    const correctasElement = document.getElementById("correctas");
    const incorrectasElement = document.getElementById("incorrectas");
    
    rachaElement.textContent = localStorage.getItem("racha") || 0;
    correctasElement.textContent = localStorage.getItem("correctas") || 0;
    incorrectasElement.textContent = localStorage.getItem("incorrectas") || 0;
}

