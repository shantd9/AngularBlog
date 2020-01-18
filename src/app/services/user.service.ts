import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${environment.apiRoot}/users`);
    }

    getById(id: number) {
        return this.http.get(`${environment.apiRoot}/users/${id}`);
    }

    register(user: User) {
        return this.http.post(`${environment.apiRoot}/users/register`, user);
    }

    update(user: User) {
        return this.http.put(`${environment.apiRoot}/users/${user.id}`, user);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiRoot}/users/${id}`);
    }

}


