const todo = document.querySelector('.todoItems');
const add = document.querySelector('.add');
const val = document.getElementById('main');
const del = document.querySelector('.delete');

if (localStorage.getItem('myItems')) {
    items = JSON.parse(localStorage.getItem('myItems'));
} else {
    items = [];
}

add.addEventListener('click', function(){
   items.push(val.value);
   localStorage.setItem('myItems', JSON.stringify(items));
   console.log(items);  
});

for (let i = 0; i < items.length; i++) {
    let listItem = document.createElement('li');
    listItem.innerHTML = items[i] + '.';
    todo.appendChild(listItem);
}

del.addEventListener('click', function() {
    items = [];
    localStorage.clear();
    console.log(items);
});
