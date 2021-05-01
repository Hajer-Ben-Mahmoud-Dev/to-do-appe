import { TodoListservice } from './../list-add-to-do/list-add-to-do.service';
import { Component, OnInit } from '@angular/core';
import { ToDoAppe } from '../model';

@Component({
  selector: 'app-list-to-do',
  templateUrl: './list-to-do.component.html',
  styleUrls: ['./list-to-do.component.scss']
})
export class ListToDoComponent implements OnInit {
  constructor(
    public todolistservice: TodoListservice
  ) {

  }

  ngOnInit() {
  }

}
