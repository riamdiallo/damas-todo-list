import { BrowserModule } from "@angular/platform-browser";
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import {RouterModule} from "@angular/router";
import { TodoListComponent } from "./todo-list/todo-list.component";
import {NavbarComponent } from "./navbar/navbar.component";
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire/compat';
import {SignupComponent} from "./signup/signup.component";
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
  ],

   imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    //SignupComponent,
   // NavbarComponent,
    //TodoListComponent

   ],

    /*providers:[
    provideFirebaseApp(() => initializeApp({"projectId":"todo-list-angularfire","appId":"1:991723699662:web:363353af34a167d9a2bf9f","storageBucket":"todo-list-angularfire.firebasestorage.app","apiKey":"AIzaSyBj4UAI6FlHhowczpqj5_kQgC8M1p0I1uo","authDomain":"todo-list-angularfire.firebaseapp.com","messagingSenderId":"991723699662"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],*/
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class AppModule {}
