import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JewleryComponent } from './jewlery.component';

describe('JewleryComponent', () => {
  let component: JewleryComponent;
  let fixture: ComponentFixture<JewleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JewleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JewleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
