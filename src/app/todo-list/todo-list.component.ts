import { Component } from "@angular/core";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl:'./todo-list.component.html'

})

export class TodoListComponent {

  title : string = 'Liste de tâches';

}
