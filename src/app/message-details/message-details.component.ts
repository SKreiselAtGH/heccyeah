import { Component, OnInit } from '@angular/core';

export interface Chat {
  sender: string;
  senderHandle: string;
  text: string;
  timestamp: string;
}

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.scss']
})

export class MessageDetailsComponent implements OnInit {

  chat: Chat[] = [
    {sender: 'John Smith', senderHandle: '@loserhy', text: 'this is a fake message designed to test the page break functionality,' +
        ' it is currently set to 600 px wide but i think that might be too many characterss', timestamp: '11:59 pm'},
    {sender: 'me', senderHandle: '@hyadmin', text: 'Steak', timestamp: '11:59 pm'},
    {sender: 'John Smith', senderHandle: '@loserhy', text: 'Steak', timestamp: '11:59 pm'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
