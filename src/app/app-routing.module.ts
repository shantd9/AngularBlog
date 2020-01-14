import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login',  canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'blogs', component: BlogListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
