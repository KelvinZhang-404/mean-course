import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from 'rxjs'; // use Subscription to prevent memory leak
import { Post } from "../post.model";
import { PostsService } from "../posts.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   {title: 'Fist Post', content: 'content for first post'},
  //   {title: 'Second Post', content: 'content for second post'},
  //   {title: 'Third Post', content: 'content for third post'},
  // ]
  // @Input() posts: Post[] = []
  posts: Post[] = []
  private postsSub!: Subscription;

  constructor(public postsService: PostsService) {}

  ngOnInit(): void {
    this.posts = this.postsService.getPosts()
    this.postsSub = this.postsService.getPostUpdateListener().subscribe((posts: Post[]) => {
      this.posts = posts
    })
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe(); // release memory so that it can prevent memory leak
  }
}
