import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankProductsComponent } from './bank-products.component';

describe('BankProductsComponent', () => {
  let component: BankProductsComponent;
  let fixture: ComponentFixture<BankProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BankProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
