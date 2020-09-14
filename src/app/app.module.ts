import { NgModule, inject, InjectFlags, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';

export const ROUTER_EVENTS = new InjectionToken('Router events', {
  providedIn: "root",
  factory() {
    const router = inject(Router, InjectFlags.Optional);
    return router?.events ?? EMPTY;
  }
});


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
  constructor(){
    const events = inject(ROUTER_EVENTS);

    events.subscribe({
      complete: () => console.log('complete')
    })
  }
}
