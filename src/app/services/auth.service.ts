import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
//a voir si necessaire
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  signUp(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }
  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email,password);
  }
  logout(){
    return this.afAuth.signOut();
  }
}
