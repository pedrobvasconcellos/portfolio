const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
const toggleThemeBtn = document.getElementById("toggle-theme");

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

function salvarTarefas() {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function renderTarefas() {
  taskList.innerHTML = "";
  tarefas.forEach((tarefa, index) => {
    const li = document.createElement("li");
    li.className = tarefa.feita ? "completed" : "";

    const span = document.createElement("span");
    span.textContent = tarefa.texto;
    li.appendChild(span);

    const btns = document.createElement("div");
    btns.className = "task-buttons";

    const doneBtn = document.createElement("button");
    doneBtn.textContent = tarefa.feita ? "↩️" : "✔️";
    doneBtn.onclick = () => {
      tarefas[index].feita = !tarefas[index].feita;
      salvarTarefas();
      renderTarefas();
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.onclick = () => {
      tarefas.splice(index, 1);
      salvarTarefas();
      renderTarefas();
    };

    btns.appendChild(doneBtn);
    btns.appendChild(deleteBtn);
    li.appendChild(btns);
    taskList.appendChild(li);
  });
}

addTaskBtn.onclick = () => {
  const texto = taskInput.value.trim();
  if (texto) {
    tarefas.push({ texto, feita: false });
    taskInput.value = "";
    salvarTarefas();
    renderTarefas();
  }
};

toggleThemeBtn.onclick = () => {
  document.body.classList.toggle("dark");
  toggleThemeBtn.textContent = document.body.classList.contains("dark")
    ? "☀️ Modo Claro"
    : "🌙 Modo Escuro";
};

renderTarefas();
