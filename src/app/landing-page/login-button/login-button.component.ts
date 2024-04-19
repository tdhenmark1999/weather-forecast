import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-button',
  standalone: true,
  imports: [],
  templateUrl: './login-button.component.html',
  styleUrl: './login-button.component.scss'
})
export class LoginButtonComponent {

  constructor(
    public auth: AuthService,
    private router: Router
  ) { }

  login() {
    this.auth.loginWithPopup().subscribe(response=>{
      this.router.navigate(['/home'])
    });
  }
}
