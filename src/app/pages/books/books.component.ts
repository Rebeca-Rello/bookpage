import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

 public books:Book[];

constructor(public booksService:BooksService, private toastr: ToastrService){

this.books = this.booksService.getAll()



}



public enviar(title: string, type: string,author: string, price: number,photo: string, id_book:number){


let booknew=new Book(title, type,author, price, photo, id_book);

this.books.push(booknew)

}

public recoger(id_book:number){

  let lessCard = this.booksService.delete(id_book);


  if(lessCard){

    alert("Se ha eliminado el libro con id" + " "+ id_book)
    this.books = this.booksService.getAll()
  
}
}

busquedalibro(id_book:string){

if(id_book==""){
this.books = this.booksService.getAll();


}
else{

  let number:number=Number(id_book)
  let busquedalibro =this.booksService.getOne(number)
  if(busquedalibro != undefined){
  this.books = [busquedalibro];
  }else(this.toastr.warning("No hay coincidencias"));

}


}



}
