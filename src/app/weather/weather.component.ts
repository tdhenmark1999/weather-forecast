import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent implements OnInit {

  today: number = Date.now();
  data: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getWeather().subscribe(
      (response: any) => {
        this.data = response;
        console.log(this.data);
      },
      (error: any) => {
        console.error('Error fetching weather data:', error);
      }
    );
  }
}
