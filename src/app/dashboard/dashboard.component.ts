import { Component } from '@angular/core';
import{CommonModule} from '@angular/common';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,TodoListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
