import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() title: string = '';
  @Input() description: string = '';
  @Input() calories: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
