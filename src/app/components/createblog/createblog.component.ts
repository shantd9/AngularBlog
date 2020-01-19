import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Blog } from 'src/app/models/Blog';

@Component({
  selector: 'app-createblog',
  templateUrl: './createblog.component.html',
  styleUrls: ['./createblog.component.css']
})
export class CreateBlogComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private blogService: BlogService,  private router: Router, private activatedRoute: ActivatedRoute, private toastr: ToastrService) { }

  // isEdit: boolean
  blog: any
  ngOnInit() {
    // this.isEdit = this.activatedRoute.snapshot.queryParams['isEdit'];
    // if(this.isEdit == true){
    //   this.blogService.getById(this.activatedRoute.snapshot.params.id).subscribe(x=>{
    //     this.blog = x
    //   })
    // }
  }
  onSubmit(ngForm:NgForm) {
    let blog: Blog = new Blog()
    blog.userId = this.authenticationService.currentUserValue.id
    blog.createdAt = new Date(Date.now())
    blog.name = ngForm.value.name
    blog.blogImage = ngForm.value.blogImage
    blog.description = ngForm.value.description
    blog.tags = ""
    // if(this.isEdit == false) {
    this.blogService.create(blog)
    .pipe(first())
    .subscribe(
        data => {
          this.toastr.success('You have successfully created a blog!', 'Blog creation successful');
          this.router.navigate(['home'])
        },
        error => {
          this.toastr.error('Error creating blog. Try again later!', 'Error');
      });
    // } else {
    //   this.blogService.update(blog)
    //   .pipe(first())
    //   .subscribe(
    //     data => {
    //       this.toastr.success('You have successfully updated the blog!', 'Blog update successful');
    //       this.router.navigate(['home'])
    //     },
    //     error => {
    //       this.toastr.error('Error updating blog. Try again later!', 'Error');
    //   });
    // }
  }
}
