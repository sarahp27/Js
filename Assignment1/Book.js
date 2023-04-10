let Books= new Array();

exports.getBooks=()=> {
    return Books;
}


addBook=(Book, ReadDate,Rating)=>{
    Book.ReadDate=ReadDate;
    Book.Rating=Rating;
    Books.push(Book);
}

numberRead=()=>{
    return Books.length;
}

deleteBook=(title)=>{

}