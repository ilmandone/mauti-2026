import { Component } from '@angular/core';
import {HeaderLogo} from './header-logo/header-logo';

@Component({
  imports: [HeaderLogo],
  selector: 'header[mauti]',
  templateUrl: './header.html',
  host: {
    '[class]': "'absolute top-0 left-0 w-screen p-6 md:p-10 lg:px-14 lg:py-13 flex justify-end bg-red-300'"
  }
})
export class Header {}
