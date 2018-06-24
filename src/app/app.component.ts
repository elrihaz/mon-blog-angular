import { Component, Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-blog',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@Injectable()
export class AppComponent {

  constructor() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyDkzDHFupKlDDkvIaEwoWRNbPzFzYvg5Wo',
      authDomain: 'posts-2a744.firebaseapp.com',
      databaseURL: 'https://posts-2a744.firebaseio.com',
      projectId: 'posts-2a744',
      storageBucket: 'posts-2a744.appspot.com',
      messagingSenderId: '188930650350'
    };
    firebase.initializeApp(config);
  }

}
