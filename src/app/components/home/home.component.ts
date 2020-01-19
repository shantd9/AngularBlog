import { Component, OnInit, OnChanges } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { BlogService } from 'src/app/services/blog.service';
import { Blog } from 'src/app/models/Blog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User[]
  blogs: Blog[]
  constructor(private userService: UserService, private blogService: BlogService) { }

  ngOnInit() {
    this.userService.getAll()
    .subscribe(users => {
      this.users = users
    });

    this.blogService.getAll()
    .subscribe(blogs => {
      this.blogs = blogs
    });
  }

}
