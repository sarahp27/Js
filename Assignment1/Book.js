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

removeBook=(title)=>{
    Books.map(i => {
        if (i.title === title){
            return i.isRemoved = true;
        }
    })
}