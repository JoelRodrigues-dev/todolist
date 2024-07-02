const inputElement = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-button");
const tasksContainer = document.querySelector(".task-container");

const validateInput = () => inputElement.value.trim().length > 0;

const handleAddTasks = () => {
  const inputIsValid = validateInput();

  if (!inputIsValid) {
    return inputElement.classList.add("Error");
  }

  const taskItemContainer = document.createElement("div");
  taskItemContainer.classList.add("task-item");

  const nameTask = document.createElement("p");
  nameTask.innerText = inputElement.value;

  nameTask.addEventListener("click", () => handleClick(nameTask));

  const deleteItem = document.createElement("i");
  deleteItem.classList.add("fa-solid");
  deleteItem.classList.add("fa-trash");

  deleteItem.addEventListener("click", () =>
    handleDeleteClick(taskItemContainer, nameTask)
  );

  taskItemContainer.appendChild(nameTask);
  taskItemContainer.appendChild(deleteItem);

  tasksContainer.appendChild(taskItemContainer);

  inputElement.value = "";
};

const handleClick = (nameTask) => {
  const tasks = tasksContainer.childNodes;

  for (const task of tasks) {
    if (task.firstChild.isSameNode(nameTask)) {
      task.firstChild.classList.toggle("completed");
    }
  }
};

const handleDeleteClick = (taskItemContainer, nameTask) => {
  const tasks = tasksContainer.childNodes;

  for (const task of tasks) {
    if (task.firstChild.isSameNode(nameTask)) {
      taskItemContainer.remove();
    }
  }
};

const handleInputChange = () => {
  const inputIsValid = validateInput();

  if (inputIsValid) {
    return inputElement.classList.remove("error");
  }
};

addTaskButton.addEventListener("click", () => handleAddTasks());
inputElement.addEventListener("change", () => handleInputChange());
