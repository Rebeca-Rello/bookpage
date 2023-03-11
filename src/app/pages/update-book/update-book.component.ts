import { Component } from '@angular/core';
import { BooksComponent } from '../books/books.component';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {
  // public books:Book[];

  constructor(public apiService:BooksService, private toastr: ToastrService){
  
  //   let book1:Book=new Book( "Donde los árboles cantan", "Fantasía", "Laura Gallego", 20, 
  //                           "https://m.media-amazon.com/images/I/51AcjmteB+L._SY344_BO1,204,203,200_.jpg",1234, 12);
  
  //   let book2:Book=new Book ( "Los Pilares de la Tierra", "Historia","Ken Follet",25,
  //                            "https://pictures.abebooks.com/isbn/9788499086514-es.jpg",1345,21)
    
  //   let book3:Book= new Book ("Un cuento perfecto", "Romántica", "Elisabet Benavent", 25,
  //                              "https://imagessl3.casadellibro.com/a/l/t7/13/9788466354813.jpg",4567,32)
  
  //  this.books=[book1, book2, book3];
  
  
  
  
  
  }
  
  
  
  public enviar(title:HTMLInputElement , type:HTMLInputElement ,author:HTMLInputElement , price: HTMLInputElement,photo:HTMLInputElement , id_book:HTMLInputElement){
  

  if(id_book){
    let booknew=new Book(title.value, type.value,author.value, price.valueAsNumber, photo.value, id_book.valueAsNumber);
       this.apiService.edit(booknew)
    this.toastr.success("Se ha modificado el libro con id" + " " + id_book.valueAsNumber );

  }else{  this.toastr.warning("No se han encontrado coincidencias con el id: "  + id_book.valueAsNumber)}


  
  }


  
  // recoger(bookPadre:Book){
  
  //   let findBooks= this.books.filter(index=>index.id_book!=bookPadre.id_book)
  //   console.log(findBooks);
  
      
  // this.books = findBooks;
  
  
  
  }


  

