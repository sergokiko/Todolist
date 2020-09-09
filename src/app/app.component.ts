import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lesson1';
  newTodo:string = ''
todoList: Array<string> = ['Go to meet clienе', 'visit Mum', 'Have dinner with wife']

  addTodo() {
    this.todoList.push(this.newTodo)
    this.newTodo = ''
  }

  deleteTodo(todo: string) {
    this.todoList = this.todoList.filter(el => el !== todo)
  }
}
