import { Component } from '@angular/core';
import { BooksComponent } from '../books/books.component';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';
import { Respuesta } from 'src/app/models/respuesta';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ad-book',
  templateUrl: './ad-book.component.html',
  styleUrls: ['./ad-book.component.css']
})
export class AdBookComponent {


  public books:Book[];

  constructor(public apiService:BooksService, private toastr: ToastrService, public usuarioService: UserService, public router: Router){
 }
  
  
  
  public enviar(title: string,type:string, author: string, price: number, photo:string){

      let newBook = new Book(title, type, author, price, photo, null, this.usuarioService.user.id_user);
      console.log(newBook)
      this.apiService.add(newBook).subscribe((data:Respuesta)=>{
        if (data.error && data.mensaje != "-1" ) {
          alert(String(data.mensaje))
        }
        else if(data.error){
          alert("El libro no se ha insertado")
        }else {
          alert(`El libro ${newBook.title} se ha insertado`);
          this.router.navigate(["/books"])
        }
      console.log(data)

    this.toastr.warning("Se ha añadido un nuevo libro")
  });

  
  }
  
  // recoger(bookPadre:Book){
  
  //   let findBooks= this.books.filter(index=>index.id_book!=bookPadre.id_book)
  //   console.log(findBooks);
  
      
  // this.books = findBooks;
  }
  








