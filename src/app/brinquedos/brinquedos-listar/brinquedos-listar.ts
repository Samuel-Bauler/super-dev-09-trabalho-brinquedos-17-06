import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BrinquedoModel } from '../../models/brinquedo.model';

@Component({
  selector: 'app-brinquedos-listar',
  imports: [CommonModule, RouterLink],
  templateUrl: './brinquedos-listar.html',
  styleUrl: './brinquedos-listar.scss',
})
export class BrinquedosListar {
  brinquedos = signal<BrinquedoModel[]>([]);

  ngOnInit(): void {
    this.carregarBrinquedos();
  }

  carregarBrinquedos(): void {
    const dadosSalvos = localStorage.getItem('Brinquedos');

    if (dadosSalvos) {
      this.brinquedos.set(JSON.parse(dadosSalvos));
    } else {
      this.brinquedos.set([]);
    }
  }
}