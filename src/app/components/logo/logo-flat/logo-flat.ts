import {Component, input} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-logo-flat',
  template: `
    <svg
      [attr.fill]="fill()"
      class="app-logo-flat__svg"
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
      role="img"
      aria-label="Logo"
    >
      <path d="M488.75,81.5h-106.88l-3.07,11.84c-15.74,60.66-101.87,60.66-117.61,0l-3.07-11.84h-106.88l-101.25,477h193.5l24.1-69.81c17.36-50.29,88.36-50.61,106.17-.48l24.98,70.29h191.25l-101.25-477ZM320,379.62c-31.07,0-56.25-25.18-56.25-56.25s25.18-56.25,56.25-56.25,56.25,25.18,56.25,56.25-25.18,56.25-56.25,56.25Z" />
    </svg>
  `,
  styles: `
    :host {
      position: relative;
    }

    .app-logo-flat__svg {
      width: 100%;
      height: 100%;
    }
  `,
})
export class LogoFlat {
  readonly fill = input<string>('black');
}
