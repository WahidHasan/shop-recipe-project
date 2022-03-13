import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "src/app/feature/recipes/recipe.model";
import { Ingredient } from "../models/ingredients.model";
import { ShoppingListService } from "./shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://live.staticflickr.com/65535/51129079431_9ec756feb6_b.jpg',
      [new Ingredient('Meat', 1)]
    ),
    new Recipe(
      'A Test Recipe 2',
      'Another Test Recipe',
      'https://www.maxpixel.net/static/photo/1x/Home-Recipes-Cuisine-Cooking-How-To-Cook-5774553.jpg',
      [new Ingredient('Potato', 2)]
    ),
  ];

  constructor(private slService: ShoppingListService){}

  getRecipe(id: number){
    return this.recipes[id];
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}