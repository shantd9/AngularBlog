﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Blog } from '../models/Blog';

@Injectable({ providedIn: 'root' })
export class BlogService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Blog[]>(`${environment.apiRoot}/blogs`);
    }

    getById(id: number) {
        return this.http.get(`${environment.apiRoot}/blogs/${id}`);
    }

    create(blog: Blog) {
        return this.http.post(`${environment.apiRoot}/blogs`, blog);
    }

    update(blog: Blog) {
        return this.http.put(`${environment.apiRoot}/blogs/${blog.id}`, blog);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiRoot}/blogs/${id}`);
    }

}