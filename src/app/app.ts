import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Header} from './components/header/header';
import {Footer} from './components/footer/footer';

@Component({
  imports: [RouterOutlet, Header, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  host: {
    '[class]': "'relative block p-6 md:p-10 lg:p-14'"
  }

})
export class App {
  protected readonly title = signal('mauti-2026');
}
