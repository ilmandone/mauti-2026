import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'header[mauti]',
  styleUrl: './header.css',
  templateUrl: './header.html',
  host: {
    '[class]': "'relative block'"
  }
})
export class Header {}
