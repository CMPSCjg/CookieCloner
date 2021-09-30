import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  responseData: any;

  constructor() { }

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
    // const response = await fetch('/api/recipes', {
    //     method: 'POST',
    //     body: JSON.stringify({ recipeToSearchFor }),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // })
    // const responseData: RecipesApiResponse = await response.json();
    this.responseData = { test: 'test' }
  }
}
