export class Book {

   public id_book: number
   public id_user: number
   public title: string
   public type: string
   public author: string
   public price: number
   public photo: string
  books: any

   constructor(title: string, type: string,author: string, price: number,photo: string, id_book: number, id_user: number){

   this.id_book= id_book;
   this.id_user = id_user;
   this.title=title;
   this.type=type;
   this.author=author;
   this.price=price;
   this.photo=photo;
   

   }


}
