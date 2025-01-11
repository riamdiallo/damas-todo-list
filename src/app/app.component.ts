import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, NavbarComponent, TodoListComponent,DashboardComponent,RouterModule]
})
export class AppComponent {
  title: string = 'Adam';
}


