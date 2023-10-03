const result = document.querySelector(".result");
var editMode = false;

const fetchTasks = async () => {
    try {
        const { data } = await axios.get('/api/tasks');
        console.log(data);

        const tasks = data.data.map((task) => {
            return `<h5 taskID="header${task.taskID}">ID:${task.taskID}  TASK NAME:${task.taskName}<input type="checkbox" onchange="checkBox(${task.taskID})" taskID="${task.taskID}" name="checkFinish"><br> Desc: ${task.taskDesc} <br><button onclick="taskNameEdit('${task.taskID}', '${task.taskName}', '${task.taskDesc}')">Edit</button> <button onclick="deleteTask(${task.taskID})">Delete</button>  </h5>`;
        });
        result.innerHTML = tasks.join("");
    } catch (error) {
        formAlert.textContent = error.response.data.msg;
    }
};
fetchTasks();

// HTML
const btn = document.querySelector(".submit-btn");
const input = document.querySelector(".form-input");
const inputDesc = document.querySelector(".form-input-taskDesc");
const formAlert = document.querySelector(".form-alert");

btn.addEventListener("click", async (e) => {
    e.preventDefault();
    const taskNameValue = input.value;
    const taskDescValue = inputDesc.value;
    try {
        if (editMode === false) {
            const { data } = await axios.post('/api/tasks', { taskName: taskNameValue, taskDesc: taskDescValue });
            const h5 = document.createElement('h5');
            result.appendChild(h5);
            h5.textContent = `ID:${data.taskID}  TASK NAME:${data.taskName} <br> Desc: ${data.taskDesc} <br><button onclick="taskNameEdit('${data.taskID}', '${data.taskName}', '${data.taskDesc}')">Edit</button> <button onclick="deleteTask('${data.taskID}')">Delete</button>`;
        } else {
            const newName = input.value;
            const newDesc = inputDesc.value;
            await fetch(`/api/tasks/${currentID}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ taskName: newName, taskDesc: newDesc })
            });
            fetchTasks();
            editMode = false;
        }
    } catch (error) {
        console.log(error.response);
        formAlert.textContent = error.response.data.msg;
    }
    input.value = "";
    inputDesc.value = "";
});

function deleteTask(taskID) {
    fetch(`/api/tasks/${taskID}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });
    fetchTasks();
}

var currentID = '';

// autofills inputs with taskNames
function taskNameEdit(taskID, taskName, taskDesc) {
    editMode = true;
    input.value = taskName;
    inputDesc.value = taskDesc; // Set inputDesc value to taskDesc
    currentID = taskID;
}

function checkBox(taskID) {
    // only uses taskID for adding decoration
    let chkBox = document.querySelector(`input[taskID="${taskID}"]`);
    if (chkBox.checked === true) {
        // Uses ID of the h5 tag to add/remove decoration
        document.querySelector(`h5[taskID="header${taskID}"]`).style.textDecoration = "line-through";
        document.querySelector(`h5[taskID="header${taskID}"]`).style.backgroundColor = "gray";
    } else {
        document.querySelector(`h5[taskID="header${taskID}"]`).style.textDecoration = "none";
        document.querySelector(`h5[taskID="header${taskID}"]`).style.backgroundColor = "#f2f4f8";
    }
}
