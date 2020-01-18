import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl, NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService, private authenticationService: AuthenticationService, private router: Router, private toastr: ToastrService) { }
  name = new FormControl('', [Validators.required])
  username = new FormControl('', [Validators.required])
  password = new FormControl('', [Validators.required])
  ngOnInit() {
    if (this.authenticationService.currentUserValue) { 
      this.router.navigate(['/home']);
    }
  }
  onSubmit(ngForm:NgForm) {
    this.authenticationService.login(ngForm.value.username, ngForm.value.password)
    .pipe(first())
    .subscribe(
 data => {
   this.toastr.success('You have successfully logged in', 'Login successful');
   this.router.navigate(['/home']);
 },
 error => {
   this.toastr.error('Error logging in. Try again later!', 'Error');
 });
}
}
