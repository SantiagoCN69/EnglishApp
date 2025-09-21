// Family Quiz — Minimalista uno por uno
// Comentario profesional: Juego tipo "flashcard" con 5 opciones, racha y métricas separadas del resto.

let preguntaActual = null;
let banco = [];

const preguntaEl = document.getElementById('frase_a_completar');
const botonesWrap = document.getElementById('buttons');
const btnReiniciar = document.getElementById('btn-reiniciar');
const rachaLabel = document.querySelector('nav p:nth-child(1)');

const LS = {
  racha: 'famq-racha',
  rachaMax: 'famq-racha-max',
  correctas: 'famq-correctas',
  incorrectas: 'famq-incorrectas',
};

// Cargar banco
fetch('family-quiz.json')
  .then(r => r.json())
  .then(data => {
    banco = Array.isArray(data?.preguntas) ? data.preguntas : [];
    if (!banco.length) throw new Error('Sin preguntas');
    actualizarContadores();
    actualizarMaxRacha();
    nuevaPregunta();
  })
  .catch(err => {
    console.error('Error cargando family-quiz.json', err);
    if (preguntaEl) {
      preguntaEl.textContent = 'Error al cargar las preguntas. Recarga la página.';
      preguntaEl.classList.remove('sin-cargar');
    }
  });

btnReiniciar?.addEventListener('click', nuevaPregunta);

function nuevaPregunta() {
  if (!banco.length) return;
  disableButtons(false);
  preguntaEl.classList.add('animacion');

  const idx = Math.floor(Math.random() * banco.length);
  const q = banco[idx];
  preguntaActual = q;

  setTimeout(() => {
    preguntaEl.classList.remove('sin-cargar');
    preguntaEl.textContent = q.question;
    preguntaEl.classList.remove('animacion');
    renderOpciones(q);
  }, 250);
}

function renderOpciones(q) {
  const opciones = shuffle([...q.options]);
  botonesWrap.innerHTML = '';

  opciones.forEach(opt => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.value = opt;
    btn.textContent = opt.toUpperCase();
    btn.addEventListener('click', () => onOpcion(btn));
    botonesWrap.appendChild(btn);
  });
}

function onOpcion(buttonEl) {
  if (!preguntaActual) return;
  const respuesta = String(buttonEl.value || '').trim();
  const correcta = String(preguntaActual.answer || '').trim();

  disableButtons(true);

  if (respuesta.toLowerCase() === correcta.toLowerCase()) {
    buttonEl.classList.add('correcto');
    inc(LS.correctas);
    const r = inc(LS.racha);
    const max = parseInt(localStorage.getItem(LS.rachaMax) || '0');
    if (r > max) {
      localStorage.setItem(LS.rachaMax, String(r));
      actualizarMaxRacha();
    }
    setTimeout(() => {
      buttonEl.classList.remove('correcto');
      disableButtons(false);
      nuevaPregunta();
    }, 350);
  } else {
    buttonEl.classList.add('incorrecto');
    inc(LS.incorrectas);
    localStorage.setItem(LS.racha, '0');
    setTimeout(() => {
      buttonEl.classList.remove('incorrecto');
      disableButtons(false);
      actualizarContadores();
    }, 400);
  }
  actualizarContadores();
}

function disableButtons(dis) {
  const arr = Array.from(botonesWrap.querySelectorAll('button'));
  arr.forEach(b => b.disabled = dis);
}

function actualizarMaxRacha() {
  if (!rachaLabel) return;
  const max = localStorage.getItem(LS.rachaMax) || '0';
  rachaLabel.setAttribute('data-icon', `Racha Max: 🔥 ${max}`);
}

function actualizarContadores() {
  document.getElementById('racha').textContent = localStorage.getItem(LS.racha) || '0';
  document.getElementById('correctas').textContent = localStorage.getItem(LS.correctas) || '0';
  document.getElementById('incorrectas').textContent = localStorage.getItem(LS.incorrectas) || '0';
}

function inc(key) {
  const n = parseInt(localStorage.getItem(key) || '0') + 1;
  localStorage.setItem(key, String(n));
  return n;
}

// Utilidad: mezclar
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Modal info
const infomodal = document.getElementById('infomodal');
const modal = document.getElementById('modal');
const cerrarModal = document.getElementById('cerrar-modal');
infomodal?.addEventListener('click', () => modal?.classList.add('show'));
cerrarModal?.addEventListener('click', () => modal?.classList.remove('show'));

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
