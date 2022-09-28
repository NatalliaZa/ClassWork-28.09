import { Component, Input, OnInit } from '@angular/core';
import { IUser, IPost } from 'src/app/shared/model/user.model';
import { UserService } from 'src/app/shared/service/user.service';
import { UserItemComponent } from '../user-item/user-item.component';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  @Input() user!: IUser;

  @Input() posts: IPost[] = [];

  constructor(private userServie: UserService) { }

  ngOnInit(): void {
  }

  getPosts(){
    this.userServie.getPostsById(this.user.id).subscribe(posts => {
      this.posts = posts;
    })
  }

}
