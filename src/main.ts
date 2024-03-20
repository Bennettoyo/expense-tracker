import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';

// Removed appconfig from this, add back in if routing is giving trouble
bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations()
  ]
})
  .catch((err) => console.error(err));
