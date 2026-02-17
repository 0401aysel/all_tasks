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
    this.isAvailable = true;
    this.dueDate = null;
    console.log('kitab ugurla geri qaytarildi.');
}

Book.prototype.isOverdue =  function(){
    const today=new Date;
    const todayDate = getDate(today);
    console.log(todayDate > this.dueDate);
    console.log(`Cunki: kitabin qaytarilma tarixi:${this.dueDate} bugunku tarix ${todayDate}`)
}

let Mytest = new Book('book title', 'book author', true, '2026-05-01');
