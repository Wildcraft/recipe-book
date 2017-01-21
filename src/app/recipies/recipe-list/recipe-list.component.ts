import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import {Recipe} from '../recipe';

import {Ingredient} from '../../shared';

import {RecipeService} from '../recipe.service';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  //recipe = new Recipe("Idly Recipe","Idly Recipe", "http://lh6.ggpht.com/-IsGrZ-A90cI/UGJN3zHcFhI/AAAAAAAAak4/qaiKYyYMEZY/IMG_8689_thumb%25255B1%25255D.jpg?imgmax=800", []);

  //@Output() recipeSelected = new EventEmitter<Recipe>();
  
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.recipeService.recipesChanged.subscribe(
      (recipes:Recipe[]) => this.recipes = recipes
      );
  }

  onSelected(recipe:Recipe) {
    //this.recipeSelected.emit(recipe);
  }

}
