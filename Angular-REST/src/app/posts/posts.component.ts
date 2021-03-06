import { PostService } from './post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
 posts = [];
  constructor(private postService: PostService) { }

  ngOnInit() {
  this.postService.getPosts()
  .subscribe(response => {
    this.posts = response;
  });
}

}
