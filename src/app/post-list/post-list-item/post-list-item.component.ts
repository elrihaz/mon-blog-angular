import { PostService } from './../../services/post.service';
import {Post} from './../../Models/post';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent {

  @Input() post: Post;
  @Input() index: number;

  constructor(private postService: PostService) {}

  onLoveIt() {
    this.postService.onLovePost(this.index);
    // this.post.loveIts = this.postService.posts[this.index].loveIts;
  }

  onDontLoveIt() {
    this.postService.onDontLovePost(this.index);
    // this.loveIts = this.postService.posts[this.index].loveIts;
  }
}
