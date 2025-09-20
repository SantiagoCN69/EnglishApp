const prepositionExercises = [
    { sentence: "I was born ___ July.", answer: "in" },
    { sentence: "She lives ___ New York City.", answer: "in" },
    { sentence: "The meeting is ___ 3 PM.", answer: "at" },
    { sentence: "He put the book ___ the table.", answer: "on" },
    { sentence: "We met ___ the park yesterday.", answer: "in" },
    { sentence: "The cat is sleeping ___ the sofa.", answer: "on" },
    { sentence: "I will see you ___ Monday.", answer: "on" },
    { sentence: "She was waiting ___ the bus stop.", answer: "at" },
    { sentence: "They arrived ___ the airport late.", answer: "at" },
    { sentence: "My birthday is ___ December.", answer: "in" },
    { sentence: "The picture is hanging ___ the wall.", answer: "on" },
    { sentence: "He lives ___ a small village.", answer: "in" },
    { sentence: "The train leaves ___ 9:30 AM.", answer: "at" },
    { sentence: "The keys are ___ the drawer.", answer: "in" },
    { sentence: "We have a party ___ Friday.", answer: "on" },
    { sentence: "She is waiting ___ the restaurant.", answer: "at" },
    { sentence: "I left my phone ___ the car.", answer: "in" },
    { sentence: "The book is ___ the shelf.", answer: "on" },
    { sentence: "He will come ___ night.", answer: "at" },
    { sentence: "We went skiing ___ the Alps.", answer: "in" },
    { sentence: "The plane is flying ___ the clouds.", answer: "in" },
    { sentence: "He is sitting ___ the chair.", answer: "on" },
    { sentence: "I will meet you ___ the library.", answer: "at" },
    { sentence: "The flowers are ___ the garden.", answer: "in" },
    { sentence: "She is ___ the phone right now.", answer: "on" },
    { sentence: "We stayed ___ a hotel near the beach.", answer: "in" },
    { sentence: "The concert starts ___ 8 PM.", answer: "at" },
    { sentence: "There is a stain ___ your shirt.", answer: "on" },
    { sentence: "He is traveling ___ Europe this summer.", answer: "in" },
    { sentence: "I will call you ___ Monday morning.", answer: "on" },
    { sentence: "She is waiting ___ the corner.", answer: "at" },
    { sentence: "The milk is ___ the fridge.", answer: "in" },
    { sentence: "The pen is ___ the table.", answer: "on" },
    { sentence: "The train arrives ___ noon.", answer: "at" },
    { sentence: "We are walking ___ the park.", answer: "in" },
    { sentence: "The picture is ___ the wall.", answer: "on" },
    { sentence: "He is ___ work right now.", answer: "at" },
    { sentence: "I put the letter ___ the envelope.", answer: "in" },
    { sentence: "We met ___ the restaurant yesterday.", answer: "at" },
    { sentence: "The cat jumped ___ the table.", answer: "on" },
    { sentence: "They are ___ a small town.", answer: "in" },
    { sentence: "The show starts ___ 7 PM.", answer: "at" },
    { sentence: "I found your keys ___ the drawer.", answer: "in" },
    { sentence: "The notes are ___ the notebook.", answer: "in" },
    { sentence: "He is sitting ___ the bench.", answer: "on" },
    { sentence: "We stayed ___ a cottage in the mountains.", answer: "in" },
    { sentence: "She left her bag ___ the floor.", answer: "on" },
    { sentence: "The party is ___ Saturday night.", answer: "on" },
    { sentence: "They arrived ___ the airport on time.", answer: "at" },
    { sentence: "The keys are ___ my pocket.", answer: "in" },
    { sentence: "The picture is ___ the wall above the sofa.", answer: "on" },
    { sentence: "He will be ___ the meeting tomorrow.", answer: "at" },
    { sentence: "I put the clothes ___ the wardrobe.", answer: "in" },
    { sentence: "She lives ___ the city center.", answer: "in" },
    { sentence: "We went shopping ___ Saturday.", answer: "on" },
    { sentence: "The book is ___ the desk.", answer: "on" },
    { sentence: "The train arrives ___ 5:30 PM.", answer: "at" },
    { sentence: "He is ___ the bus stop.", answer: "at" },
    { sentence: "I left my wallet ___ the car.", answer: "in" },
    { sentence: "The cat is ___ the roof.", answer: "on" },
    { sentence: "We met ___ the cafe.", answer: "at" },
    { sentence: "The flowers are ___ the vase.", answer: "in" },
    { sentence: "She is ___ a call right now.", answer: "on" },
    { sentence: "They stayed ___ a hotel near the beach.", answer: "in" },
    { sentence: "The concert starts ___ 9 PM.", answer: "at" },
    { sentence: "There is a stain ___ the carpet.", answer: "on" },
    { sentence: "He is traveling ___ Asia.", answer: "in" },
    { sentence: "I will see you ___ Tuesday.", answer: "on" },
    { sentence: "She is waiting ___ the bus stop.", answer: "at" },
    { sentence: "The milk is ___ the fridge.", answer: "in" },
    { sentence: "The pen is ___ the desk.", answer: "on" },
    { sentence: "The train leaves ___ 8 AM.", answer: "at" },
    { sentence: "We are walking ___ the streets of Paris.", answer: "in" },
    { sentence: "The picture is ___ the wall in the living room.", answer: "on" },
    { sentence: "He is ___ the office.", answer: "at" },
    { sentence: "I put the letter ___ the envelope.", answer: "in" },
    { sentence: "We met ___ the restaurant.", answer: "at" },
    { sentence: "The cat jumped ___ the chair.", answer: "on" },
    { sentence: "They are ___ a small village.", answer: "in" },
    { sentence: "The show starts ___ 6 PM.", answer: "at" },
    { sentence: "I found your keys ___ the drawer.", answer: "in" },
    { sentence: "The notes are ___ the notebook.", answer: "in" },
    { sentence: "He is sitting ___ the sofa.", answer: "on" },
    { sentence: "We stayed ___ a cabin in the forest.", answer: "in" },
    { sentence: "She left her bag ___ the chair.", answer: "on" },
    { sentence: "The party is ___ Friday.", answer: "on" },
    { sentence: "They arrived ___ the train station.", answer: "at" },
    { sentence: "The keys are ___ my bag.", answer: "in" },
    { sentence: "The picture is ___ the wall in the hallway.", answer: "on" },
    { sentence: "He will be ___ the conference tomorrow.", answer: "at" },
    { sentence: "I put the clothes ___ the wardrobe.", answer: "in" },
    { sentence: "She lives ___ the countryside.", answer: "in" },
    { sentence: "We went shopping ___ Sunday.", answer: "on" },
    { sentence: "The book is ___ the table.", answer: "on" },
    { sentence: "The train arrives ___ 3 PM.", answer: "at" },
    { sentence: "He is ___ the bus station.", answer: "at" },
    { sentence: "I left my wallet ___ the car.", answer: "in" },
    { sentence: "The cat is ___ the roof.", answer: "on" },
    { sentence: "We met ___ the cafe.", answer: "at" },
    { sentence: "The flowers are ___ the vase.", answer: "in" },
    { sentence: "She is ___ a call right now.", answer: "on" },
    { sentence: "They stayed ___ a hotel downtown.", answer: "in" },
    { sentence: "The concert starts ___ 10 PM.", answer: "at" },
    { sentence: "There is a stain ___ the table.", answer: "on" },
    { sentence: "He is traveling ___ South America.", answer: "in" },
    { sentence: "I will see you ___ Wednesday.", answer: "on" },
    { sentence: "She is waiting ___ the train station.", answer: "at" }
  ];

let ejercicioActual;
const inputRespuesta = document.getElementById("respuesta-usuario");
const preguntaElement = document.getElementById("frase_a_completar");
const notificacion = document.createElement('div');
notificacion.className = 'notificacion';
notificacion.textContent = '¡Correcto!';
document.body.appendChild(notificacion);

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

FraseRandom();

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

