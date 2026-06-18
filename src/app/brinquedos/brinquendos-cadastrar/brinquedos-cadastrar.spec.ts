import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrinquedoCadastrar } from './brinquedos-cadastrar';

describe('BrinquendosCadastrar', () => {
  let component: BrinquedoCadastrar;
  let fixture: ComponentFixture<BrinquedoCadastrar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrinquedoCadastrar],
    }).compileComponents();

    fixture = TestBed.createComponent(BrinquedoCadastrar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
