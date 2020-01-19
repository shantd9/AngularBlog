import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './helpers/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { CreateBlogComponent } from './components/createblog/createblog.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent,  canActivate: [AuthGuard] },
  { path: 'home/blogs/create', component: CreateBlogComponent,  canActivate: [AuthGuard] },
  { path: 'home/blogs/edit/:id', component: CreateBlogComponent,  canActivate: [AuthGuard] },
  { path: 'home/users/:id', component: UserDetailsComponent,  canActivate: [AuthGuard]},
  { path: 'home/blogs/:id', component: BlogDetailsComponent,  canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
