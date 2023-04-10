const {
    getBooks
  } = require("./Book");
  

  //Test Case 1: Given that I visit the site, when I first start, I expect my list to be empty.

  test("TestEmptyList", () => {
    //Arrange
    const assert = [];
    // Act
    let get = getBooks();
    //Assert
    expect(get).toEqual(assert);
  });

  //Test Case 2: Given that I have an empty list, when I add the first book to my list then I expect numberRead to return 1.

  test("TestNumberRead",()=>{
    //Arrange
    const Book = {
        title: "The Hobbite", author: "Mirza Ghalib", length: 250, year: 2000 
    };
    addBook(Book, "20-10-2002", 5);
    assert = 1;
    //Act
    let get = numberRead();
    //Assert
    expect(get).toBe(assert);
  });

  //Test Case 3:Given that I have an empty list, 
  //when I add additional books to the list I expect the numberRead to return the total number of books in my list.

  test("TestAddBooks",()=>{
    //Arrange
    assert = 4;
    const Book = {
        book1 : {title: "Gardener", author: "Raza", length: 50, year: 2023 },
        book2 : { title: "Starting out with python", author: "Stephen", length: 500, year: 2022},
        book3 : { title: "JAVA", author: "Ali ", length: 1500, year: 2002}
    };
    addBook(Book, "10-10-2020", 2);
    addBook(Book, "05-3-2000", 5);
    addBook(Book, "02-08-2021", 4);
    //Act
    let get = numberRead();
    //Assert
    expect(get).toBe(assert);
  });

  //Test Case 4: Given that I have a book in my list, when I call removeBook("<title>") with "title" representing the title of my book 
  //that I want to delete, then when I call getBooks() the book I deleted should no longer be there.

  test("TestAddBookReturnList",()=>{
    //Arrange
    let assert = [
    {
        title: "Gardener", author: "Raza", length: 50, year: 2023
    },
    {
        title: "Starting out with python", author: "Stephen", length: 500, year: 2022
    },
    {
        title: "JAVA", author: "Ali ", length: 1500, year: 2002
    },
  ];

  const Book = {
    title: "Jhoom barabar",
    Author: "Sarah Patel",
    length: 3333,
    year: 2022,
    };
    
    addBook(Book, "12-02-2029", 2)
    let get = getbook();
    expect(get).toEqual(assert);
});
    //Act
    //Assert
  
  //Test Case 5: Given that I have an empty list, when I add a new book I expect getBooks() 
  //to return a list of books that includes the book I added.


  // Test Case 6:Given when I call getBooksByRating(), I should return 
  //a list of books that all have that rating.
