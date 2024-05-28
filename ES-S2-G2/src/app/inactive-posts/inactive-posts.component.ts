import { Component } from '@angular/core';
import { PostInterface } from 'src/interfaces/post.interface';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent {



  inactive!: PostInterface[]
  /* RICHIAMO IL SERVICE */
  constructor(private postService: PostServiceService) {
  }
  ngOnInit(): void {
    this.inactive = this.postService.inactivePosts;
  }
}
