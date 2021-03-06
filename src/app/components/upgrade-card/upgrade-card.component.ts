import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NumberFormatType } from '../../models/NumberFormatType';

@Component({
  selector: 'app-upgrade-card',
  templateUrl: './upgrade-card.component.html',
  styleUrls: ['./upgrade-card.component.css']
})
export class UpgradeCardComponent implements OnInit {

  NumberFormatType = NumberFormatType;
  clickCounter = 0;

  @Input() building;
  @Input() upgrade;
  @Output() upgradeClick = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  clickedUpgrade(id: number) {

    // As a compromise for mobile devices, we felt it would be best to make the upgrade purchases require at least a DOUBLE CLICK to be successful.
    this.clickCounter++;
    setTimeout(() => {

      // If the user at least double clicks, emit the upgrade click, purchasing that upgrade.
      if (this.clickCounter >= 2) {
        this.upgradeClick.emit(id)
      }

      // Reset the click counter back to zero.
      this.clickCounter = 0;
    }, 500)
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
