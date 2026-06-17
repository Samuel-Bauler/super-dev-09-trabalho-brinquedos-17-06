import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrinquendosCadastrar } from './brinquedos-cadastrar';

describe('BrinquendosCadastrar', () => {
  let component: BrinquendosCadastrar;
  let fixture: ComponentFixture<BrinquendosCadastrar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrinquendosCadastrar],
    }).compileComponents();

    fixture = TestBed.createComponent(BrinquendosCadastrar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
