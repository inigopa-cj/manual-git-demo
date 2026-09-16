const tareas = document.getElementById("tareas");
const boton = document.getElementById("boton");

let contador = 1;

boton.addEventListener("click", () => {
  contador += 1;
  const nueva = document.createElement("li");
  nueva.textContent = `Tarea numero ${contador}`;
  tareas.appendChild(nueva);
});

tareas.addEventListener("click", (evento) => {
  if (evento.target.tagName === "LI") {
    evento.target.classList.toggle("completada");
  }
});
