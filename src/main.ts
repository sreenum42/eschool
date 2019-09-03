import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'hammerjs';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
// which one is going to be my startup module
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
