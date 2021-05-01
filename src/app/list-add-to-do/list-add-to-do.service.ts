import { Injectable } from '@angular/core';
import { ToDoAppe } from './../model';
@Injectable({
  providedIn: 'root',
})
export class TodoListservice {
  listtodo:ToDoAppe[]=[];
  AddToDoList(todo:ToDoAppe){
    this.listtodo.push(todo)
  }
}
