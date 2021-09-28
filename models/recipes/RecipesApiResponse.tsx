import { Hits } from "./Hits";

export interface RecipesApiResponse { 
    from: number
    to: number
    count: number
    _links: {
        next: {
            href: string
            title: string
        }
    }
    hits: Array<Hits>
}