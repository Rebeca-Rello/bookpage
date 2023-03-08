import { Component } from '@angular/core';
import { BooksComponent } from '../books/books.component';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-ad-book',
  templateUrl: './ad-book.component.html',
  styleUrls: ['./ad-book.component.css']
})
export class AdBookComponent {


  public books:Book[];

  constructor(public BookService:BooksService){
  
    let book1:Book=new Book( "Donde los árboles cantan", "Fantasía", "Laura Gallego", 20, 
                            "https://m.media-amazon.com/images/I/51AcjmteB+L._SY344_BO1,204,203,200_.jpg",1234, 12);
  
    let book2:Book=new Book ( "Los Pilares de la Tierra", "Historia","Ken Follet",25,
                             "https://pictures.abebooks.com/isbn/9788499086514-es.jpg",1345,21)
    
    let book3:Book= new Book ("Un cuento perfecto", "Romántica", "Elisabet Benavent", 25,
                               "https://imagessl3.casadellibro.com/a/l/t7/13/9788466354813.jpg",4567,32)
  
   this.books=[book1, book2, book3];
  
  
  
  
  
  }
  
  
  
  public enviar(title: string, type: string,author: string, price: number,photo: string, id_book:number){
  
  
  let booknew=new Book(title, type,author, price, photo, id_book);
  
  this.BookService.add(booknew);
  alert("Se ha añadido un nuevo libro")
  
  }
  
  // recoger(bookPadre:Book){
  
  //   let findBooks= this.books.filter(index=>index.id_book!=bookPadre.id_book)
  //   console.log(findBooks);
  
      
  // this.books = findBooks;
  }
  








