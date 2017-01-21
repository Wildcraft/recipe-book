import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http'; 

import 'rxjs/Rx';

import { Recipe } from './recipe';

import {Ingredient} from '../shared';

@Injectable()
export class RecipeService {
  recipesChanged = new EventEmitter<Recipe[]>();
  recipes: Recipe[] = [
    new Recipe("Idly Recipe","Idly Recipe", "http://lh6.ggpht.com/-IsGrZ-A90cI/UGJN3zHcFhI/AAAAAAAAak4/qaiKYyYMEZY/IMG_8689_thumb%25255B1%25255D.jpg?imgmax=800", [
    		new Ingredient("Ulunthu",10),
    		new Ingredient("Rice",10),
    		new Ingredient("Corriander",10)
    	]),
    new Recipe("Pongal Recipe","Pongal Recipe", "http://clickhomefood.com/upload/foodimages/x1444810568_Ponga.jpg.pagespeed.ic.mihQFGN5eW.webp", [
    		new Ingredient("pepper",10),
    		new Ingredient("curry Leaves",10),
    		new Ingredient("Rice",10),
    		new Ingredient("Sambar Podi",10)
    	])
  ];
  constructor(private http:Http) { }

  getRecipes() {
  	return this.recipes;
  }

  getRecipe(id:number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe:Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe:Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe:Recipe, newRecipe:Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put("https://recipebook-4013a.firebaseio.com/recipes.json", body, { headers : headers}) ;
  }

  fetchData() {
    return this.http.get("https://recipebook-4013a.firebaseio.com/recipes.json")
    .map((response:Response) => response.json())
    .subscribe(
      (data: Recipe[]) => {
        this.recipes = data;
        this.recipesChanged.emit(this.recipes);
      }
      );
  }
 
}
