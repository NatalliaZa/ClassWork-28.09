import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { IUser } from './shared/model/user.model';
import { UserService } from './shared/service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  users: IUser[] = [];
  selectedUser!: IUser | null;

  constructor(private userService: UserService) {

  }
  
  ngOnInit(): void {
    this.getUsers();
  }

  public getUserById(id: number){

    this.selectedUser = null;

    this.userService.getUserById(id).subscribe(user => {
      this.selectedUser = user;
    })
  }

  private getUsers(){
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      console.log(users);
    })
  }

  

}
