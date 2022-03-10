import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://live.staticflickr.com/65535/51129079431_9ec756feb6_b.jpg'),
    new Recipe('A Test Recipe 2', 'Another Test Recipe', 'https://www.maxpixel.net/static/photo/1x/Home-Recipes-Cuisine-Cooking-How-To-Cook-5774553.jpg')
  ];
  @Output() recipeItemSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipeElement: Recipe){
    this.recipeItemSelected.emit(recipeElement);
  }

}
