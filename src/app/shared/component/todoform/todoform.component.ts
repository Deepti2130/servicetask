import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { NgForm } from '@angular/forms';
import { UuidService } from '../../service/uuid.service';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.scss']
})
export class TodoformComponent implements OnInit {
@ViewChild("todoForm") todoForm! :NgForm
  constructor(
    private _todoservice:TodoService,
    private _uuidservice:UuidService
  ) { }

  ngOnInit(): void {
  }

  ontodoAdd(){
  if(this.todoForm.valid){
    let todoobj = {...this.todoForm.value, todoId:this._uuidservice.generateUuid() }
    console.log(todoobj)
    this._todoservice.addNewtodo(todoobj)
    this.todoForm.reset()
  }
  }

}
