import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeedsComponent } from './beeds.component';

describe('BeedsComponent', () => {
  let component: BeedsComponent;
  let fixture: ComponentFixture<BeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
