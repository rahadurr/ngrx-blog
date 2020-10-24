import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// NgRX Imports
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CustomRouterSerializer, reducers } from '@app/store';

// App Imports
import { environment } from '@env/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './containers/app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreRouterConnectingModule.forRoot({ serializer: CustomRouterSerializer }),
    StoreDevtoolsModule.instrument({
      name: 'Angular NgRX Redux Blog',
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
