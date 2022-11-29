import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerAboutComponent } from './burger-about.component';

describe('BurgerAboutComponent', () => {
  let component: BurgerAboutComponent;
  let fixture: ComponentFixture<BurgerAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurgerAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgerAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
