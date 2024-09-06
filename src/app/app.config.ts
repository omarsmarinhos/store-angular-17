import { ApplicationConfig } from '@angular/core';
import { PreloadAllModules, provideRouter, withComponentInputBinding, withPreloading} from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
//Provides necesarios para el manejo de rutas y peticiones http

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding(), withPreloading(PreloadAllModules)),
    //withComponentInputBinding Hace que el :id de una ruta llegue como un @Input()
    //withPreloading(PreloadAllModules) hace que en un tiempo muerto, el navegador empiece a descargar los chunks restantes que crea el lazyloading
    provideHttpClient()
  ]
};
