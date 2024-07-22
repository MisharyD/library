const library = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function()
{
    read = true ? read == false : false
}

function addBookToLibrary(book) {
  library.push(book);
}

//show dialog
formButton = document.querySelector(".showFormButton")
dialog = document.querySelector("dialog")

formButton.addEventListener("click", showForm)

function showForm()
{
    dialog.show()
}

//add book
addBookButton = document.querySelector(".addBookButton")
bookForm = document.querySelector(".bookForm")
booksContainer = document.querySelector(".booksContainer")

addBookButton.addEventListener("click", addBook)

//add the book to the library array
function addBook(e)
{
    e.preventDefault()

    title = bookForm.elements["title"].value
    author = bookForm.elements["author"].value
    nbOfPages = bookForm.elements["nbOfPages"].value
    read = bookForm.elements["read"].value

    if(validInput(title, author, nbOfPages, read))
        {

            book = new Book(title, author, nbOfPages, read)
            addBookToLibrary(book)
        }

    bookForm.reset()
    dialog.close()
}

//loop over the array and for each item create a row element and associate the index of the item with it
function showBooks()
{
}


//take the index of the array from the tr then find it in the array and call the toggle read function on it and then change it on the td seperatly
function changeReadStatus()
{

}

//take the index of the array from the tr then find it in the array and delete it either using del or setting it to null
// then call del on the tr
function deleteBook()
{

}

function validateInput(title, author, nbOfPages, read)
{
    if(title == "" || 
        author == "" || 
        nbOfPages == "" || 
        read == "")
        return false

    return true;
}

