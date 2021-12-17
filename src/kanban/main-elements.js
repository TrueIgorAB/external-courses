let boards;

initBoards();

function getBoards() {
  const storedItems = localStorage.getItem('boards');
  if (storedItems) {
    return JSON.parse(storedItems);
  }
  return [
    {
      title: 'Backlog',
      id: 'backlog',
      issues: [
        {
          id: 'task1',
          name: 'Sprint bugfix',
        },
        {
          id: 'task2',
          name: 'Sprint bugfix 1',
        },
        {
          id: 'task3',
          name: 'Sprint bugfix 2',
        },
      ],
    },
    {
      title: 'Ready',
      id: 'ready',
      issues: [
        {
          id: 'Ready',
          name: 'Ready bugfix',
        },
        {
          id: 'Ready 2',
          name: 'Ready bugfix 1',
        },
        {
          id: 'Ready 3',
          name: 'Ready bugfix 2',
        },
      ],
    },
    {
      title: 'In progress',
      id: 'progress',
      issues: [
        {
          id: 'Progress',
          name: 'Progress bugfix',
        },
        {
          id: 'Progress 2',
          name: 'Progress bugfix 1',
        },
        {
          id: 'Progress 3',
          name: 'Progress bugfix 2',
        },
      ],
    },
    {
      title: 'Finished',
      id: 'finished',
      issues: [
        {
          id: 'Finished',
          name: 'Finished bugfix',
        },
        {
          id: 'Finished 2',
          name: 'Finished bugfix 1',
        },
        {
          id: 'Finished 3',
          name: 'Finished bugfix 2',
        },
      ],
    },
  ];
}

function initBoards() {
  boards = getBoards();
  boards.forEach((board, i) => {
    addIssuesOnBoard(board.issues, `${board.id}-tasks`);
    if (!board.issues.length) {
      if (i !== boards.length - 1) {
        const button = document.getElementById(`${boards[i + 1].id}-add`);
        button.disabled = true;
      }
    }
  });
}

function addIssuesOnBoard(issues, boardId) {
  const element = document.getElementById(boardId);
  issues.forEach((issue) => {
    const item = document.createElement('li');
    item.innerText = issue.name;
    item.id = issue.id;
    element.appendChild(item);
  });
}

function getBoardById(id) {
  return boards.find((board) => board.id === id);
}

function updateLocalStorage() {
  localStorage.setItem('boards', JSON.stringify(boards));
}

function showNewBacklogField() {
  const list = document.getElementById('backlog-tasks');
  const field = document.createElement('input');
  field.className = 'input';
  field.addEventListener('blur', function (event) {
    const board = getBoardById('backlog');
    const newIssue = { name: this.value, id: this.value.replace(/ /g, '') };
    board.issues.push(newIssue);
    list.removeChild(this);
    const item = document.createElement('li');
    item.innerText = newIssue.name;
    item.id = newIssue.id;
    list.appendChild(item);
    if (board.issues.length === 1) {
      const nextButton = document.getElementById('ready-add');
      nextButton.disabled = false;
    }
    updateLocalStorage();
  });
  list.appendChild(field);
}

function getIssueFrom(boardId, issueId) {
  const issues = getBoardById(boardId).issues;
  const index = issues.findIndex((issue) => issue.id === issueId);
  return issues.splice(index, 1)[0];
}

function showDropdown(current, previous, next) {
  const list = document.getElementById(`${current}-tasks`);
  const field = document.createElement('select');
  const empty = document.createElement('option');
  field.className = 'field';
  empty.className = 'issue-option';
  empty.value = '';
  empty.innerText = 'Please select';
  field.appendChild(empty);
  getBoardById(previous).issues.forEach((issue) => {
    const option = document.createElement('option');
    option.className = 'issue-option';
    option.value = issue.id;
    option.innerText = issue.name;
    field.appendChild(option);
  });
  field.addEventListener('change', function (event) {
    console.log(this.value);
    const newIssue = getIssueFrom(previous, this.value);

    document.getElementById(newIssue.id).remove();
    if (!getBoardById(previous).issues.length) {
      const currentButton = document.getElementById(`${current}-add`);
      currentButton.disabled = true;
    }

    const board = getBoardById(current);
    board.issues.push(newIssue);
    if (board.issues.length === 1 && next) {
      const nextButton = document.getElementById(`${next}-add`);
      nextButton.disabled = false;
    }

    list.removeChild(this);
    const item = document.createElement('li');
    item.innerText = newIssue.name;
    item.id = newIssue.id;
    list.appendChild(item);
    updateLocalStorage();
  });
  list.appendChild(field);
}
