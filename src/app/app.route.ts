import { Routes, RouterModule } from '@angular/router';

import { RecipiesComponent } from './recipies/recipies.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

import { HomeComponent } from './home.component';

const APP_ROUTES: Routes =[
	{path:'', component:HomeComponent },
	{path:'recipes', loadChildren: 'app/recipies/recipies.module#RecipiesModule'},
	{path:'shopping-list', loadChildren: 'app/shopping-list/shopping-list.module#ShoppingListModule'}
	//{path:'shopping-list', component:ShoppingListComponent },
];

export const routing = RouterModule.forRoot(APP_ROUTES);
