import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/common/models/ingredients.model';
import { ShoppingListService } from 'src/app/common/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients!: Ingredient[] ;
  private igChangeSub!: Subscription;
  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.igChangeSub = this.slService.ingredientsChanged.subscribe((ingredientList: Ingredient[])=>{
      this.ingredients = ingredientList;
    });
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }
}
