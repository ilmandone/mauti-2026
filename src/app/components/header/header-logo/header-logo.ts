import { Component, input } from '@angular/core';
import {LogoLines} from '../../logo/logo-lines/logo-lines';
import {LogoFlat} from '../../logo/logo-flat/logo-flat';

@Component({
  selector: 'app-header-logo',
  templateUrl: './header-logo.html',
  imports: [LogoLines, LogoFlat]
})
export class HeaderLogo {

}
