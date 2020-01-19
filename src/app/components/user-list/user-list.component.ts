import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnChanges{
  @Input() users: User[];
  constructor(private router: Router, private userService: UserService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  ngOnChanges() {
  }
  deleteUser(user: User) {
   this.userService.delete(user.id).subscribe(x=>{
     this.users.splice(this.users.indexOf(user), 1)
     this.toastr.success("Success!","Success")
   })
  }
  // editUser(user: User){
  //    this.router.navigate(['/users/', user.id])  
  // }
}
