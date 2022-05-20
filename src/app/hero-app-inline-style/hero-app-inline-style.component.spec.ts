import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAppInlineStyleComponent } from './hero-app-inline-style.component';

describe('HeroAppInlineStyleComponent', () => {
  let component: HeroAppInlineStyleComponent;
  let fixture: ComponentFixture<HeroAppInlineStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroAppInlineStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroAppInlineStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
