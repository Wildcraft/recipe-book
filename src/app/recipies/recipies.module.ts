import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start.component';
import { RecipiesComponent } from './recipies.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { recipesRouting } from './recipe.route';

@NgModule({
	declarations: [
	  	RecipiesComponent,
	    RecipeListComponent,
	    RecipeDetailComponent,
	    RecipeEditComponent,
	    RecipeItemComponent,
	    RecipeStartComponent
    ],
	imports: [ FormsModule, ReactiveFormsModule, SharedModule, recipesRouting ]
})
export class RecipiesModule {

}