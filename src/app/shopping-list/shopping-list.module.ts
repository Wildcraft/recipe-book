import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list-add.component';
import { shoppingListRouting } from "./shopping-list.route";

@NgModule({
	declarations: [
	  ShoppingListComponent,
      ShoppingListAddComponent
    ],
	imports: [ FormsModule, ReactiveFormsModule, CommonModule, shoppingListRouting]
})
export class ShoppingListModule {

}