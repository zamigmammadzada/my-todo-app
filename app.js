const form = document.getElementById("input");
const input = document.getElementById("todo-input");
const list = document.querySelector(".task-list");
const deleteAll = document.querySelector(".deleteAllTodos");
const group = document.querySelector(".input-group");

eventListeners();

function eventListeners() {
  form.addEventListener("submit", newTodo);
  list.addEventListener("click", deleteTodo);
  deleteAll.addEventListener("click", deleteAllTodos);
}

function deleteAllTodos() {
  if (confirm("Hamısını silmək istədiyinizə əminsinizmi?")) {
    while (list.firstElementChild != null) {
      list.removeChild(list.firstElementChild);
      form.childNodes[5].style.display = "none";
    }
  }
}

function deleteTodo(e) {
  if (e.target.className === "fa-solid fa-xmark") {
    e.target.parentElement.remove();
    showAlert("success", "Silindi!");

    if (list.childNodes.length > 1) {
      form.childNodes[5].style.display = "";
    } else {
      form.childNodes[5].style.display = "none";
    }
  }
}

function newTodo(e) {
  if (input.value === "") {
    showAlert("danger", "Əlavə etdiyiniz TODO boşdur!");
  } else {
    let listElement = document.createElement("li");
    listElement.innerHTML = `<h4>${input.value}`;
    let icon = document.createElement("i");
    icon.classList = "fa-solid fa-xmark";
    listElement.appendChild(icon);
    list.appendChild(listElement);
    input.value = "";
    form.childNodes[5].style.display = "";
    showAlert("success", "Uğurla əlavə edildi!");
  }

  e.preventDefault();
}

function showAlert(type, message) {
  let alert = document.createElement("div");
  alert.className = `${type}`;
  alert.textContent = message;
  group.appendChild(alert);
  setTimeout(function () {
    alert.remove();
  }, 1500);
}