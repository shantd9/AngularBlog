﻿﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Blog } from '../models/Blog';

@Injectable({ providedIn: 'root' })
export class BlogService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Blog[]>(`${environment.apiRoot}Blogs`);
    }
}