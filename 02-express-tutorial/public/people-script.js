const result = document.querySelector(".resultPeople");
var editMode = false;

const fetchPeople = async () => {
    try {
        const { data } = await axios.get('/api/people')
        console.log(data);

        const people = data.data.map((person) => {
            return `<h5 id="header${person.id}">ID:${person.id}  TASK NAME:${person.name}<input type="checkbox" onchange="checkBox(${person.id})" id="${person.id}""name="checkFinish"><br> Age: ${person.age} <br><button onclick="nameEdit('${person.id}', '${person.name}','${person.age}')">Edit</button> <button onclick="deletePeople(${person.id})">Delete</button>  </h5>`;
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
const inputAge = document.querySelector(".form-input-age");
const formAlert = document.querySelector(".form-alert");

btn.addEventListener("click", async (e) => {
    e.preventDefault();
    const nameValue = input.value;
    const ageValue = inputAge.value;
    try {
        if (editMode == false) {
            const { data } = await axios.post('/api/people', { name: nameValue, age: ageValue });
            const h5 = document.createElement('h5');
            result.appendChild(h5);
            h5.textContent = data.person;
        } else {
            const newName = input.value;
            const newAge = inputAge.value;
             // const { data } = await axios.put(`/api/people/${currentID}`, { name: nameValue, age: ageValue });
            fetch(`/api/people/${currentID}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: newName, age: newAge })
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
    inputAge.value = "";
})

function deletePeople(id) {
    fetch(`/api/people/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    })
    fetchPeople();
}

var currentID = '';

// autofills inputs with names
function nameEdit(pId, pName, age) {
    editMode = true;
    input.value = pName;
    inputAge.value = age;
    currentID = pId;
}

function checkBox(personId){
    // only uses id for adding decoration
    let chkBox = document.getElementById(`${personId}`)
    if(chkBox.checked==true){
        // console.log(`Checked! ${personId}`);
        // Uses ID of the h5 tag to add/remove decoration
        document.getElementById(`header${personId}`).style.textDecoration = "line-through"
        document.getElementById(`header${personId}`).style.backgroundColor = "gray"
          }
    else {
        //  console.log(`Unchecked! ${personId}`);
         document.getElementById(`header${personId}`).style.textDecoration = "none"
         document.getElementById(`header${personId}`).style.backgroundColor = "#f2f4f8"
    } 
}