import { Component, Input, OnInit} from '@angular/core';
import { RecipeService } from 'src/app/common/services/recipe.service';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe!: Recipe;
  @Input() index!: number;

  constructor(private recipeservice: RecipeService) { }

  ngOnInit(): void {
  }

  onSelectRecipe(){
    this.recipeservice.recipeSelected.emit(this.recipe);
  }

}
