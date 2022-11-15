let content = document.querySelector(".content");
fetch("http://localhost:8000/todolist")
  .then((res) => res.json())
  .then((todos) => {
    todos.forEach((element) => {
      let todo = document.createElement("p");
      todo.innerText = element.gdescription;
      content.append(todo);
    });
  });
