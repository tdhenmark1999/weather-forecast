import { Component } from '@angular/core';
import { LoginButtonComponent } from './login-button/login-button.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [LoginButtonComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
