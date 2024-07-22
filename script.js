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


//add eventListeners and get elements

formButton = document.querySelector(".showFormButton")
dialog = document.querySelector("dialog")
deleteButton = document.querySelector(".deleteButton")
changeReadButton = document.querySelector(".changeRead")
addBookButton = document.querySelector(".addBookButton")
bookForm = document.querySelector(".bookForm")
booksContainer = document.querySelector(".booksContainer")

formButton.addEventListener("click", showForm)
deleteButton.addEventListener("click", deleteBook)
changeReadButton.addEventListener("click", changeRead)
addBookButton.addEventListener("click", addBook)


//functions

function showForm()
{
    dialog.show()
}


//add the book to the library array
function addBook(e)
{
    e.preventDefault()

    title = bookForm.elements["title"].value
    author = bookForm.elements["author"].value
    nbOfPages = bookForm.elements["nbOfPages"].value
    read = bookForm.elements["read"].value
    
    if(validateInput(title, author, nbOfPages, read))
        {
            
            book = new Book(title, author, nbOfPages, read)
            library.push(book);

            bookForm.reset()
            dialog.close()
        }
    else
    {
        alert("wrong input")
    }

    showBooks();

}

//loop over the library and add book cards
function showBooks()
{
    //remove the previous books to not duplicate them
    let allBooks = Array.from(booksContainer.querySelectorAll(":scope > div:nth-child(n+3)"))
    for(let i =0; i<allBooks.length; i++)
        booksContainer.removeChild(allBooks[i])
    
    for(let i = 0; i <library.length; i++)
        {
            bookCard = booksContainer.querySelector("#bookCardStructure").cloneNode(true)

            bookCard.setAttribute("data-attribute", i)
            bookCard.querySelector(".title").textContent = library[i]['title']
            bookCard.querySelector(".author").textContent = library[i]['author']
            bookCard.querySelector(".pages").textContent = library[i]['pages']
            bookCard.querySelector(".read").textContent = library[i]['read']

            bookCard.style.display = "grid"
            booksContainer.append(bookCard);
        }
}


//chnage read status of a book
function changeRead(e)
{
    //change status in bookCard
    book = e.target.parentElement.parentElement // changeButton => <div class ="options"> => <div class ="bookCard">
    readStatus = book.querySelector(".read")
    readStatus.textContent = "Yes" ? readStatus.textContent == "No" : "No"

    //change status in library
    bookIndex = book.getAttribute("data-attribute");
    library[bookIndex].toggleRead()
}


function deleteBook(e)
{
    //delete book in the booksContainer
    book = e.target.parentElement.parentElement // changeButton => <div class ="options"> => <div class ="bookCard">
    booksContainer.removeChild(book)

    //delete book in library
    bookIndex = book.getAttribute("data-attribute");
    library.splice(bookIndex, 1)
    
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

