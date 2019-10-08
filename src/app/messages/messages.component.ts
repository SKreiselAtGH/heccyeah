import { Component, OnInit } from '@angular/core';
import {Post} from '../home-page/home-page.component';

export interface Message {
  sender: string;
  senderHandle: string;
  text: string;
  timestamp: string;
}

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  messages: Message[] = [
    {sender: 'John Smith', senderHandle: '@loserhy', text: 'Steak', timestamp: '11:59 pm'},
    {sender: 'John Smith', senderHandle: '@loserhy', text: 'Steak', timestamp: '11:59 pm'},
    {sender: 'John Smith', senderHandle: '@loserhy', text: 'Steak', timestamp: '11:59 pm'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
