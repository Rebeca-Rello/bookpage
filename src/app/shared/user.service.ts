import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
 
  private url =  "http://localhost:3000/register"
  private url2 =  "http://localhost:3000/login"
  private url3 = "http://localhost:3000/usuarios"
  public logueado:boolean 
  public user:User

  constructor(private http: HttpClient) { 

    this.logueado = false
    this.user = null
  }

    
  public register(newUser:User){

    return this.http.post (this.url, newUser)
    //Esto es lo mismo que hacemos en Postman

 }

 public login(email:string, password:string){
            

  return this.http.post (this.url2, {email:email, password:password} )

}

public edit(usuario:User){

  return this.http.put (this.url3, {usuario})
}
}

