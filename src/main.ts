/*import { bootstrapApplication } from '@angular/platform-browser';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));*/

  import { platformBrowserDynamic }  from '@angular/platform-browser-dynamic';
  import { AppModule } from './app/app.module';

  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err) => console.error(err));
