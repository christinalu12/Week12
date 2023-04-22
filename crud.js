const form = document.getElementById('addBookForm');
const title = document.getElementById('bookTitle');
const author = document.getElementById('bookAuthor');
const ul = document.getElementById('myBooks');
const span = document.getElementById('newBook');



// create li

function createLi() {
const li = document.createElement('li');
const span = document.createElement('span');
span.textContent = newBook.value;
const label = document.createElement('label');
label.textContent = 'Read';
const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
const removeBtn = document.createElement('button');

li.appendChild(span);
li.appendChild(label);
label.appendChild(checkbox);
li.appendChild(removeBtn);

return li;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
const li = createLi();

    ul.appendChild(li);
})
