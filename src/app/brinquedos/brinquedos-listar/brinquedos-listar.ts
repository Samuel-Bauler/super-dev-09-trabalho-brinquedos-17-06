import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrinquedoModel } from '../../models/brinquedo.model';

@Component({
  selector: 'app-clientes-listar',
  imports: [RouterLink],
  templateUrl: './clientes-listar.html',
  styleUrl: './clientes-listar.scss',
})
export class BrinquedosListar implements OnInit {
  clientes = signal<BrinquedoModel[]>([]);

  ngOnInit(): void {
    this.clientes.set(this.carregarClientesDoLocalStorage());
  }

  carregarClientesDoLocalStorage(): BrinquedoModel[] {
    const clientesString = localStorage.getItem("brinquedos");
    if (clientesString === null) {
      return [];
    }
    return JSON.parse(clientesString) as BrinquedoModel[];
  }
}