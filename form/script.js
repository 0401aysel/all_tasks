let form = document.querySelector('#task-form');
let title = form.querySelector('#title');
let description = form.querySelector('#description');
let deadline = form.querySelector('#deadline');
let date = form.querySelector('#date');
let submit = form.querySelector('#submit');
let taskList = document.querySelector('.tasks');

listTaskFromStorage();

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    let storage = getStorage();
    let formData = addTaskToStorage();
    
    let task = Object.fromEntries(formData.entries());
    let data = [...storage,task];
    
    localStorage.setItem('task',JSON.stringify(data));
    listTaskFromStorage();
    form.reset();
});

function getStorage(){
    return JSON.parse(localStorage.getItem('task')) || [];
}

function addTaskToStorage(){
    let formData = new FormData();

    formData.append('title',title.value);
    formData.append('description',description.value);
    formData.append('deadline',deadline.checked);
    formData.append('date',date.value);

    return formData;
}

function listTaskFromStorage(){
    let tasks = getStorage();
    taskList.innerHTML = '';

    for( let task of tasks){
        taskList.innerHTML +=`
            <div class="task">
                <h2>${task.title}</h2>
                <p>description:${task.description}</p>
                <p>deadline:${task.deadline === 'true' ? 'Yes' : 'No'}</p>
                <p>expire date:${task.date}</p>
            </div>
        `;
    }
}
