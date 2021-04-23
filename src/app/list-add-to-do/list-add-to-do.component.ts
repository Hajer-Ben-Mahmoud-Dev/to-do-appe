import { Component, OnInit } from '@angular/core';
import { ToDoAppe } from '../model';
import { TodoListservice } from './list-add-to-do.service';
@Component({
  selector: 'app-list-add-to-do',
  templateUrl: './list-add-to-do.component.html',
  styleUrls: ['./list-add-to-do.component.scss']
})
export class ListAddToDoComponent implements OnInit {
todo: ToDoAppe= new ToDoAppe(' ',false);
  constructor(
    private todolistservice: TodoListservice
  ) { }

  ngOnInit() {
  }

}
