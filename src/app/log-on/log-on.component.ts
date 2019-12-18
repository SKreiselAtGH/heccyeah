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
  checked2 = false;
  password = '';
  newPassword = '';
  email = '';
  firstName = '';
  lastName = '';
  username = '';
  userEmail = '';
  userPassword = '';
  confirmPassword = '';
  signUpToggle = false;
  passwordValid = true;
  passQualValid = true;
  usernameValid = true;
  emailValid = true;
  firstNValid = true;
  lastNValid = true;

  constructor(
    private firebaseService: FirebaseService
  ) {}

  ngOnInit() {
  }

  signIn() {
    this.userPassword = this.password;
    this.userEmail = this.email;
    if (this.userEmail.length > 0 && this.userPassword.length > 0) {
      this.firebaseService.emailLogin(this.userEmail, this.userPassword);
    }
  }

  formChange() {
    this.signUpToggle = !this.signUpToggle;
  }

  signUp() {
    if (this.isValidSignUp()) {
     this.firebaseService.createUser(this.email, this.newPassword, this.firstName, this.lastName, this.username);
    } else {
        console.log('Invalid sign up');
      }
  }

  isValidSignUp() {
    this.testPassword();
    this.emailValid = (this.email.length > 0);
    this.usernameValid = (this.username.length > 0);
    this.firstNValid = (this.firstName.length > 0);
    this.lastNValid = (this.lastName.length > 0);
    return this.emailValid && this.usernameValid && this.firstNValid && this.lastNValid;
  }

  testPassword() {
    const pattern = new RegExp('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})');
    if (this.newPassword === this.confirmPassword) {
      this.passwordValid = true;
    } else {
      this.passwordValid = false;
    }
    if (pattern.test(this.newPassword)) {
      this.passQualValid = true;
    } else {
      this.passQualValid = false;
    }
  }


}
