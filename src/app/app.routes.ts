import { Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { WeatherComponent } from './weather/weather.component';

export const routes: Routes = [
    { path: '', redirectTo: '/landing-page', pathMatch: 'full' },
    { path: 'landing-page', component: LandingPageComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'weather', component: WeatherComponent, canActivate: [AuthGuard] }
];
