import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = environment.endpoint;
  constructor(public http: HttpClient) { }

  public postUser(user:User):Observable<User> {
   
    return this.http.post<User>(`${this.url}user`,user);
  }
}
