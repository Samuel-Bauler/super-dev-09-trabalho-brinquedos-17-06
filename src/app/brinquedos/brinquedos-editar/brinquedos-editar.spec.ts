import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrinquedosEditar } from './brinquedos-editar';

describe('BrinquedosEditar', () => {
  let component: BrinquedosEditar;
  let fixture: ComponentFixture<BrinquedosEditar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrinquedosEditar],
    }).compileComponents();

    fixture = TestBed.createComponent(BrinquedosEditar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
