import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { Itodo } from '../../model/todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
//need to strore the data
todoArr! : Array<Itodo>

  constructor(
    private _todoservice:TodoService //inject the service
  ) { }

  ngOnInit(): void {
    this.todoArr = this._todoservice.fetchAlltodos()
  }

  onRemovetodo(todoId:string){
   console.log(todoId)
   this._todoservice.removetodo(todoId)
  }

}
