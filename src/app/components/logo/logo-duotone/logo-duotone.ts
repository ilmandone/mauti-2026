import {Component, input} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-logo-duotone',
  template: `
    <svg
      class="app-logo-duotone__svg"
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
      role="img"
      aria-label="Logo"
    >
      <path [attr.fill]="fill()" d="M378.8,93.34l3.07-11.84h106.88l101.25,477h-191.25l-24.98-70.29c-17.81-50.13-88.82-49.81-106.17.48l-24.1,69.81H50L151.25,81.5h106.88l3.07,11.84c15.74,60.66,101.87,60.66,117.61,0Z" />
      <circle [attr.fill]="fillCircle()" cx="320" cy="323.38" r="56.25" />
    </svg>
  `,
  styles: `
    :host {
      position: relative;
    }

    .app-logo-duotone__svg {
      width: 100%;
      height: 100%;
    }
  `,
})
export class LogoDuotone {
  readonly fill = input<string>('black');
  readonly fillCircle = input<string>('#4d4d4d');
}
