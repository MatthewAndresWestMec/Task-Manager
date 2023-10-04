const result = document.querySelector("#personId");
const result2 = document.querySelector("#taskId");
const result3 = document.querySelector("#peopleTasksList1");
const result4 = document.querySelector("#peopleTasksList2");
const fetchPeople = async () => {
    try {
        
        const  {data}  = await axios.get('/api/people')
         const  data2  = await axios.get('/api/tasks')
        const people = data.data.map((person) => {
            return `<option value="${person.id}">${person.name}</option>`;
        })
        const tasks = data2.data.data.map((task) => {
            return `<option value="${task.taskID}">${task.taskName}</option>`;
        })
        result.innerHTML = people.join("");
        result2.innerHTML = tasks.join("");
        const people2 = data.data.map((person) => {
            return `<h5 id="header${person.id}">ID:${person.id} NAME:${person.name}<br> Age: ${person.age} <br> Task: ${person.tasksAssigned} <br>  </h5>`;
        })
        const tasks3 = data2.data.data.map((task) => {
            return `<h5 taskID="header${task.taskID}">ID:${task.taskID}  TASK NAME:${task.taskName}<input type="checkbox" onchange="checkBox(${task.taskID})" taskID="${task.taskID}" name="checkFinish"><br> Desc: ${task.taskDesc} <br> </h5>`;
        });
         result3.innerHTML = people2.join("");
                 result4.innerHTML += tasks3.join("");

    } catch (error) {
        console.log(error)
    }
}
fetchPeople();


async function  assign(){
  await axios.put(`/api/all/${result.options[result.selectedIndex].value}`,{taskID: result2.options[result2.selectedIndex].value,add:true })
}

async function remove(){
  await axios.put(`/api/all/${result.options[result.selectedIndex].value}`,{taskID: result2.options[result2.selectedIndex].value,add:false })
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
