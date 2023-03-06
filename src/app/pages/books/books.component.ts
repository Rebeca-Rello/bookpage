import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

 public books:Book[];

constructor(public BooksService:BooksService,){

this.books = this.BooksService.getAll()



}



public enviar(title: string, type: string,author: string, price: number,photo: string, id_book:number){


let booknew=new Book(title, type,author, price, photo, id_book);

this.books.push(booknew)

}

recoger(bookPadre:Book){

  let findBooks= this.books.filter(index=>index.id_book!=bookPadre.id_book)
  console.log(findBooks);


this.books = findBooks;

}

busquedalibro(id_book:string){

if(id_book==""){
this.books =this.BooksService.getAll();

}
else{

  let number:number=Number(id_book)
  let busquedalibro =this.BooksService.getOne(number)
  if(busquedalibro != undefined){
  this.books = [busquedalibro];
  }


}


}



}
