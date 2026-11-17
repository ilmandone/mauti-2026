import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LucideFileText} from '@lucide/angular';

@Component({
  imports: [RouterOutlet, LucideFileText],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('mauti-2026');
}
