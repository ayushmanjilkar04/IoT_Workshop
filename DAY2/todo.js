let input =document.getElementById('title');
let btn = document.getElementById('btn');
let list = document.getElementById('task-list');
let listcontainer = document.getElementsByClassName('list')[0];

btn.addEventListener('click', function() {
    if(input.value==='') {
        alert('Please enter a task');
    }else {
        // let task = document.createElement('li');
        // task.textContent = input.value;
        // list.appendChild(task);
        // input.value = '';
        // listcontainer.appendChild(list);
        let task=document.createElement('div');
        
    }
});