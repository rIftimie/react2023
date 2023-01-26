export async function getAllTasks() {
    try {
        const response = await fetch("http://localhost:3001/notes");
        const json = await response.json();
        return json;
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function addTask(task) {
    try {
        const response = await fetch("http://localhost:3001/notes", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task),
        });
        const json = await response.json();
        return json;
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function deleteTask(id) {
    try {
        const response = await fetch(`http://localhost:3001/notes/${id}`, {
            method: "DELETE",
        });
        const json = await response.json();
        return json;
    } catch (error) {
        throw new Error(error.message);
    }
}
export async function editTaskBy(task) {
    try {
        const response = await fetch(`http://localhost:3001/notes/${task.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task),
        });
        const json = await response.json();
        return json;
    } catch (error) {
        throw new Error(error.message);
    }
}
