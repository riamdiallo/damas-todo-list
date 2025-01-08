import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { SignupComponent } from './signup/signup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, NavbarComponent, TodoListComponent,SignupComponent]
})
export class AppComponent {
  title: string = 'Adam';
}


