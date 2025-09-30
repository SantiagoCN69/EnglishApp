# Family Quiz – One by One

Aplicación web para practicar vocabulario de la familia en inglés mediante preguntas tipo flashcard.

## Cómo usar
1. Abre `FamilyQuiz.html` en tu navegador.
2. Lee la definición y selecciona la respuesta correcta entre las 5 opciones.
3. Tu racha aumenta con cada acierto. Si fallas, la racha se reinicia.
4. Toca el contador de racha para ver tu récord.
5. Usa el botón **Nueva frase** para cambiar de pregunta.

## Cómo ejecutarlo
### Opción 1: Con VS Code (recomendado)
1. Instala la extensión **Live Server** en VS Code.
2. Haz clic derecho en `FamilyQuiz.html` y selecciona **Open with Live Server**.

### Opción 2: Con Python
1. Abre una terminal en la carpeta `App ingles/`.
2. Ejecuta: `python -m http.server 5500`
3. Abre tu navegador en: `http://localhost:5500/FamilyQuiz.html`

## Uso
1. Abre `FamilyQuiz.html` en el navegador a través del servidor local.
2. Lee la definición que aparece en `“Cargando…”` y elige la opción correcta entre 5 botones.
3. **Racha** aumenta con cada acierto; al fallar se reinicia a 0. Puedes ver la **racha máxima** tocando el contador de racha (tooltip).
4. Pulsa “Nueva frase” para saltar a otra pregunta.

## Cómo agregar o editar preguntas
El archivo `family-quiz.json` contiene todas las preguntas. Para agregar o modificar:

1. Abre `family-quiz.json`
2. Añade o edita preguntas en el formato:
   ```json
   {
     "question": "Tu pregunta aquí",
     "options": ["Opción 1", "Opción 2", "Opción 3", "Opción 4", "Opción 5"],
     "answer": "La respuesta correcta"
   }
   ```
3. Asegúrate de que la respuesta coincida exactamente con una de las opciones.
4. Guarda los cambios y actualiza la página.

## Solución de problemas
- **Si las preguntas no cargan**:
  - Usa un servidor local (ver **Cómo ejecutarlo**).
  - No abras el archivo directamente con doble clic.

## Autor
Santiago Cardona

---
*Diseñado para aprendizaje de inglés familiar de forma simple y efectiva.*
