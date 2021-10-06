import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeCardComponent } from './upgrade-card.component';

describe('UpgradeCardComponent', () => {
  let component: UpgradeCardComponent;
  let fixture: ComponentFixture<UpgradeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpgradeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
