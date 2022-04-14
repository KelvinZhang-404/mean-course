import { Component } from "@angular/core";

@Component({
  selector: 'app-post-create', // here the '-' after app is the conversion of '/', and should always do this conversion when specify the path
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent {
  enteredValue = '';

  newPost = 'No Content';

  onAddPost() {
    // console.log(postInput)
    this.newPost = this.enteredValue;
  }
}
