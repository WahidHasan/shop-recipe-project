import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/common/services/recipe.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe = {name: '',description: '', imagePath: ''}
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe)=>{
      this.selectedRecipe = recipe;
    })
  }

}
