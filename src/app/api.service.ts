import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://api.openweathermap.org/data/2.5/weather';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  private city: string = '';

  submit(input: string): void {
    this.city = input;
    this.router.navigate(['/weather']);
  }

  getWeather(): Observable<any> {
    if (!this.city) {
      throw new Error('City name is not provided');
    }
    const apiKey = environment.WEATHER_API_KEY;
    const url = `${this.apiUrl}?q=${this.city}&APPID=${apiKey}`;
    return this.http.get(url);
  }
}
