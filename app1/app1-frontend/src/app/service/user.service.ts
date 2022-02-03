import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = environment.endpoint;
  constructor(public http: HttpClient) { }

  public getAllUser():Observable<User[]> {
   
    return this.http.get<User[]>(`${this.url}user`)
  }

  public getUser(_id:number):Observable<User>{
    return this.http.get<User>(`${this.url}user/${_id}`)
  }

  public deleteUser(_id:number):Observable<any>{
    return this.http.delete<any>(`${this.url}user/${_id}`)
  }
}
