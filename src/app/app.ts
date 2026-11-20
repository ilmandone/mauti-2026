import {afterNextRender, Component, inject, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LucideFileText} from '@lucide/angular';
import {Header} from './components/header/header';
import {Footer} from './components/footer/footer';

@Component({
  imports: [RouterOutlet, Header, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('mauti-2026');
}
