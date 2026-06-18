import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrinquedosCadastrar } from './brinquedos-cadastrar';

describe('BrinquedosCadastrar', () => {
  let component: BrinquedosCadastrar;
  let fixture: ComponentFixture<BrinquedosCadastrar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrinquedosCadastrar],
    }).compileComponents();

    fixture = TestBed.createComponent(BrinquedosCadastrar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
