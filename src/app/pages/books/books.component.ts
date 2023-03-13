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
  // libros: any;

constructor(public apiService:BooksService, private toastr: ToastrService){

  this.apiService.getAll().subscribe((data:Book[])=>
    {
      console.log(data);
      this.books = data
    })

}

public findBook(id_book:string){

  console.log(id_book);

  let id = parseInt(id_book) // convertimos el id en un number

  this.apiService.getOne(id).subscribe((res:any)=>{
    
  console.log(res);
   this.books = [res.data[0]]
    
  })

}



// public enviar(title: string, type: string,author: string, price: number,photo: string, id_book:number){


// let booknew=new Book(title, type,author, price, photo, id_book);

// this.books.push(booknew)

// }

public recoger(id_book: string) {
  let lessCard = this.apiService.delete(id_book);
  if (lessCard) {
    this.apiService.getAll().subscribe((books) => {
      this.books = books;
      alert("Se ha eliminado el libro con id" + " " + id_book);
    });
  }
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


}
