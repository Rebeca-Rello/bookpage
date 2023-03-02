import { Component,EventEmitter,Input, Output } from '@angular/core';
import{Book}from 'src/app/models/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() bookPadre:Book;
  @Input() parPadre:Boolean;
  @Output() eventoBoton= new EventEmitter<Book>();

  constructor(){}


  eliminarCard(){

    this.eventoBoton.emit(this.bookPadre);
   
  }
}
