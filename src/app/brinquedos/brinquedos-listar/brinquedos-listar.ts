import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrinquedoModel } from '../../models/brinquedo.model';

@Component({
  selector: 'app-brinquedos-listar',
  imports: [RouterLink],
  templateUrl: './brinquedos-listar.html',
  styleUrls: ['./brinquedos-listar.scss'],
})
export class BrinquedosListar implements OnInit {
  brinquedos = signal<BrinquedoModel[]>([]);

  ngOnInit(): void {
    this.brinquedos.set(this.carregarBrinquedosDoLocalStorage());
  }

  carregarBrinquedosDoLocalStorage(): BrinquedoModel[] {
    const brinquedosString = localStorage.getItem("brinquedos");
    if (brinquedosString === null) {
      return [];
    }
    return JSON.parse(brinquedosString) as BrinquedoModel[];
  }
}
