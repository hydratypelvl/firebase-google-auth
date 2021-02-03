import { User } from './User';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  constructor(private fireAuth: AngularFireAuth) {
    this.fireAuth.authState.subscribe(user=>{
      this.user = user;
    });
  }

  async loginWithGoogle() {
    await this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      res=>{
        console.log('login Successful!');

      }).catch(err=>{
        console.log('error while signing in', err);
      });
  }
}
