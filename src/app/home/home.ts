import { Component,signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';
import { Counter } from '../components/counter/counter';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Greeting, Counter],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home {
  homeMessage= signal('Hello world!');
  
  keupHandler(event: KeyboardEvent) {
   console.log(`Keyup event: ${event.key}`);
  }
}
