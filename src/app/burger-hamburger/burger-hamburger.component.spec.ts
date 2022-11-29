import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerHamburgerComponent } from './burger-hamburger.component';

describe('BurgerHamburgerComponent', () => {
  let component: BurgerHamburgerComponent;
  let fixture: ComponentFixture<BurgerHamburgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurgerHamburgerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgerHamburgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
