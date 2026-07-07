import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // <-- CORREGIDO: Añadido @angular/
import { AppModule } from './app/app-module'; 

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err: any) => console.error(err)); // <-- CORREGIDO: Añadido (: any)