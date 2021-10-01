import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes-service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  responseData: any;

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
  }

  async searchForRecipe(event: any) {
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
    response.subscribe(responseData => {
      this.responseData = responseData
    })
  }
}
