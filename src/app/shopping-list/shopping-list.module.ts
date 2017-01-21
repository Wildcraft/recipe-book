import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list-add.component';
import { shoppingListRouting } from "./shopping-list.route";

@NgModule({
	declarations: [
	  ShoppingListComponent,
      ShoppingListAddComponent
    ],
	imports: [ FormsModule, ReactiveFormsModule, SharedModule, shoppingListRouting]
})
export class ShoppingListModule {

}