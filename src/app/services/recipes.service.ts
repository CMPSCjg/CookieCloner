import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "../../environments/environment";

export const MOCK_COOKIE_RECIPES_RESPONSE = JSON.parse(`
{
    "from": 1,
    "to": 20,
    "count": 10000,
    "_links": {
      "next": {
        "href": "https://api.edamam.com/api/recipes/v2?q=sugar%20cookies&app_key=9e0e776f76b893572427067592520f82&_cont=CHcVQBtNNQphDmgVQntAEX4BYldzGgYEQWVFC2ARZFBwDQMAUXlSC2cRZANxAFZTQWxDUjETZFMhUgtSSjQUBGZCNQcnAAAVLnlSVSBMPkd5BgMbUSYRVTdgMgksRlpSAAcRXTVGcV84SU4%3D&type=public&app_id=75e7a254",
        "title": "Next page"
      }
    },
    "hits": [
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_89a2e1e2a359325b78cb2a332ad92c90",
          "label": "Brown Sugar Cookies",
          "image": "https://www.edamam.com/web-img/564/5642ed9fc505e2afcff5cb006f8bfa33.JPG",
          "source": "Serious Eats",
          "url": "http://www.seriouseats.com/recipes/2011/11/gingery-brown-sugar-cookies-recipe.html",
          "shareAs": "http://www.edamam.com/recipe/brown-sugar-cookies-89a2e1e2a359325b78cb2a332ad92c90/sugar+cookies",
          "yield": 30,
          "dietLabels": [
            "Low-Sodium"
          ],
          "healthLabels": [
            "Low Potassium",
            "Kidney-Friendly",
            "Vegetarian",
            "Pescatarian",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Red-Meat-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "Kosher"
          ],
          "cautions": [],
          "ingredientLines": [
            "2 cups flour",
            "2 teaspoons baking soda",
            "1/2 teaspoon ground cinnamon",
            "1/2 teaspoon salt",
            "1/2 teaspoon ground ginger",
            "12 tablespoons unsalted butter, at room temperature",
            "1 1/4 cups packed dark brown sugar",
            "1 large egg"
          ],
          "ingredients": [
            {
              "text": "2 cups flour",
              "quantity": 2,
              "measure": "cup",
              "food": "flour",
              "weight": 250,
              "foodCategory": "grains",
              "foodId": "food_ahebfs0a985an4aubqaebbipra58",
              "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
            },
            {
              "text": "2 teaspoons baking soda",
              "quantity": 2,
              "measure": "teaspoon",
              "food": "baking soda",
              "weight": 9.2,
              "foodCategory": "condiments and sauces",
              "foodId": "food_asa4cjoa3lmt8ibwdg0cpblheo69",
              "image": "https://www.edamam.com/food-img/7e5/7e55e4482cc2fde91f427fc568e6f5b8.jpeg"
            },
            {
              "text": "1/2 teaspoon ground cinnamon",
              "quantity": 0.5,
              "measure": "teaspoon",
              "food": "ground cinnamon",
              "weight": 1.3,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_atjxtznauw5zabaixm24xa787onz",
              "image": "https://www.edamam.com/food-img/d4d/d4daa18b92c596a1c99c08537c38e65b.jpg"
            },
            {
              "text": "1/2 teaspoon salt",
              "quantity": 0.5,
              "measure": "teaspoon",
              "food": "salt",
              "weight": 3,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "1/2 teaspoon ground ginger",
              "quantity": 0.5,
              "measure": "teaspoon",
              "food": "ground ginger",
              "weight": 0.9,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_a8l1yfna3fgp3ha4a5b5labyetgz",
              "image": "https://www.edamam.com/food-img/ee0/ee08c937de5c45a36bd0ad1eafc67496.jpg"
            },
            {
              "text": "12 tablespoons unsalted butter, at room temperature",
              "quantity": 12,
              "measure": "tablespoon",
              "food": "unsalted butter",
              "weight": 170.39999999999998,
              "foodCategory": "Dairy",
              "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
              "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
            },
            {
              "text": "1 1/4 cups packed dark brown sugar",
              "quantity": 1.25,
              "measure": "cup",
              "food": "dark brown sugar",
              "weight": 275,
              "foodCategory": "sugars",
              "foodId": "food_aodgtqwbmeu5f6bxeffn0art3bga",
              "image": "https://www.edamam.com/food-img/8c6/8c6662bd73900645c6385b51a95d9b03.jpg"
            },
            {
              "text": "1 large egg",
              "quantity": 1,
              "measure": "<unit>",
              "food": "egg",
              "weight": 50,
              "foodCategory": "Eggs",
              "foodId": "food_bhpradua77pk16aipcvzeayg732r",
              "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
            }
          ],
          "calories": 3254.4939999999997,
          "totalWeight": 756.8,
          "totalTime": 25,
          "cuisineType": [
            "american"
          ],
          "mealType": [
            "teatime"
          ],
          "dishType": [
            "biscuits and cookies"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 3254.4939999999997,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 145.47071999999997,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 89.50944799999999,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 5.604711999999999,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 37.873793,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 7.182517,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 462.67699000000005,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 7.5672,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 267.82596,
              "unit": "g"
            },
            "SUGAR.added": {
              "label": "Sugars, added",
              "quantity": 266.805,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 34.01609,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 552.3599999999999,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 2689.237,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 348.698,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 91.864,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 760.629,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 6.072939999999999,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 2.68741,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 423.24,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 1245.7489999999998,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 0.0557,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.32922,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 0.38849900000000004,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 3.640464,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 0.32055,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 96.557,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 96.557,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 0.73468,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 3.5559999999999996,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 4.65844,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 13.240799999999998,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 102.37516000000001,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 162.72469999999998,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 223.80110769230762,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 447.54724,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 154.22566333333336,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 30.268800000000002,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 68.03218,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 184.11999999999998,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 112.05154166666667,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 34.8698,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 21.87238095238095,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 16.183595744680854,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 33.73855555555555,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 24.430999999999997,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 60.462857142857146,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 138.41655555555553,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 0.06188888888888889,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 27.435000000000006,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 29.884538461538465,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 22.7529,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 24.657692307692308,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 24.13925,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 30.611666666666668,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 23.706666666666663,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 31.056266666666666,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 11.033999999999999,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 145.47071999999997,
              "hasRDI": true,
              "daily": 223.80110769230762,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 89.50944799999999,
                  "hasRDI": true,
                  "daily": 447.54724,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 5.604711999999999,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 37.873793,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 7.182517,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 462.67699000000005,
              "hasRDI": true,
              "daily": 154.22566333333336,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 7.5672,
                  "hasRDI": true,
                  "daily": 30.268800000000002,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 267.82596,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 266.805,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 34.01609,
              "hasRDI": true,
              "daily": 68.03218,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 552.3599999999999,
              "hasRDI": true,
              "daily": 184.11999999999998,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 2689.237,
              "hasRDI": true,
              "daily": 112.05154166666667,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 348.698,
              "hasRDI": true,
              "daily": 34.8698,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 91.864,
              "hasRDI": true,
              "daily": 21.87238095238095,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 760.629,
              "hasRDI": true,
              "daily": 16.183595744680854,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 6.072939999999999,
              "hasRDI": true,
              "daily": 33.73855555555555,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 2.68741,
              "hasRDI": true,
              "daily": 24.430999999999997,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 423.24,
              "hasRDI": true,
              "daily": 60.462857142857146,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 1245.7489999999998,
              "hasRDI": true,
              "daily": 138.41655555555553,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 0.0557,
              "hasRDI": true,
              "daily": 0.06188888888888889,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.32922,
              "hasRDI": true,
              "daily": 27.435000000000006,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 0.38849900000000004,
              "hasRDI": true,
              "daily": 29.884538461538465,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 3.640464,
              "hasRDI": true,
              "daily": 22.7529,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 0.32055,
              "hasRDI": true,
              "daily": 24.657692307692308,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 96.557,
              "hasRDI": true,
              "daily": 24.13925,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 96.557,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 0.73468,
              "hasRDI": true,
              "daily": 30.611666666666668,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 3.5559999999999996,
              "hasRDI": true,
              "daily": 23.706666666666663,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 4.65844,
              "hasRDI": true,
              "daily": 31.056266666666666,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 13.240799999999998,
              "hasRDI": true,
              "daily": 11.033999999999999,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 102.37516000000001,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "href": "https://api.edamam.com/api/recipes/v2/89a2e1e2a359325b78cb2a332ad92c90?type=public&app_id=75e7a254&app_key=9e0e776f76b893572427067592520f82",
            "title": "Self"
          }
        }
      }
    ]
  }
`)

@Injectable()
export class RecipesService {

    constructor(private http: HttpClient) {}

    public searchForRecipes(recipeToSearchFor: string): Observable<any> {
        const isProduction = environment.production;
        if (isProduction) {
            const url = 'https://api.edamam.com/api/recipes/v2?app_id=75e7a254&app_key=9e0e776f76b893572427067592520f82&type=public&q=' + recipeToSearchFor;
            return this.http.get(url).pipe(catchError((err) => throwError(err.message || err)))
        } else {
            return of(MOCK_COOKIE_RECIPES_RESPONSE);
        }
    }
}