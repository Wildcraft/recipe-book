import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipies/recipe.service';
import 'rxjs/Rx';

@Component({
  selector: 'rb-hearder-comp',
  templateUrl: './hearder-comp.component.html',
  styleUrls: ['./hearder-comp.component.css']
})
export class HearderCompComponent {

  constructor(private recipeService:RecipeService) {
  }

  onStore() {
  	console.log("Trying to Store data");
  	this.recipeService.storeData().subscribe(
  		data => console.log(data),
  		error => console.log(error)
  		);
  }

  onFetch() {
  	this.recipeService.fetchData();
  }



}
