// Defining objects in JS
// Constructor
Book = (title, author, numPages)=>{
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.currentPage = 0;
}

// A method on the above objec
Book.prototype.read = ()=>{
    this.currentPage = this.numPages;
    console.log()
}

// Instantiating a new object
const book = new Book("Robot Dreams", "IT", 320);
//What is New
// Creates new object
// Binds a new this to that (object of course)
// Sets new objects prototype prop to be the constructor function prototype object
// Executes constructor function and returns a newly created object



// calling the new object and accessing read method
book.read();