import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'footer[mauti]',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
  host: {
    '[class]': "'absolute block bottom-0 left-0 w-screen box-border p-6 md:p-10 lg:px-14 lg:py-13 bg-sky-200'"
  }
})
export class Footer {}
