import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    function handleSubmit() {
        if (!title.trim() || !description.trim()) {
            alert("Por favor, preencha todos os campos.");
            return;
        }
        onAddTaskSubmit(title, description);   // adiciona tarefa
        setTitle("");                          //limpa o campo
        setDescription("");
    }

    return (
        <div className="div-addtask">
            <input type="text" placeholder="Adicionar nova tarefa" className="addtask" value={title} onChange={(event) => setTitle(event.target.value)} />
            <input type="text" placeholder="Descrição da tarefa" className="addtask" value={description}
                onChange={(event) => setDescription(event.target.value)} />
            <button onClick={handleSubmit}
                className="addbtn">Adicionar</button>
        </div>
    );
}

export default AddTask;
