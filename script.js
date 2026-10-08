// Seleção dos elementos do DOM
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const filterBtns = document.querySelectorAll('.filter-btn');
const taskCount = document.getElementById('task-count');
const clearCompletedBtn = document.getElementById('clear-completed');

// Estado das tarefas (recupera do localStorage se existir)
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let currentFilter = 'all';

// Salvar no LocalStorage
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Atualizar contador de pendências
function updateCounter() {
  const pendingTasks = tasks.filter(task => !task.completed).length;
  taskCount.textContent = `${pendingTasks} ${pendingTasks === 1 ? 'tarefa pendente' : 'tarefas pendentes'}`;
}

// Renderizar lista de tarefas
function renderTasks() {
  taskList.innerHTML = '';

  const filteredTasks = tasks.filter(task => {
    if (currentFilter === 'pending') return !task.completed;
    if (currentFilter === 'completed') return task.completed;
    return true;
  });

  filteredTasks.forEach(task => {
    const li = document.createElement('li');
    li.className = `task-item ${task.completed ? 'completed' : ''}`;

    li.innerHTML = `
      <div class="task-content">
        <input type="checkbox" ${task.completed ? 'checked' : ''} data-id="${task.id}">
        <span class="task-text">${escapeHTML(task.text)}</span>
      </div>
      <button class="delete-btn" data-id="${task.id}">&times;</button>
    `;

    taskList.appendChild(li);
  });

  updateCounter();
}

// Função para evitar inserção de HTML malicioso (XSS)
function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}

// Adicionar nova tarefa
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = taskInput.value.trim();

  if (text !== '') {
    const newTask = {
      id: Date.now().toString(),
      text: text,
      completed: false
    };

    tasks.push(newTask);
    saveTasks();
    renderTasks();
    taskInput.value = '';
  }
});

// Manipular cliques na lista (Marcar como concluída ou Deletar)
taskList.addEventListener('click', (e) => {
  const target = e.target;
  const id = target.getAttribute('data-id');

  if (!id) return;

  if (target.tagName === 'INPUT') {
    tasks = tasks.map(task => 
      task.id === id ? { ...task, completed: target.checked } : task
    );
  } else if (target.classList.contains('delete-btn')) {
    tasks = tasks.filter(task => task.id !== id);
  }

  saveTasks();
  renderTasks();
});

// Filtros
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderTasks();
  });
});

// Limpar tarefas concluídas
clearCompletedBtn.addEventListener('click', () => {
  tasks = tasks.filter(task => !task.completed);
  saveTasks();
  renderTasks();
});

// Inicialização
renderTasks();