import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {


  private books: Book[]

  constructor() {

    let book1:Book=new Book( "Donde los árboles cantan", "Fantasía", "Laura Gallego", 20, 
    "https://m.media-amazon.com/images/I/51AcjmteB+L._SY344_BO1,204,203,200_.jpg",1234, 12);

let book2:Book=new Book ( "Los Pilares de la Tierra", "Historia","Ken Follet",25,
     "https://pictures.abebooks.com/isbn/9788499086514-es.jpg",1345,21)

let book3:Book= new Book ("Un cuento perfecto", "Romántica", "Elisabet Benavent", 25,
       "https://imagessl3.casadellibro.com/a/l/t7/13/9788466354813.jpg",4567,32)

this.books=[book1, book2, book3];

  }




  public getAll(): Book[] { 

       return this.books

 }

  public getOne(id_libro: number): Book { 

    let findbook = -1;

    for(let i=0;i<this.books.length;i++){

      if(this.books[i].id_book == id_libro)(
        findbook=i
      )
    }
 
    return this.books[findbook]


  }
  public add(book: Book):void{

  this.books.push(book)


}

 public edit(book: Book):boolean {

  for(let i=0;i<this.books.length;i++){

    if(this.books[i].id_book == book.id_book){

      this.books[i] = book
    }

  }
    return true;
 }



  public delete(id_book: number): boolean { 

    for(let i=0;i<this.books.length;i++){

        if(this.books[i].id_book == id_book){

          this.books.splice(i,1);

        }
    }

      return true
  }

}





  


