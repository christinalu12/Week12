const form = document.getElementById('addBookForm');
const title = document.getElementById('bookTitle');
const author = document.getElementById('bookAuthor');
const ul = document.getElementById('myBooks');

function createLi() {
  if (title.value.trim() === '' || author.value.trim() === '') {
    return null;
  }

  const li = document.createElement('li');

  const spanTitle = document.createElement('span');
  spanTitle.textContent = title.value;

  const spanAuthor = document.createElement('span')
  spanAuthor.textContent = author.value;

  const label = document.createElement('label');
  label.textContent = 'Read';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.addEventListener('click', (event) => {
    event.target.parentNode.remove();
  });

  li.appendChild(spanTitle);
  li.appendChild(document.createTextNode(' '));
  li.appendChild(spanAuthor);
  li.appendChild(document.createTextNode(' '));
  li.appendChild(label);
  label.appendChild(checkbox);
  li.appendChild(document.createTextNode(' '));
  li.appendChild(removeBtn);

  return li;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const li = createLi();
  if (li) {
    ul.appendChild(li);
    title.value = '';
    author.value = '';
  }
});
