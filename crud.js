//ID and Data
const form = document.getElementById('addBookForm');
const title = document.getElementById('bookTitle');
const author = document.getElementById('bookAuthor');
const ul = document.getElementById('myBooks');

//creating new LI in blank list
function createLi() {
    if (title.value.trim() === '' || author.value.trim() === '') {
      return null;
    }
  
    const li = document.createElement('li');//create actual list item
  
    const spanTitle = document.createElement('span'); //set LI to value of title
    spanTitle.textContent = title.value;
  
    const spanAuthor = document.createElement('span') //set LI to value of author
    spanAuthor.textContent = author.value;
  
    const label = document.createElement('label'); //create a label that can indicate if a book has been read or not
    label.textContent = 'Read';
  
    const checkbox = document.createElement('input'); //use checkbox for indicating
    checkbox.type = 'checkbox';
  
    const editBtn = document.createElement('button'); //create a working edit button
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', (event) => {
        const editForm = document.createElement('form');
  
    const editTitleInput = document.createElement('input'); //edit title
      editTitleInput.type = 'text';
      editTitleInput.value = spanTitle.textContent;
  
    const editAuthorInput = document.createElement('input');//edit author
      editAuthorInput.type = 'text';
      editAuthorInput.value = spanAuthor.textContent;
  
    const saveBtn = document.createElement('button'); //save and cancel buttons needed
      saveBtn.textContent = 'Save';
      saveBtn.addEventListener('click', (event) => {
        event.preventDefault();
  
        spanTitle.textContent = editTitleInput.value;
        spanAuthor.textContent = editAuthorInput.value;
  
        editForm.remove();
      });
  
    const cancelBtn = document.createElement('button');
      cancelBtn.textContent = 'Cancel';
      cancelBtn.addEventListener('click', (event) => {
        event.preventDefault();
  
        editForm.remove();
     });
  
      editForm.appendChild(editTitleInput);
      editForm.appendChild(document.createTextNode(' '));
      editForm.appendChild(editAuthorInput);
      editForm.appendChild(document.createTextNode(' '));
      editForm.appendChild(saveBtn);
      editForm.appendChild(cancelBtn);
  
      li.appendChild(editForm);
    });
  
    const removeBtn = document.createElement('button'); //remove button
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', (event) => {
      event.target.parentNode.remove();
    });
  
    //create LI elements for new book added
    li.appendChild(spanTitle);
    li.appendChild(document.createTextNode(' '));
    li.appendChild(spanAuthor);
    li.appendChild(document.createTextNode(' '));
    li.appendChild(label);
    label.appendChild(checkbox);
    li.appendChild(document.createTextNode(' '));
    li.appendChild(editBtn);
    li.appendChild(document.createTextNode(' '));
    li.appendChild(removeBtn);
  
    return li;
  }
//so the page doesn't reset when you hit submit
form.addEventListener('submit', (event) => {
  event.preventDefault();

//call createLI based on user input
  const li = createLi();
  if (li) {
    ul.appendChild(li);
    title.value = '';
    author.value = '';
  }
});
