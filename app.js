"use strict";
// export const __esModule = true;
var todo = document.querySelector('.todoItems');
var add = document.querySelector('.add');
var val = document.getElementById('main');
var del = document.querySelector('.delete');
var items;
if (localStorage.getItem('myItems')) {
    items = JSON.parse(localStorage.getItem('myItems'));
}
else {
    items = [];
}
add.addEventListener('click', function (e) {
    if (!val.value) {
        e.preventDefault();
        console.log('shoks senior dev');
        alert('shoks said you need a todo...');
    }
    else {
        items.push(val.value);
        localStorage.setItem('myItems', JSON.stringify(items));
        console.log(items);
    }
});
for (var i = 0; i < items.length; i++) {
    var listItem = document.createElement('li');
    listItem.innerHTML = items[i] + '.';
    todo.appendChild(listItem);
}
del.addEventListener('click', function () {
    items = [];
    localStorage.clear();
    console.log(items);
});
