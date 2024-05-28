import { Component, ViewChild } from '@angular/core';
import { PostInterface } from 'src/interfaces/post.interface';
import { SinglePostComponent } from '../single-post/single-post.component';
import { PostServiceService } from '../post-service.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  post!: PostInterface;
  related: PostInterface[] = [];
  posts: PostInterface[] = [];
  uniqueTags: string[] = [];
  filteredPosts: PostInterface[] = [];

  @ViewChild('singlePost') singlePost!: SinglePostComponent;

  constructor(private postService: PostServiceService) {}
  ngOnInit(): void {
    this.post = this.postService.topPost;
    this.related = this.postService.getRandomPosts(4);
    this.posts = this.postService.posts;
    this.uniqueTags = this.postService.getUniqueTags();
    this.filteredPosts = this.posts;
  }
// Inside HomepageComponent class
filterPostsByTag(tag: string): void {
  this.filteredPosts = this.postService.getFilterPostsByTag(tag);
}
  editPost() {
    alert('Edit successful!');
  }
}
