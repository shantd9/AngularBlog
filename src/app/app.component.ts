import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnChanges{
  user: string
  ngOnInit() {
    this.authenticationService.currentUser.subscribe(x=>{
      if(x)
      this.user = x.username
      else this.user=null
    }
  )}
  ngOnChanges(){

  }
  title = 'AngularBlog';
  constructor(private router: Router, private authenticationService: AuthenticationService){

  }

  onLogout(){
    this.authenticationService.logout()
    this.router.navigate(['login'])
  }
  
  onCreateBlog() {
    this.router.navigate(['home/blogs/create'], { queryParams: { isEdit: false} })
  }
}
