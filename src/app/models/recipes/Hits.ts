import { Ingredients } from "./Ingredients";
import { Digest } from "./Digest";
import { Total } from "./Total";

export interface Hits {
    recipe: {
         uri: string
         label: string
         image: string
         source: string
         url: string
         shareAs: string
         yield: number
         dietLabels: Array<string>
         healthLabels: Array<string>
         cautions: Array<string>
         ingredientLines: Array<string>
         ingredients: Array<Ingredients>
         calories: number
         totalWeight: number
         totalTime: number
         cuisineType: Array<string>
         mealType: Array<string>
         dishType: Array<string>
         totalNutrients: Total
         totalDaily: Total
         digest: Array<Digest>
     }
     _links: {
        self: {
             next: {
                 href: string
                 title: string
             }
         }
     }
 }