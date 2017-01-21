import { Component } from '@angular/core';

import { RecipeService } from './recipies'; 

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService]
})
export class AppComponent {
}
