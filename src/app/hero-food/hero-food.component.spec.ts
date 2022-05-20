import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroFoodComponent } from './hero-food.component';

describe('HeroFoodComponent', () => {
  let component: HeroFoodComponent;
  let fixture: ComponentFixture<HeroFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
