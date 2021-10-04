import { Component, Input, OnInit } from '@angular/core';
import { Hits } from '../../models/recipes/Hits';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {

  @Input() hits: Hits;

  constructor() { }

  ngOnInit(): void {
  }

}
