import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../models/book';
import { UserService } from './user.service';



@Injectable({
  providedIn: 'root'
})


export class BooksService {
  putBooks(newBook: Book) {
    throw new Error('Method not implemented.');
  }
  // get(): Book[] {
  //   throw new Error('Method not implemented.');
  // }
  // getFind(): Book[] {
  //   throw new Error('Method not implemented.');
  // }

  private url = "http://localhost:3000/books";

  public libros: Book[]

  constructor(private http: HttpClient, public usuarioService:UserService) {

        this.libros=[];

  }

  public getAll(id_user:number) { 

       return this.http.get(`${this.url}?id_user=${id_user}`)
 }

  public getOne(id_book:number){ 

       return this.http.get(`${this.url}?id_user=${this.usuarioService.user.id_user}&id_book=${id_book}`)
  }
 
    
  
  public add(newBook:Book){

    return this.http.post (this.url, newBook)

 }

 public edit(id_book){
  
  // let indexBook:number= this.books.findIndex(book1 =>book1.id_book == book.id_book);

  // if( indexBook != -1){
    
  //   this.books.splice(indexBook, 1, book)
  return this.http.put(this.url, id_book)
  }


  // return indexBook !=-1
    
 
 





  // public delete(id_book: string) { 
    
   
  //     // let deleteCard:number = this.books.findIndex(id_book1=>id_book1.id_book == id_book );

  //     // if(deleteCard != -1){

  //     //   this.books.splice(deleteCard,1)
  //     // }
  //     // return deleteCard !=-1

  //     const httpOptions = {headers: null,body:{ id_book: id_book}}
  //   return this.http.delete(this.url, httpOptions)
   
  //  }
   
   public delete(id_book:number){
    let deletedBook = {headers: null, body:{id_book:id_book}};
    return this.http.delete(this.url, deletedBook);
  }
}

/////////////////////////////////////////////////////////////////



  


