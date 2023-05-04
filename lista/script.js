let inputTarefa = document.getElementById("tarefa");
let listaTarefas = document.getElementById("lista-tarefas");

function adicionarTarefa() {
  let tarefa = inputTarefa.value;
  if (tarefa !== "") {
    let novaTarefa = document.createElement("li");
    novaTarefa.innerText = tarefa;
    listaTarefas.appendChild(novaTarefa);
    inputTarefa.value = "";
  }
}
