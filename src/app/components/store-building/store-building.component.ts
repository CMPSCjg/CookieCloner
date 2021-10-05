import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NumberFormatType } from '../../models/NumberFormatType';

@Component({
  selector: 'app-store-building',
  templateUrl: './store-building.component.html',
  styleUrls: ['./store-building.component.css']
})
export class StoreBuildingComponent implements OnInit {

  NumberFormatType = NumberFormatType;

  @Input() building;
  @Output() storeBuildingClick = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  clickedStorebuilding(id: number) {
    this.storeBuildingClick.emit(id)
  }

  formatLargerNumber(numberToFormat: number, format?: NumberFormatType): string {
    switch (format) {
        case NumberFormatType.COMMA:
            return Math.floor(numberToFormat)?.toLocaleString();
        case NumberFormatType.WORD:
            return this.getNumberUnit(numberToFormat)
        default:
            return Math.floor(numberToFormat)?.toLocaleString();
    }
  }

  getNumberUnit(number: number) {
    const units = ['million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 
    'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quattuordecillion', 'quindecillion',
    'sexdecillion', 'septendecillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'centillion']
    let base = 0
    let unitValue = '';

    // Check if the number is not finite.
    if (!isFinite(number)) return 'Infinity';

    // Increment the base counter for every 3 zeroes found in the number until there are no longer more than 3 zeroes left.
    if (number >= 1000000)
    {
        number /= 1000;
        while(Math.round(number) >= 1000)
        {
            number /= 1000;
            base++;
        }
        if (base >= units.length) {
            return 'Infinity';
        } else {
            unitValue = units[base - 1];
        }
    }
    return (Math.round(number*1000) / 1000) + ' ' + unitValue;
  }

}
