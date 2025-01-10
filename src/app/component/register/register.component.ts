import { Component,OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    email : string ='';
    password : string ='';

    constructor(private auth : AuthService) { }

    ngOnInit(): void {

    }

  register() {

  if (this.email == '') {
    alert('Please enter email');
    return;

  }
  if (this.password== '') {
    alert('Please enter password');
    return;

  }
  this.auth.register(this.email,this.password);

  this.email ='';
  this.password ='';
}
}

