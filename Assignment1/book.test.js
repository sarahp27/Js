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
    const ReadDate = "20-10-2020" ;
    const Rating = 4;
    addBook(Book, ReadDate, Rating);
    assert = 1;
    //Act
    let get = numberRead();
    //Assert
    expect(get).toBe(assert);
  });
