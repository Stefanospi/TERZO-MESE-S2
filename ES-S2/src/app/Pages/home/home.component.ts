import { Component,OnInit } from '@angular/core';
import { TodoService } from '../../todo.service';
import { iUser } from '../../Interface/user';
import { iPost } from '../../Interface/post';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  users!:iUser[];
  todoPost!:iPost[];
  constructor(private todoSvc:TodoService){}

  ngOnInit():void{
    this.todoPost = this.todoSvc.postConAutore();
    console.log(this.todoPost);
  }



}
