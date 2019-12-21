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
  private newUser: any;
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

  //   Create a new user
  createUser(email, password, firstName, lastName, handle) {
    let newUser: { email: any; password: string; fullName: string; handle: any };
    newUser = {
      handle,
      fullName: firstName + ' ' + lastName,
      password,
      email,
    };
    const fullName = firstName + ' ' + lastName;

    firebase.auth().createUserWithEmailAndPassword(email, password).then(r => {
        this.loggedIn = true;
        this.writeUserData( fullName, email, handle, firstName, lastName);

      }, err => {
       console.log('cannot create new user: ', err);
    });

  }

  // write the data to the DB
  writeUserData(name, email, handle, firstName, lastName) {
    const db = firebase.firestore();
    db.collection('app/users/user_info').add({
      user_handle: handle,
      user_email: email,
      user_fullname: name,
      user_lname: lastName,
      user_fname: firstName
    })
      .then(docRef => {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch(error => {
        console.error('Error adding document: ', error);
      });

    console.log('write user data');
  }


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

          const user = firebase.auth().currentUser;

          if (user) {
            this.loggedIn = true;
            console.log('we gucci');

          } else {
            this.loggedIn = false;
          }
        }).catch((error) => {
          console.log('error loggin in');
        }));
    }
    console.log(obs);
    return obs;
  }

  getUser() {
    const db = firebase.firestore();
    const user = firebase.auth().currentUser;
    const userRef = db.collection('app').doc('users').collection('user_info').doc('0jhdtF94LvpxmTNHJrpp');
    userRef.get()
    console.log(userRef);
  }
}
