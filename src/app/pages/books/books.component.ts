import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/models/book';
import { Respuesta } from 'src/app/models/respuesta';
import { User } from 'src/app/models/user';
import { BooksService } from 'src/app/shared/books.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

 public books:Book[];
 public respuesta: any;


constructor(public apiService:BooksService, private toastr: ToastrService, 
            public usuarioService:UserService){

  this.books = []
  this.apiService.getAll(usuarioService.user.id_user).subscribe((respuesta:Respuesta)=>
    {
      console.log(respuesta);
      this.books = respuesta.data
      console.log(this.books);
      
    })

}

public findBook(id_book:string){

  console.log(id_book);

  let id = parseInt(id_book) // convertimos el id en un number

  if(id_book.length != 0){
    this.apiService.getOne(id).subscribe((res:Respuesta)=>{
    if(res.data.length == 0){
      alert("El libro no existe");
    }else{
      console.log(res);
      this.books = res.data
    }

  })
  }else{
    alert("No se ha insertado el id");
    this.apiService.getAll(this.usuarioService.user.id_user).subscribe((respuesta:Respuesta)=>
    {
      console.log(respuesta);
      
      this.books = respuesta.data
    })
  }

  

}



// public enviar(title: string, type: string,author: string, price: number,photo: string, id_book:number){


// let booknew=new Book(title, type,author, price, photo, id_book);

// this.books.push(booknew)

// }

public recoger(id_book: number) {
 
this.apiService.delete(id_book).subscribe((datos:Respuesta)=>{

  this.apiService.getAll(this.usuarioService.user.id_user).subscribe((respuesta:Respuesta)=>
  {
    console.log(respuesta);
    this.books = respuesta.data
    console.log(this.books);
    
  })
}


)
}


}

// busquedalibro(id_book:string){

// if(id_book==""){
// this.libros = this.apiService.getAll();


// }
// else{

//   let busquedalibro =this.apiService.getAll()
//   if(busquedalibro != undefined){
//   this.libros = [busquedalibro];
//   }else(this.toastr.warning("No hay coincidencias"));

// }


// }



