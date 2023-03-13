import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../models/book';


let book1:Book=new Book( "Donde los árboles cantan", "Fantasía", "Laura Gallego", 20, 
"https://m.media-amazon.com/images/I/51AcjmteB+L._SY344_BO1,204,203,200_.jpg",1234 );

let book2:Book=new Book ( "Los Pilares de la Tierra", "Historia","Ken Follet",20,
"https://pictures.abebooks.com/isbn/9788499086514-es.jpg",1345)

let book3:Book= new Book ("Un cuento perfecto", "Romántica", "Elisabet Benavent", 25,
  "https://imagessl3.casadellibro.com/a/l/t7/13/9788466354813.jpg",4567)


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

  constructor(private http: HttpClient) {

        this.libros=[book1, book2, book3];

  }

  public getAll() { 

       return this.http.get(this.url)
 }

  public getOne(id_book:number){ 

       return this.http.get(`${this.url}?id=${id_book}`)
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





  


