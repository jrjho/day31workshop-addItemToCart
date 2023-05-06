import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemlistComponent } from './components/itemlist.component';
import { CartComponent } from './components/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemlistComponent,
    CartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
