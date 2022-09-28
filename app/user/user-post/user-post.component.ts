import { Component, Input, OnInit } from '@angular/core';
import { IComment, IPost } from 'src/app/shared/model/user.model';


@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.scss']
})
export class UserPostComponent implements OnInit {

 @Input()
  post!: IPost;

  @Input()
  comments!: IComment;

  constructor() { }

  ngOnInit(): void {
  }

  getCommentsByPostId() {
    if(this.getCommentsByPostId.length){
      this.isShowComments = !this.isShowComments;
      return;
    }
  
  this.userService.getCommentsByPostId(this.post.id).subscribe(comments => {
    this.comments = comments;
    this.isShowComments = true;
  })
  }
}
