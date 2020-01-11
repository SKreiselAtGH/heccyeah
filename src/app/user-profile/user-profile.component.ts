import { Component, OnInit } from '@angular/core';
import {Chat} from '../message-details/message-details.component';
import { FirebaseService } from '../services/firebase-service/firebase.service';
import {Observable} from "rxjs";

export interface Comet {
      cometTitle: string;
      cometText: string;
      cometTimeStamp: string;
}

export interface Planet {
  planetName: string;
  planetDesc: string;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  comet: Comet[] = [
    {cometTitle: 'This is my first post on HeccYeah', cometText: 'short.', cometTimeStamp: '11:59 pm'},
    {cometTitle: 'This is my first post on HeccYeah', cometText: 'hey guys my name is sam and im new on heccyeah.',
      cometTimeStamp: '11:59 pm'},
    {cometTitle: 'This is my first post on HeccYeah', cometText: 'hey guys my name is sam and im new on heccyeah.',
      cometTimeStamp: '11:59 pm'},

  ];

  planet: Planet[] = [
    {planetName: 'This is my first post on HeccYeah', planetDesc: 'hey guys my name is sam and im new on heccyeah.'},
    {planetName: 'This is my first post on HeccYeah', planetDesc: 'hey guys my name is sam and im new on heccyeah.'},
    {planetName: 'This is my first post on HeccYeah', planetDesc: 'hey guys my name is sam and im new on heccyeah.'},

  ];
  username = '';
  userhandle = '';
  constructor(
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    this.loadProfile();
  }
   loadProfile() {
     let obs1: Observable<any>;
     this.firebaseService.getUser().subscribe(resi => {
       console.log(resi);
     });
   }
}
