import { Component,EventEmitter,Input, Output } from '@angular/core';
import{Book}from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() bookPadre:Book;
  @Input() parPadre:Boolean;
  @Output() eventoBoton= new EventEmitter<number>();

  constructor(public BookService:BooksService){}


  eliminarCard(){

    this.eventoBoton.emit(this.bookPadre.id_book)

     
  }
}
