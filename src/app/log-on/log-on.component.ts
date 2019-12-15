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
  username = '';
  userEmail = '';
  userPassword = '';
  confirmPassword = '';
  signUpToggle = false;
  passwordValid = true;
  constructor(
    private firebaseService: FirebaseService
  ) {}

  ngOnInit() {
  }

  signIn() {
    this.userPassword = this.password;
    this.userEmail = this.email;
    debugger;
    this.firebaseService.emailLogin(this.userEmail, this.userPassword);
  }

  signUp() {
    this.signUpToggle = true;
  }

  testPassword() {
    if (this.password === this.confirmPassword) {
      this.passwordValid = true;
    } else {
      this.passwordValid = false;
    }
  }


}
