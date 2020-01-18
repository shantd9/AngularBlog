import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { Validators, FormControl, FormGroup, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  

  constructor(private userService: UserService, private authenticationService: AuthenticationService, private router: Router, private toastr: ToastrService) { }
  username = new FormControl('', [Validators.required])
  password = new FormControl('', [Validators.required])
  ngOnInit() {
    if (this.authenticationService.currentUserValue) { 
      this.router.navigate(['/blogs']);
    }
  }
  onSubmit(ngForm:NgForm) {
    this.userService.register(ngForm.value)
    .pipe(first())
    .subscribe(
        data => {
          this.toastr.success('You have successfully registered', 'Registration successful');
          this.router.navigate(['/blogs']);
        },
        error => {
          this.toastr.error('Error registering. Try again later!', 'Error');
        });
  }
}