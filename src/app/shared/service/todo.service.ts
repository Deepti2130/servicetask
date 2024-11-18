import { inject, Inject, Injectable } from '@angular/core';
import { Itodo } from '../model/todo';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoArr:Array<Itodo> = [
    {
      todoItem:"Angular 14",
      todoId:"123"
    },
    {
      todoItem:"Flex",
      todoId:"124"
    }
  ]

  private _snakBarservice = inject(SnackbarService)
  constructor() { }


  fetchAlltodos(){
    //API call to fetch all todos, it is need to call in todolist
    return this.todoArr
  }

  addNewtodo(todo:Itodo){
  //API call to add the todo
  this.todoArr.push(todo)

  //msg for todo addn
  this._snakBarservice.opensnackBar(`New todoItem ${todo.todoItem} is added successfully`)
  }

  removetodo(id:string){
    //API call to remove todo
    let getIndex=this.todoArr.findIndex(todo=>todo.todoId === id);

    let removeobj = this.todoArr[getIndex]

    this.todoArr.splice(getIndex,1)

    this._snakBarservice.opensnackBar(`TodoItem ${removeobj.todoItem} is removed successfully`)

  }
}
