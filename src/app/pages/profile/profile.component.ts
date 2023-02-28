import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

public user:User;

  constructor(){

    this.user =new User(1985, "Manoli", 
                      "García", "manoli@gmail.com", 
                      "https://secrecyjewels.es/blog/wp-content/uploads/2022/10/esencia-de-una-persona.jpg", 
                      "12345")

  }

  public enviar(nuevoNombre:string, nuevoApellido:string, nuevoEmail:string,nuevaPhoto:string){

     this.user.name = nuevoNombre;
     this.user.last_name = nuevoApellido;
     this.user.email = nuevoEmail;
     this.user.photo =nuevaPhoto;


  }



}


