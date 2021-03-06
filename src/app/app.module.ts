import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './feature/header/header.component';
import { RecipesComponent } from './feature/recipes/recipes.component';
import { RecipeListComponent } from './feature/recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './feature/recipes/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './feature/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './feature/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './feature/shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
