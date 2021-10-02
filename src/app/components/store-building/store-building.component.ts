import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-store-building',
  templateUrl: './store-building.component.html',
  styleUrls: ['./store-building.component.css']
})
export class StoreBuildingComponent implements OnInit {

  @Input() building;
  @Output() storeBuildingClick = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  clickedStorebuilding(id: number) {
    this.storeBuildingClick.emit(id)
  }

  formatLargerNumber(numberToFormat: number): string {
    return numberToFormat?.toLocaleString();
}

}
