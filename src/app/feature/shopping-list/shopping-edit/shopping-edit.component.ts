import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/common/models/ingredients.model';
import { ShoppingListService } from 'src/app/common/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }
  onAddItem(form: NgForm){
    const value = form.value;
    const newIngrediant = new Ingredient(value.name, value.amount);
    this.slService.addIngredient(newIngrediant);
  }
}
