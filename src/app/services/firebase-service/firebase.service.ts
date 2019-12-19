import { Injectable, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument, DocumentData} from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase';
import 'firebase/auth';

import {User} from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  public ids: string[];
  observe: Observable<any>;
  private fs: any;
  loggedIn = false;
  name = '';
  private auth: any;
  constructor(public db: AngularFirestore,
              public http: HttpClient) { }

  initDB() {
    let check: Observable<any>;
    check = this.db.collection('users').valueChanges();
    this.getUsers();
    console.log(this.ids);
    return check;
  }

  getUsers() {

  }

  getUserInfo() {

  }

  date() {
    console.log('changed');
    return this.http.get<any>('https://api.timezonedb.com/v2.1/get-time-zone?key=QSU8HCQU9BBY&format=json&by=zone&zone=CDT');
  }

  createMessage(value) {
    return this.db.collection('messages').add({
      msg: value
    });
  }

  deleteMessages() {
    console.log(this.ids);
    this.ids.forEach (function(e) {
      this.observe = this.db.collection('messages').doc(e).delete();
    }, this);
    return this.observe;
  }

  //   // Register a new user
  createUser(email, password, firstName, lastName, handle) {
    let newUser: { email: any; password: string; fullName: string; handle: any };
    newUser = {
      handle,
      fullName: firstName + ' ' + lastName,
      password,
      email,
    };

    firebase.auth().createUserWithEmailAndPassword(email, password).then(r => {
        this.loggedIn = true;
        console.log(newUser);
      }, err => {
       console.log('cannot create new user');
    });

  }

  //
  // // Sign in existing user
  //   firebase.auth().signInWithEmailAndPassword(email, password)
  // .catch(function(err) {
  //     // Handle errors
  //   });
  //
  // // Sign out user
  //   firebase.auth().signOut()
  // .catch(function (err) {
  //     // Handle errors
  //   });


  emailLogin(email, password) {
    let obs: Observable<any>;
    if (this.loggedIn === true) {
      console.log('You are already logged in');
    } else {
      obs = from(firebase.auth().signInWithEmailAndPassword(email, password)
        .then((credentials) => {
          this.loggedIn = true;
          this.updateUserData(credentials.user);
        }).catch((error) => {
          console.log('error loggin in');
        }));
    }
    console.log(obs);
    return obs;
  }
  private oAuthLogin(provider) {
    this.loggedIn = true;
    return this.auth.auth.signInWithPopup(provider)
      .then((credentials) => {
        this.name = credentials.user.displayName;
        this.updateUserData(credentials.user);
      });
  }
  private updateUserData(user) {

    const userRef: AngularFirestoreDocument<any> = this.fs.doc(`users/${user.id}`);
    userRef.get().toPromise()
      .then((res) => {
        let data: { email: any; password: string; fullName: string; handle: any, id: any };
        data = {
          id: user.uid,
          handle: user.handle,
          email: user.email,
          password: user.password,
          fullName: user.fullName
        };
        console.log(data);
        // this.userHold = data;
        return userRef.set(data, { merge: true });

      });
  }
}
