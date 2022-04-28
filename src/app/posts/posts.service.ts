import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = []

  getPosts() {
    // [...array] copy all the elements from the arrary
    // return [...this.posts]
    return this.posts
  }

  addPost(title: string, content: string) {
    const post: Post = {title: title, content: content}

    this.posts.push(post)
  }
}
