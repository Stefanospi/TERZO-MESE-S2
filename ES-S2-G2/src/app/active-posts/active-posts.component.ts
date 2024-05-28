import { PostServiceService } from './../post-service.service';
import { Component, OnInit } from '@angular/core';
import { PostInterface } from 'src/interfaces/post.interface';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss'],
})
export class ActivePostsComponent {

  active!: PostInterface[]
  /* RICHIAMO IL SERVICE */
  constructor(private postService: PostServiceService) {
  }
  ngOnInit(): void {
    this.active = this.postService.activePosts;
  }

}
