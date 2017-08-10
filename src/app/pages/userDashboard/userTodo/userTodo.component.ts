import { Component, OnInit } from '@angular/core';
import { BaThemeConfigProvider } from '../../../theme';
import { TodoService } from './todo.service';
import { TodoServiceStatic } from './userTodo.service';

@Component({
  selector: 'userTodo',
  templateUrl: './userTodo.html',
  styleUrls: ['./userTodo.scss']
})
export class UserTodo implements OnInit {

add = {};
  public dashboardColors = this._baConfig.get().colors.dashboard;
  public todoList: Array<any>;
  public newTodoText: string = '';
  constructor(private _baConfig: BaThemeConfigProvider,
              private _todoService: TodoService,
              private todo: TodoServiceStatic) {
    // this.todoList = this.todo.getTodoList();
    this._todoService.getAllTodos().subscribe((data) => {
      this.todoList = data;
      console.log(this.todoList);
      this.todoList.forEach((item) => {
        item.color = this._getRandomColor();
      });
    });
  }
  /*getNotDeleted() {
    return this.todoList.filter((item: any) => {
      return !item.deleted
    })
  }*/
  addToDoItem($event) {
    if (($event.which === 1 || $event.which === 13) && this.newTodoText.trim() != '') {
      this.todoList.unshift({
        description: this.newTodoText,
        color: this._getRandomColor(),
      });
      this._todoService.addToDo(this.newTodoText).subscribe((data) => {
      });
      this.newTodoText = '';
    }
  }
  deletedTodo(id) {
    this._todoService.delTodo(id).subscribe((data) => {
    });
  }
  private _getRandomColor() {
    let colors = Object.keys(this.dashboardColors).map(key => this.dashboardColors[key]);
/*=======
  data;
  public dashboardColors = this._baConfig.get().colors.dashboard;

  public todoList: Array<any>;
  public newTodoText: string = '';

  constructor(private _baConfig: BaThemeConfigProvider,
              private _todoService: TodoServiceStatic,
              private todo: TodoService) {
    this.todoList = this._todoService.getTodoList();
     this.todo.getAllTodos().subscribe((todoList) => {
      this.todoList = todoList;
      console.log(this.todoList);
    });
    this.todoList.forEach((item) => {
      item.color = this._getRandomColor();
    });
  }

  getNotDeleted() {
    return this.todoList.filter((item: any) => {
      return !item.deleted
    })
  }

  addToDoItem($event) {

    if (($event.which === 1 || $event.which === 13) && this.newTodoText.trim() != '') {

      this.todoList.unshift({
        text: this.newTodoText,
        color: this._getRandomColor(),
      });
      this.newTodoText = '';
    }
  }

  private _getRandomColor() {
    let colors = Object.keys(this.dashboardColors).map(key => this.dashboardColors[key]);

>>>>>>> origin*/
    var i = Math.floor(Math.random() * (colors.length - 1));
    return colors[i];
  }
  ngOnInit() {

    /*this._todoService.getAllTodos().subscribe((data) => {
      this.todoList = data;
      console.log(this.todoList);
    });
*/
  }

}
