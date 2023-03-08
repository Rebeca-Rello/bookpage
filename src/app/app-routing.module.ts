import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdBookComponent } from './pages/ad-book/ad-book.component';
import { BooksComponent } from './pages/books/books.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { UpdateBookComponent } from './pages/update-book/update-book.component';

const routes: Routes = [
  {path:"",redirectTo:"/home", pathMatch:"full"},
  {path:"home", component: HomeComponent},
  {path:"register", component:RegisterComponent},
  {path:"profile", component:ProfileComponent},
  {path:"books", component:BooksComponent},
  {path:"ad-book", component:AdBookComponent},
  {path:"update-book", component:UpdateBookComponent},
  {path:"app-login", component:LoginComponent},
<<<<<<< HEAD
 

=======
>>>>>>> dia6Bis
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
