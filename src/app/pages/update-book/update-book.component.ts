import { Component } from '@angular/core';
import { BooksComponent } from '../books/books.component';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/user.service';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {


  constructor(public apiService: BooksService, private toastr: ToastrService, public userService: UserService) {
    //aquí importamos userService, para poder acceder al objeto user que es donde se guardan los datos del
    //usuario que recibimos de la BBDD.
  }


  public edit(title: string, type: string, author: string, price: string, photo: string, id_book: number) {
    let newBook = new Book(title == ""? null:title, type == ""? null:type, author == "" ? null:author, price == ""? null: Number(price),
                           photo == "" ? null:photo, Number(id_book), this.userService.user.id_user);
                           this.apiService.edit(newBook).subscribe((respuesta: Respuesta) => {
                             if (!respuesta.error) {
                                  if (respuesta.mensaje == "0") {
                                        alert("El libro no existe")
                                      } else {
                                         alert("El libro " + newBook.title + 
                                          " se ha modificado correctamente")
                                      }
                                   } else {
                                     
                                      this.toastr.success("No se ha realizado la conexion")
                                      }

    });
  }


}




