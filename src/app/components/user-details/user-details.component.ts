import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: any;
  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit() {
    // this.router.routerState;
    console.log(this.activatedRoute.params.subscribe(param=>{
      this.userService.getById(param.id).subscribe(x => {
        this.user = x
      }
      )
    }))
  }

  onSubmit(ngForm : NgForm) {
    console.log(this.user)
      this.userService.update(this.user).subscribe(x=>{
        this.toastr.success("Success!", "Success")
        this.router.navigate(['home'])
      })
  }
}
