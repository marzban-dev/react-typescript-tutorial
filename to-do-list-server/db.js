const fs = require("fs/promises");

exports.getTodos = async () => {
    const todosJson = await fs.readFile("./todos.json");
    const todos = JSON.parse(todosJson);
    return todos;
};

exports.createTodo = async (todoData) => {
    const todosJson = await fs.readFile("./todos.json");
    const todos = JSON.parse(todosJson);
    const newTodos = [...todos, { id: todos.length + 1, ...todoData, completed: false }];
    await fs.writeFile("./todos.json", JSON.stringify(newTodos));
};

exports.completeTodo = async (id) => {
    const todosJson = await fs.readFile("./todos.json");
    const todos = JSON.parse(todosJson);
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    todos[todoIndex].completed = !todos[todoIndex].completed;
    await fs.writeFile("./todos.json", JSON.stringify(todos));
};

exports.removeTodo = async (id) => {
    const todosJson = await fs.readFile("./todos.json");
    const todos = JSON.parse(todosJson);
    const newTodos = todos.filter((todo) => todo.id !== id);
    await fs.writeFile("./todos.json", JSON.stringify(newTodos));
};
