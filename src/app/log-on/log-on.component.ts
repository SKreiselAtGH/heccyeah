import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase-service/firebase.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-log-on',
  templateUrl: './log-on.component.html',
  styleUrls: ['./log-on.component.scss']
})
export class LogOnComponent implements OnInit {
  checked = false;
  password = '';
  email = '';
  userEmail = '';
  userPassword = '';

  constructor(
    private firebaseService: FirebaseService
  ) {}

  ngOnInit() {
  }

  signIn() {
    this.userPassword = this.password;
    this.userEmail = this.email;
    debugger;
    console.log(`Password: ${this.userPassword}, Email: ${this.userEmail}`);
    this.firebaseService.signIn(this.userEmail, this.userPassword);
  }



}
