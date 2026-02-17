function Book(title,author,isAvailable = true,dueDate = null){
    this.title = title;
    this.author = author; 
    this.isAvailable = isAvailable;
    this.dueDate = dueDate;
}

function getDate(date){
    const dateYear = date.getFullYear();
    const dateMonth = String(date.getMonth() + 1).padStart(2, '0');
    const dateDay = String(date.getDate()).padStart(2, '0');

    const dateDate = `${dateYear}-${dateMonth}-${dateDay}`;
    return dateDate;
}

Book.prototype.borrowBook = function(){
    console.log('Portotype used');
    if(this.isAvailable){
        const due = new Date();
        due.setDate(due.getDate() + 14); 

        this.isAvailable = false;
        this.dueDate = getDate(due);
         console.log('Kitabi ugurla goturdunuz');
    }else{
        console.log('Kitab goturulub. Basqa secimlere baxin');
    }
}

Book.prototype.return =  function(){
    console.log('Portotype used');
    this.isAvailable = true;
    this.dueDate = null;
    console.log('kitab ugurla geri qaytarildi.');
}

Book.prototype.isOverdue =  function(){
    console.log('Portotype used');
    const today=new Date;
    const todayDate = getDate(today);
    console.log(todayDate < this.dueDate);
    console.log(`Cunki: kitabin qaytarilma tarixi:${this.dueDate} bugunku tarix ${todayDate}`)
}

let MyBook = new Book('book title', 'book author', true, '2026-05-01');


// add class for library system instead of prototype ES6

class Library{
    constructor(title,author,isAvailable = true,dueDate = null){
        this.title = title;
        this.author = author; 
        this.isAvailable = isAvailable;
        this.dueDate = dueDate;
    }

    borrowBook(){
        console.log('Class used');
        if(this.isAvailable){
            const due = new Date();
            due.setDate(due.getDate() + 14); 

            this.isAvailable = false;
            this.dueDate = getDate(due);
            console.log('Kitabi ugurla goturdunuz');
        }else{
            console.log('Kitab goturulub. Basqa secimlere baxin');
        }
    }

    return(){
        console.log('Class used');
        this.isAvailable = true;
        this.dueDate = null;
        console.log('kitab ugurla geri qaytarildi.');
    }

    isOverdue(){
        console.log('Class used');
        const today=new Date;
        const todayDate = getDate(today);
        console.log(todayDate < this.dueDate);
        console.log(`Cunki: kitabin qaytarilma tarixi:${this.dueDate} bugunku tarix ${todayDate}`)
    }
}

const MyLibrary = new Library('book title', 'book author', true, '2026-01-04');