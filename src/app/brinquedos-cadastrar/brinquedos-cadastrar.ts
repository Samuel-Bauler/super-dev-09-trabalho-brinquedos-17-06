import { Component, signal } from '@angular/core';
import { BrinquedoModel } from '../models/brinquedo.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-brinquedos-cadastrar',
  imports: [FormsModule],
  templateUrl: './brinquedos-cadastrar.html',
  styleUrl: './brinquedos-cadastrar.scss',
})
export class BrinquedosCadastrar {
  brinquedo = signal<BrinquedoModel>({
    id: crypto.randomUUID(),
    nome: "",
    quantidade: null,
    preco: null,
    marca: ""
  })
  
  salvar(): void {
    const brinquedos = this.carregarBrinquedosDoLocalStorage();
    brinquedos.push(this.brinquedo());

    const brinquedosString = JSON.stringify(brinquedos);
    localStorage.setItem("brinquedos", brinquedosString)

    alert("Produto cadastro com sucesso");
  }

  carregarBrinquedosDoLocalStorage(): BrinquedoModel[] {
    const brinquedosString = localStorage.getItem("brinquedos");

    if (brinquedosString === null) {
      return [];
    }

    return JSON.parse(brinquedosString) as BrinquedoModel[];
  }
}
