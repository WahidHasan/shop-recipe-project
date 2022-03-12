import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/common/models/ingredients.model';
import { ShoppingListService } from 'src/app/common/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('amountInput') amountInputRef!: ElementRef;

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }
  onAddItem(){
    const ingrediantName = this.nameInputRef.nativeElement.value;
    const ingrediantAmount = this.amountInputRef.nativeElement.value;
    const newIngrediant = new Ingredient(ingrediantName, ingrediantAmount);
    this.slService.addIngredient(newIngrediant);
  }
}
