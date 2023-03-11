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
  libros: any;

constructor(public apiService:BooksService, private toastr: ToastrService){

this.libros = this.apiService.getAll()



}



public enviar(title: string, type: string,author: string, price: number,photo: string, id_book:number){


let booknew=new Book(title, type,author, price, photo, id_book);

this.books.push(booknew)

}

public recoger(id_book:string){

  let lessCard = this.apiService.delete(id_book);


  if(lessCard){

    alert("Se ha eliminado el libro con id" + " "+ id_book)
    this.libros = this.apiService.getAll()
  
}
}

busquedalibro(id_book:string){

if(id_book==""){
this.libros = this.apiService.getAll();


}
else{

  let busquedalibro =this.apiService.getAll()
  if(busquedalibro != undefined){
  this.libros = [busquedalibro];
  }else(this.toastr.warning("No hay coincidencias"));

}


}

public mostrarlibros(){

  this.apiService.getAll().subscribe((resp:Book[])=>{

    this.apiService.libros = this.books;
  
  })
}
}
