import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { IUser } from '../model/user.model';
import { IPost } from '../model/user.model';

const URL_OREFIX = 'https://jsonplaceholder.typicode.com';

const users = [
  {
    id: 1,
    name: "Bock",
    surname: "Black",
    email: "bock@gmail.com",
    adress: {
      street: "Kulas Light",
      suite: "Apt. 56",
      city: "Gwenbiriught",
      zipcode: "92988-38",
      geo: {
        lat: "-37",
        lng: "81"
      }
    },
    phone: "123-8952",
    wedsite:"back.com",
    company: {
      name: "Name",
      cathPhrase: "Multi",
      bs: "harnesss real-time"
    }
  },
  {
    id: 2,
    name: "Gred",
    surname: "White",
    email: "bock@gmail.com",
    adress: {
      street: "Kulas Light",
      suite: "Apt. 56",
      city: "Gwenbiriught",
      zipcode: "92988-38",
      geo: {
        lat: "-37",
        lng: "81"
      }
    },
    phone: "123-8952",
    wedsite:"back.com",
    company: {
      name: "Name",
      cathPhrase: "Multi",
      bs: "harnesss real-time"
    }
  }

]

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<IUser[]> {
   return this.httpClient.get<IUser[]>(`${URL_OREFIX}/users`);
  // return of(users).pipe(delay(1000));
  }

  getUserById(id: number): Observable<IUser>{
    return this.httpClient.get<IUser>(`${URL_OREFIX}/users/${id}`); 
  }

  getPostsById(id: number): Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(`${URL_OREFIX}/users/${id}/posts`); 
  }

  getCommentsByPostId(id: number): Observable<Comment[]>{
    return this.httpClient.get<Comment[]>(`${URL_OREFIX}/users/${id}/comments`); 
  }

}
