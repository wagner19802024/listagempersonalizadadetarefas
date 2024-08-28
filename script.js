document.getElementById('add-todo').addEventListener('click', function() {
  const todoInput = document.getElementById('todo-input');
  const todoText = todoInput.value;
  
  if (todoText === '') return;

  const todoList = document.getElementById('todo-list');
  const li = document.createElement('li');
  li.textContent = todoText;

  li.addEventListener('click', function() {
      li.classList.toggle('completed');
  });

  li.addEventListener('dblclick', function() {
      todoList.removeChild(li);
  });

  todoList.appendChild(li);
  todoInput.value = '';
});

document.getElementById('background-image').addEventListener('change', function(event) {
  const reader = new FileReader();
  reader.onload = function() {
      document.body.style.backgroundImage = `url(${reader.result})`;
  }
  reader.readAsDataURL(event.target.files[0]);
});

document.getElementById('background-color').addEventListener('input', function(event) {
  document.body.style.backgroundColor = event.target.value;
});
