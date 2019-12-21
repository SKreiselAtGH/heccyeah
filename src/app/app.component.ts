import { Component } from '@angular/core';
import { FirebaseService} from './services/firebase-service/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'heccyeah-ui';
  constructor(
    private firebaseService: FirebaseService
  ) {}
}
