import {Component} from '@angular/core';
import {LogoLines} from '../../logo/logo-lines/logo-lines';
import {LogoFlat} from '../../logo/logo-flat/logo-flat';
import {LogoDuotone} from '../../logo/logo-duotone/logo-duotone';

@Component({
  selector: 'app-header-logo',
  templateUrl: './header-logo.html',
  imports: [LogoLines, LogoFlat, LogoDuotone]
})
export class HeaderLogo {}
