import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
//Provides necesarios para el manejo de rutas y peticiones http

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),//Hace que el :id de una ruta llegue como un @Input()
    provideHttpClient()
  ]
};
