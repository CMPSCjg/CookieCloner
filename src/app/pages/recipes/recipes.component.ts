import { Component, OnInit } from '@angular/core';
import { RecipesApiResponse } from '../../models/recipes/RecipesApiResponse';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  isLoadingRecipesApi: boolean = false;
  responseData: RecipesApiResponse;

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
  }

  async searchForRecipe(event: any) {
    // Update the 'isLoadingRecipesApi' flag to be true.
    this.isLoadingRecipesApi = true;

    // Cancel the submit request from the browser side.
    if (event) event.preventDefault();

    // Parse the entered recipe name from the search bar input field, making sure to remove any additional whitespace.
    let recipeToSearchFor = event?.target?.children[0]?.value;
    recipeToSearchFor = recipeToSearchFor.trim();

    // If the search bar input field is empty, do not execute the API request.
    if (!recipeToSearchFor) 
        return;

    // Execute API request with recipeToSearchFor as query parameter.
    const response = await this.recipesService.searchForRecipes(recipeToSearchFor)
    response.subscribe((responseData: RecipesApiResponse) => {

      // With the response coming back, update the 'isLoadingRecipesApi' flag to be false.
      this.isLoadingRecipesApi = false;

      // Store the response data coming back from the Recipes API.
      this.responseData = responseData
    })
  }
}
