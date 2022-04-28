import { Component, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";

// import { Post } from "../post.model";
import { PostsService } from "../posts.service";

@Component({
  selector: 'app-post-create', // here the '-' after app is the conversion of '/', and should always do this conversion when specify the path
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredContent = ''
  enteredTitle = ''
  // postCreated = new EventEmitter<Post>()

  constructor(public postsService: PostsService) {} // this is the shortcut of writing property outside and initialise in constructor
  // newPost = 'No Content';

  onAddPost(form: NgForm) {
    console.log(form)
    if (form.invalid) {
      return
    }
    // this.newPost = this.enteredValue;
    // const post: Post = {
    //   title: form.value.title,
    //   content: form.value.content
    // }
    // console.log(post.title)
    // console.log(post.content)
    this.postsService.addPost(form.value.title, form.value.content);
  }
}
