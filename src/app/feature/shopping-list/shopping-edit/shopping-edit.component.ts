import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/common/models/ingredients.model';
import { ShoppingListService } from 'src/app/common/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('formData') slForm!: NgForm;
  subscription!: Subscription;
  editMode: boolean = false;
  editedItemIndex!: number;
  editedItem!: Ingredient;

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
   this.subscription = this.slService.startedEditing.subscribe((index: number)=>{
    this.editMode = true;
    this.editedItemIndex = index;
    this.editedItem = this.slService.getIngredient(index);
    this.slForm.setValue({
      name: this.editedItem.name,
      amount: this.editedItem.amount
    })
   });
  }
  onSubmit(form: NgForm){
    const value = form.value;
    const newIngrediant = new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.slService.updateIngredient(this.editedItemIndex, newIngrediant)
    }else{
          this.slService.addIngredient(newIngrediant);
    }
    this.editMode = false;
    form.reset();
  }

  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
