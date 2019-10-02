import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  notifsChecked = false;
  feedChecked = false;

  constructor() { }

  ngOnInit() {
  }


  // allChecked() {
  //   this.notifsChecked = true;
  //   this.feedChecked = true;
  // }

}
