import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, DocumentData } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  public ids: string[];
  observe: Observable<any>;
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
}
