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

    let findbook = this.books.find(book =>book.id_book == id_libro);
     
    return findbook
    }
 
    
  
  public add(book: Book):void{

  this.books.push(book)


}

 public edit(book: Book):boolean {
  
  let indexBook:number= this.books.findIndex(book1 =>book1.id_book == book.id_book);

  if( indexBook != -1){
    
    this.books.splice(indexBook, 1, book)
  }


  return indexBook !=-1
    
 
 }





  public delete(id_book: number): boolean { 
    
   
      let deleteCard:number = this.books.findIndex(id_book1=>id_book1.id_book == id_book );

      if(deleteCard != -1){

        this.books.splice(deleteCard,1)
      }
      return deleteCard !=-1
   
   }
   
}





  


