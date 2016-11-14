//Entry point
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule); //JiT and not AoT. For AoT AppModule.moduel.ngFactory needs to be imported. More info at the angular documentation
