const todo = document.querySelector('.todoItems');
const add = document.querySelector('.add');
const val = document.getElementById('main')  as HTMLInputElement;
const del = document.querySelector('.delete');

let items: any[];

if (localStorage.getItem('myItems')) {
    items = JSON.parse(localStorage.getItem('myItems'));
} else {
    items = [];
}

add.addEventListener('click', function(e){
    if(!val.value){
        e.preventDefault();
        console.log('shoks senior dev');
        alert('shoks said you need a todo...');
    }else{
   items.push(val.value);
   localStorage.setItem('myItems', JSON.stringify(items));
   console.log(items); } 
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

export {};