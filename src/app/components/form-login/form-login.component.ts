import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {


  public user:User

  constructor(){

    this.user=new User(1,"","","",
        "https://us.123rf.com/450wm/racorn/racorn1607/racorn160700146/61146943-hombre-joven-con-barba-hermoso-pensativo-mirando-pensativo-a-la-c%C3%A1mara-en-un-su%C3%A9ter-elegante-gris-y.jpg",
        "")
  }

onSubmit(form:NgForm){

form.value
this.user

}



}
