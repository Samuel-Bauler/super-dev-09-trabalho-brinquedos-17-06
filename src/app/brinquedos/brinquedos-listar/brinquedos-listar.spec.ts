import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrinquedosListar } from './brinquedos-listar';

describe('BrinquedosListar', () => {
  let component: BrinquedosListar;
  let fixture: ComponentFixture<BrinquedosListar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrinquedosListar],
    }).compileComponents();

    fixture = TestBed.createComponent(BrinquedosListar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
