import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/common/models/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('amountInput') amountInputRef!: ElementRef;

  @Output() ingrediantAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }
  onAddItem(){
    const ingrediantName = this.nameInputRef.nativeElement.value;
    const ingrediantAmount = this.amountInputRef.nativeElement.value;
    const newIngrediant = new Ingredient(ingrediantName, ingrediantAmount);
    this.ingrediantAdded.emit(newIngrediant);
  }
}
