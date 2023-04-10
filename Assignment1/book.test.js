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