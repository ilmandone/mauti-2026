import {afterNextRender, Component, inject, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LucideFileText} from '@lucide/angular';
import {ThemeService} from './services/theme.service';

@Component({
  imports: [RouterOutlet, LucideFileText],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  readonly themeService = inject(ThemeService)
  protected readonly title = signal('mauti-2026');

  constructor() {
    afterNextRender(() => {
      window.setTimeout(() => {this.themeService.setColor('mauti-red', 'green')}, 2000)
    })
  }
}
