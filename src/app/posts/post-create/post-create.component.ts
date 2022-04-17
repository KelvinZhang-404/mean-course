import { Component, EventEmitter, Output } from "@angular/core";

import { Post } from "../post.model";

@Component({
  selector: 'app-post-create', // here the '-' after app is the conversion of '/', and should always do this conversion when specify the path
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredContent = ''
  enteredTitle = ''
  @Output() postCreated = new EventEmitter<Post>()
  // newPost = 'No Content';

  onAddPost() {
    // console.log(postInput)
    // this.newPost = this.enteredValue;
    const post: Post = {
      title: this.enteredTitle,
      content: this.enteredContent
    }
    // console.log(post.title)
    // console.log(post.content)
    this.postCreated.emit(post)
  }
}
