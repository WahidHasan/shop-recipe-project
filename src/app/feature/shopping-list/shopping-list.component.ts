import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/common/models/ingredients.model';
import { ShoppingListService } from 'src/app/common/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients!: Ingredient[] ;
  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged.subscribe((ingredientList: Ingredient[])=>{
      this.ingredients = ingredientList;
    });
  }
}
