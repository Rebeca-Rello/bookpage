import { Component } from '@angular/core';
import{NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {User} from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  public user:User

  constructor(private userService:UserService,
              private toastr: ToastrService,
              private router:Router)
  {
    this.user = new User(1, "", "", "pepitoperez@gmail.com", "https://img.freepik.com/foto-gratis/apuesto-hombre-empresario-sonriendo-alegre_176420-17877.jpg", "1234")

  }

  onSubmit(form:NgForm){

    this.userService.login(form.value.email,form.value.password).subscribe((data:Respuesta) => {
      
      if (data.error)
      {
        this.toastr.warning("El usuario no existe");
      }
      else
      {
        this.toastr.success("Usuario logueado")
        this.userService.logueado = true
        this.userService.user = data.result[0]
        console.log(data.result[0]);
        this.router.navigate(['/books']);
        
        //Se deberá actualizar el atributo logueado y usuario de userService con los datos
        //asociados, en new User, cogeremos los datos del objeto respuesta que es donde guardamos los 
        //datos del usuario.
       
      }    

    });

    



  }


}
