import { Component, Input } from "@angular/core";

import { Post } from "../post.model";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  // posts = [
  //   {title: 'Fist Post', content: 'content for first post'},
  //   {title: 'Second Post', content: 'content for second post'},
  //   {title: 'Third Post', content: 'content for third post'},
  // ]
  @Input() posts: Post[] = []

}
