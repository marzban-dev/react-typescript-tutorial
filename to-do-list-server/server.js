const express = require("express");
const { getTodos, createTodo, removeTodo, completeTodo } = require("./db");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/todo", async (req, res) => {
    const todos = await getTodos();
    res.json(todos);
});

app.post("/todo", async (req, res) => {
    await createTodo(req.body);
    res.status(200).send();
});

app.delete("/todo/:id", async (req, res) => {
    await removeTodo(Number(req.params.id));
    res.status(204).send();
});

app.post("/todo/complete/:id", async (req, res) => {
    try {
        await completeTodo(Number(req.params.id));
        res.status(200).send();
    } catch (e) {
        res.status(404).send("This todo does not exist");
    }
});

app.listen(port, () => {
    console.log(`Todo app listening on port ${port}`);
});
