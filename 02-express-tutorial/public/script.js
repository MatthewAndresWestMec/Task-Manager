const result = document.querySelector(".result");
var editMode = false;

const fetchPeople = async () => {
    try {
        const { data } = await axios.get('/api/people')
        console.log(data);

        const people = data.data.map((person) => {
            return `<h5>ID:${person.id}  TASK NAME:${person.name}<input type="checkbox" class="checkFinish" name="checkFinish"><br> Desc: ${person.desc} <br><button onclick="nameEdit('${person.id}', '${person.name}','${person.desc}')">Edit</button> <button onclick="deletePeople(${person.id})">Delete</button>  </h5>`;
        })
        result.innerHTML = people.join("");
    } catch (error) {

        formAlert.textContent = error.response.data.msg;
    }
}
fetchPeople();

// HTML
const btn = document.querySelector(".submit-btn");
const input = document.querySelector(".form-input");
const inputDesc = document.querySelector(".form-input-desc");
const formAlert = document.querySelector(".form-alert");

btn.addEventListener("click", async (e) => {
    e.preventDefault();
    const nameValue = input.value;
    const descValue = inputDesc.value;
    try {
        if (editMode == false) {
            const { data } = await axios.post('/api/people', { name: nameValue, desc: descValue });
            const h5 = document.createElement('h5');
            result.appendChild(h5);
            h5.textContent = data.person;
        } else {
            const newName = input.value;
            const newDesc = inputDesc.value;
            fetch(`/api/people/${currentID}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: newName, desc: newDesc })
            })
            fetchPeople();
            editMode = false;
        }
        fetchPeople();
    } catch (error) {
        console.log(error.response)
        formAlert.textContent = error.response.data.msg;
    }
    input.value = "";
    inputDesc.value = "";
})

function deletePeople(id) {
    fetch(`/api/people/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    })
    fetchPeople();
}

var currentID = '';

function nameEdit(pId, pName, desc) {
    editMode = true;
    input.value = pName;
    inputDesc.value = desc;
    currentID = pId;
}