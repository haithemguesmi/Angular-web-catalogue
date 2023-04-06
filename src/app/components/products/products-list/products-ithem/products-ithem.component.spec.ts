import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsIthemComponent } from './products-ithem.component';

describe('ProductsIthemComponent', () => {
  let component: ProductsIthemComponent;
  let fixture: ComponentFixture<ProductsIthemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsIthemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsIthemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
