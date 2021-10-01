import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreBuildingComponent } from './store-building.component';

describe('StoreBuildingComponent', () => {
  let component: StoreBuildingComponent;
  let fixture: ComponentFixture<StoreBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreBuildingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
