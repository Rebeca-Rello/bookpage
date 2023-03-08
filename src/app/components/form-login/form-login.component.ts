import { Component } from '@angular/core';
import{NgForm} from '@angular/forms';
import {User} from 'src/app/models/user';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  public user:User

  constructor()
  {
    this.user = new User(1, "", "", "pepitoperez@gmail.com", "https://img.freepik.com/foto-gratis/apuesto-hombre-empresario-sonriendo-alegre_176420-17877.jpg", "1234")

  }

  onSubmit(form:NgForm){

    


  }


}
