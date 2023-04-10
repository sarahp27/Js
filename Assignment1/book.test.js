

const {
    getBook
  } = require("./Book");
  

  //Test Case 1
  test("TestEmptyList", () => {
    //Arrange
    const assert = [];
    // Act
    const list = getBooks();
    //Assert
    expect(getBooks()).toEqual(assert);
  });