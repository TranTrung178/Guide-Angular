import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Đảm bảo rằng bạn có tệp app.routes.ts để khai báo các route

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
  ]
};
