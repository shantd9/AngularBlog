import { Component, OnInit, Input } from '@angular/core';
import { Blog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog.service';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  @Input() blogs: Blog[];
  constructor(private blogService: BlogService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
  }

  editBlog(blog: Blog) {
    this.router.navigate(['home/blog/edit', blog.id], { queryParams: { isEdit: true} })
  }
  deleteBlog(blog: Blog){
     this.blogService.delete(blog.id).subscribe(x=> {
      this.blogs.splice(this.blogs.indexOf(blog), 1)
      this.toastr.success("Success!","Success")
     })
  }
  like(blog: Blog){
    
  }
}
