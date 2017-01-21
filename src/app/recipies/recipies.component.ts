import { Component, OnInit } from '@angular/core';

import { Recipe } from "./recipe";

@Component({
  selector: 'rb-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent implements OnInit {
  selectedRecipe:Recipe;

  constructor() { }

  ngOnInit() {
  }

}
