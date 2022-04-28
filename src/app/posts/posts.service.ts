import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'}) // this tells angular the PostsServices is a resource at the root level
export class PostsService {
  private posts: Post[] = []
  private postsUpdated = new Subject<Post[]>()

  getPosts() {
    // [...array] copy all the elements from the arrary
    return [...this.posts]
    // return this.posts
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable()
  }

  addPost(title: string, content: string) {
    const post: Post = {title: title, content: content}

    this.posts.push(post)

    this.postsUpdated.next([...this.posts])
  }
}
