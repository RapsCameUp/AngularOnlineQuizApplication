import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MainComponent } from './main/main.component';
import { QuizComponent } from './quiz/quiz.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'main', component:MainComponent},
  {path: 'login', component:LoginComponent},
  {path: 'main/logout', component:LogoutComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'quiz', component:QuizComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'about', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
