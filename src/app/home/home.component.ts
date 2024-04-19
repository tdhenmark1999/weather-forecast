import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(
    public auth: AuthService,
    public apiService: ApiService
  ) { }

  cityData = ''

  onSubmit() {
    this.apiService.submit(this.cityData);
  }
}
