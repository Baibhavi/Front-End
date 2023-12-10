const inp = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', ()=>{
    const str = `<div class="A">
                    <input type="checkbox" class="checkbox">
                    <p>${inp.value}</p>
                </div>
                <div class="B">
                    <span class="up-arrow">🠩</span>
                    <span class="bin">🗑</span>
                    <span class="down-arrow">🠫</span>
                </div>`;
    const task =   document.createElement('div');
    task.classList.add('task');
    task.innerHTML = str;
    const taskList = document.querySelector('.task-list');
    taskList.appendChild(task);
    inp.value = '';  //---- to empty the input box

});

const taskList = document.querySelector('.task-list');
taskList.addEventListener('click', (e) =>{
    console.log(e.target.getAttribute('class'));
    if(e.target.getAttribute('class') == 'checkbox'){
        e.target.nextElementSibling.classList.toggle('check');
    }
    else if(e.target.getAttribute('class') == 'bin'){
        e.target.parentElement.parentElement.remove();
    }
    else if(e.target.getAttribute('class') =='up-arrow'){
        let currentTask = e.target.parentElement.parentElement;
        let prevTask = currentTask.previousElementSibling;
        if(prevTask != null){
            currentTask.after(prevTask);
        }
    }
    else if(e.target.getAttribute('class') =='down-arrow'){
        let currentTask = e.target.parentElement.parentElement;
        let nextTask = currentTask.nextElementSibling;
        if(nextTask != null){
            // nextTask.after(currentTask);
            currentTask.before(nextTask);
        }
    }
})