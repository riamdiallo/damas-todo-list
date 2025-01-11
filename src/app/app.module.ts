import { BrowserModule } from "@angular/platform-browser";
import { NgModule} from "@angular/core";
import {RouterModule} from "@angular/router"
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire/compat';
import { environment } from "../environments/environment";
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [

  ],

   imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    FormsModule,
    RouterModule
   ],

   providers: [
       provideFirebaseApp(() => initializeApp({"projectId":"todo-list-angularfire","appId":"1:991723699662:web:363353af34a167d9a2bf9f","storageBucket":"todo-list-angularfire.firebasestorage.app","apiKey":"AIzaSyBj4UAI6FlHhowczpqj5_kQgC8M1p0I1uo","authDomain":"todo-list-angularfire.firebaseapp.com","messagingSenderId":"991723699662"})),
       provideAuth(() => getAuth()),
       provideFirestore(() => getFirestore()),
       provideStorage(() => getStorage())
   ],
})

export class AppModule {}
