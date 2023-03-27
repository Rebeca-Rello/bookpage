import { Component } from '@angular/core';
import { Respuesta } from 'src/app/models/respuesta';
import { User } from 'src/app/models/user';
import { BooksService } from 'src/app/shared/books.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

public user:User;

  constructor(public apiService: BooksService, public userService: UserService){

    this.user =new User(1985, "Manoli", 
                      "García", "manoli@gmail.com", 
                      "https://secrecyjewels.es/blog/wp-content/uploads/2022/10/esencia-de-una-persona.jpg", 
                      "12345")

  }

  public enviar(name:string, last_name:string, email:string, photo:string){

    const editUser = new User (this.userService.user.id_user, name, last_name, email,photo,
                                this.userService.user.password)
    console.log(editUser);

    this.userService.edit(editUser).subscribe((data:Respuesta)=>{
      
      if(data.error !=false){

        alert("No se han podido modificar los datos")

      }else{
        alert("Se han modificado los datos")
      }
    })
    
    
    
  }



}


