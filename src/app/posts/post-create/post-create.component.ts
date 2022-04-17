import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-post-create', // here the '-' after app is the conversion of '/', and should always do this conversion when specify the path
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredContent = ''
  enteredTitle = ''
  @Output() postCreate = new EventEmitter()
  // newPost = 'No Content';

  onAddPost() {
    // console.log(postInput)
    // this.newPost = this.enteredValue;
    const post = {
      title: this.enteredTitle,
      content: this.enteredContent
    }
    // console.log(post.title)
    // console.log(post.content)
    this.postCreate.emit(post)
  }
}
