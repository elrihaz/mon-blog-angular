import { PostService } from './../services/post.service';
import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../Models/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit {

  postsList: Array<Post>;

  constructor(private postService:PostService) { }

  ngOnInit() {
    this.postsList=this.postService.posts;
  }

}
