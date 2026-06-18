import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:src/app/brinquedos-cadastrar/brinquedos-cadastrar.spec.ts
import { BrinquedosCadastrar } from './brinquedos-cadastrar';

describe('BrinquedosCadastrar', () => {
  let component: BrinquedosCadastrar;
  let fixture: ComponentFixture<BrinquedosCadastrar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrinquedosCadastrar],
    }).compileComponents();

    fixture = TestBed.createComponent(BrinquedosCadastrar);
=======
import { BrinquedoCadastrar } from './brinquedos-cadastrar';

describe('BrinquendosCadastrar', () => {
  let component: BrinquedoCadastrar;
  let fixture: ComponentFixture<BrinquedoCadastrar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrinquedoCadastrar],
    }).compileComponents();

    fixture = TestBed.createComponent(BrinquedoCadastrar);
>>>>>>> a7f0d6a0f86d4112bfd09e869addd3df5fdfcd89:src/app/brinquedos/brinquendos-cadastrar/brinquedos-cadastrar.spec.ts
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
