import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Blog } from 'src/app/models/Blog';

@Component({
  selector: 'app-createblog',
  templateUrl: './createblog.component.html',
  styleUrls: ['./createblog.component.css']
})
export class CreateBlogComponent implements OnInit {

  constructor(private blogService: BlogService,  private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }
  onSubmit(ngForm:NgForm) {
    let blog: Blog = new Blog()
    blog.name = ngForm.value.name
    blog.description = ngForm.value.description
    // insert login to know which user this blog belongs to
    console.log(blog)
    this.blogService.create( ngForm.value)
    .pipe(first())
    .subscribe(
 data => {
   this.toastr.success('You have successfully created a blog', 'Blog created');
   this.router.navigate(['/home']);
 },
 error => {
   this.toastr.error('Error creating a blog. Try again later!', 'Error');
 });
}
}
