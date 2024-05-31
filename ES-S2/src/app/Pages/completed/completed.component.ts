import { Component, OnInit } from '@angular/core';
import { iUser } from '../../Interface/user';
import { iPost } from '../../Interface/post';
import { TodoService } from '../../todo.service';


@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss'
})
export class CompletedComponent implements OnInit {
  users!:iUser[];
  todoPost!:iPost[];
  constructor(private todoSvc:TodoService){}

  ngOnInit():void{

    this.todoPost = this.todoSvc.postConAutore();
    console.log(this.todoPost);
  }



}
