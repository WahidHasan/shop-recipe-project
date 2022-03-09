import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/common/models/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Oranges', 5),
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onIngrediantAdded(newIngrediant: Ingredient){
    this.ingredients.push(newIngrediant);
  }

}
