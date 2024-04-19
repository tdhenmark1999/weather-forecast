import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AuthModule } from '@auth0/auth0-angular';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment.prod';

// Setting up the Auth0 configuration
const authConfig = {
  domain: environment.OAUTH_DOMAIN,
  clientId: environment.OAUTH_CLIENT_ID,
  redirectUri: window.location.origin,
  useRefreshTokens: true 
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(AuthModule.forRoot({
      ...authConfig
    })),
  ],
};
