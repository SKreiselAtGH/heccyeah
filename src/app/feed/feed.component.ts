import { Component, OnInit } from '@angular/core';

export interface FeedPost {
  feedContent: string;
  feedHeader: string;
}

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  feedPosts: FeedPost[] = [
    {feedContent: 'this is a content box', feedHeader: 'This is the header box'},
    {feedContent: 'pizza-1', feedHeader: 'Pizza'},
    {feedContent: 'tacos-2', feedHeader: 'Tacos'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
