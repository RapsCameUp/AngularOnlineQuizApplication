import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  users: Array<User> = [];
  private _users_json: string = "assets/users.json" ;
  constructor(private _httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this._httpClient.get<User[]>(`http://localhost:3000/users/`);
  }

  Register(_user: User): Observable<User> {
    return this._httpClient.post<User>(`http://localhost:3000/users`, _user);
  }

  getUser(): string {
    let user = sessionStorage.getItem('loggedin');
    if (!(user === null)) {
      return user;
    }
    else {
      return "Empty";
    }
  }

  LogOut() {
    sessionStorage.removeItem('loggedin')
  }
}
