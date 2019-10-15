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
    {sender: 'John Smith', senderHandle: '@loserhy', text: 'this is a fake message designed to test the page break functionality, it is currently set to 600 px wide but i think that might be too many characterss', timestamp: '11:59 pm'},
    {sender: 'John Smith', senderHandle: '@loserhy', text: 'Steak', timestamp: '11:59 pm'},
    {sender: 'John Smith', senderHandle: '@loserhy', text: 'Steak', timestamp: '11:59 pm'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
