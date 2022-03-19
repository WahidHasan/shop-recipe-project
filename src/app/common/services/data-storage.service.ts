import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Recipe } from "src/app/feature/recipes/recipe.model";
import { RecipeService } from "./recipe.service";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService{
    constructor(private http: HttpClient, private recipeService: RecipeService){}

    storeRecipes(){
        
    }

    getRecipes(){
        return this.recipeService.getRecipes();
    }
}