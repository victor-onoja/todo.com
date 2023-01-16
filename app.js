const todo = document.querySelector('.todoItems');
const add = document.querySelector('.add');
const val = document.getElementById('main');

let items = []; 

add.addEventListener('click', function(){
items.push(val.value)
    const listItem = document.createElement('li');
    items.forEach(function(i){
        listItem.textContent = i;
    })
    todo.appendChild(listItem);  
    console.log(items);
});
