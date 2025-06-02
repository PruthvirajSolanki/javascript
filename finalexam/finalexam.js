    const form = document.getElementById('task-form');
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const dueDate = document.getElementById('dueDate');
    const cancelEdit = document.getElementById('cancelEdit');
    const tableBody = document.querySelector('#task-table tbody');
    const filter = document.getElementById('filter');
    const counter = document.getElementById('counter');
    const emptyMsg = document.getElementById('empty');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    let editingId = null;

    function saveTasks() 
    {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function renderTasks() 
    {
      const value = filter.value;
      let filtered = [...tasks];

      if (value !== 'all') 
      {
        const isCompleted = value === 'completed';
        filtered = filtered.filter(t => t.completed === isCompleted);
      }

      filtered.sort((a, b) => new Date(a.dueDate || '') - new Date(b.dueDate || ''));

      tableBody.innerHTML = '';
      if (filtered.length === 0) 
      {
        emptyMsg.style.display = 'block';
      } else 
      {
        emptyMsg.style.display = 'none';
      }

      filtered.forEach(task => 
      {
        const row = document.createElement('tr');
        if (task.completed) row.classList.add('completed');

        row.innerHTML = `
          <td>${task.title}</td>
          <td>${task.description}</td>
          <td>${task.dueDate || 'No date'}</td>
          <td>${task.completed ? 'Completed' : 'Pending'}</td>
          <td>
            <button onclick="toggle(${task.id})">${task.completed ? 'Undo' : 'Done'}</button>
            <button onclick="edit(${task.id})">Edit</button>
            <button onclick="remove(${task.id})">Delete</button>
          </td>
        `;
        tableBody.appendChild(row);
      });

      const total = tasks.length;
      const done = tasks.filter(t => t.completed).length;
      counter.textContent = `${total} tasks — ${done} completed — ${total - done} pending`;
    }

    function addTask(task) 
    {
      tasks.push(task);
      saveTasks();
      renderTasks();
    }

    function updateTask(id, updated) 
    {
      tasks = tasks.map(task => task.id === id ? { ...task, ...updated } : task);
      editingId = null;
      cancelEdit.style.display = 'none';
      form.reset();
      saveTasks();
      renderTasks();
    }

    function remove(id) 
    {
      if (confirm('Delete this task?')) {
        tasks = tasks.filter(t => t.id !== id);
        saveTasks();
        renderTasks();
      }
    }

    function toggle(id) 
    {
      tasks = tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
      saveTasks();
      renderTasks();
    }

    function edit(id) 
    {
      const task = tasks.find(t => t.id === id);
      if (!task) return;

      title.value = task.title;
      description.value = task.description;
      dueDate.value = task.dueDate || '';
      editingId = id;
      cancelEdit.style.display = 'inline';
    }

    form.addEventListener('submit', e => {
      e.preventDefault();
      const newTask = {
        id: Date.now(),
        title: title.value.trim(),
        description: description.value.trim(),
        dueDate: dueDate.value,
        completed: false
      };
      if (!newTask.title || !newTask.description) return alert("Fill in all fields");

      if (editingId) 
      {
        updateTask(editingId, newTask);
      } else 
      {
        addTask(newTask);
        form.reset();
      }
    });

    cancelEdit.addEventListener('click', () => {
      editingId = null;
      form.reset();
      cancelEdit.style.display = 'none';
    });

    filter.addEventListener('change', renderTasks);

    window.toggle = toggle;
    window.edit = edit;
    window.remove = remove;

    renderTasks();