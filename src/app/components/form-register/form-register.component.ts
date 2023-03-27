import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { RegisterComponent } from 'src/app/pages/register/register.component';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {

  public myForm: FormGroup;
  public user: User;
  

  constructor(private userService:UserService, 
              private formBuilder:FormBuilder,
              private toastr: ToastrService,
              private router:Router){
       
    this.buildForm()
  }

  public register(){
    
    const myFormData = this.myForm.value;
    const user: User = new User(0,myFormData.nombre, myFormData.apellidos, 
                                myFormData.email, myFormData.url, myFormData.password)

    this.userService.register(user).subscribe((id:string) => {
      console.log(id);
      if (id == "-1")
      {
        this.toastr.warning("El usuario ya existe");
      }
      else
      {
        this.toastr.success("Usuario registrado con id: " + id);
        this.router.navigate(['/app-login']);
      }  

    });
   
  }

  public iniciarSesion(){


  }




  private buildForm(){
    const minPassLength =8;

    this.myForm= this.formBuilder.group({
      nombre:[,Validators.required],
      apellidos:[,Validators.required],
      email: [,[Validators.required,Validators.email]],
      url:[,[Validators.required]],
      password:[, [Validators.required, Validators.minLength(minPassLength)]],
      password2:[,[Validators.required, this.checkPasswords]]

      
    });
    
  } 
  
  private checkPasswords(control: AbstractControl, password1:string, password2:string)
  {
    let resultado = {matchPassword: false};
    if (password1 !== password2) {
       console.log(`Las contraseñas no coinciden: ${password1} y ${password2}`);
    }else{

      (control.parent?.value.password == control.value)
      resultado = null;
    }




    // console.log(control.parent);
    // console.log(control.parent?.value);
    // console.log(control);


   

    
  }
 

}