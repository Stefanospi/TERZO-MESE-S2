import { Component, OnInit } from '@angular/core';
import { iUser } from '../../Interface/user';
import { iPost } from '../../Interface/post';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  users!:iUser[];
  todoPost!:iPost[];
  constructor(private todoSvc:TodoService){}

  ngOnInit():void{
    this.users = this.todoSvc.ritornaTodoUsers();
    console.log(this.users);
  }




}
