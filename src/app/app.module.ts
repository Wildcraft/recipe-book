import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HearderCompComponent } from './hearder-comp.component';

import { DropdownDirective } from './dropdown.directive';
import { routing } from './app.route';

import { ShoppingListModule } from './shopping-list/shopping-list.module';

import { ShoppingListService } from './shopping-list/shopping-list.service';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    AppComponent,
    HearderCompComponent,
    DropdownDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ShoppingListModule,
    routing
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
