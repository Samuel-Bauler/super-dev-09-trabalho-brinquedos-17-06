import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrinquedoModel } from '../../models/brinquedo.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-brinquedos-editar',
  imports: [FormsModule],
  templateUrl: './brinquedos-editar.html',
  styleUrl: './brinquedos-editar.scss',
})
export class BrinquedosEditar {
    brinquedos = signal<BrinquedoModel>({
        id: "",
        nome: "",
        quantidade: null,
        preco: null,
        marca: ""
    });

    constructor(activeRoute: ActivatedRoute, private router: Router) {
        const idParaEditar = activeRoute.snapshot.paramMap.get("id");
        const brinquedoStrings = localStorage.getItem("brinquedos");
        if (brinquedoStrings === null) {
            alert("Nenhum Brinquedo cadastrado")
            router.navigate(["/brinquedos"]);
            return;
        }
        const brinquedos =JSON.parse(brinquedoStrings) as BrinquedoModel[];
        const brinquedosEncontrados = brinquedos.filter(brinquedo =>brinquedo.id === idParaEditar);
        if (brinquedosEncontrados.length === 0) {
            alert("Brinquedo não encontrado")
            router.navigate(["/brinquedos"]);
            return;
        }

        this.brinquedos.set(brinquedosEncontrados[0]);
    }

    salvar(): void {
        const brinquedos = this.carregarBrinquedosDoLocalStorage();

        const indiceBrinquedoParaEditar = brinquedos.findIndex(x => x.id === this.brinquedos().id);
        brinquedos[indiceBrinquedoParaEditar].nome = this.brinquedos().nome;
        brinquedos[indiceBrinquedoParaEditar].quantidade = this.brinquedos().quantidade;
        brinquedos[indiceBrinquedoParaEditar].preco = this.brinquedos().preco;
        brinquedos[indiceBrinquedoParaEditar].marca = this.brinquedos().marca;

        const brinquedoStrings = JSON.stringify(brinquedos);
        localStorage.setItem("brinquedos", brinquedoStrings)

        alert("Brinquedo alterado com sucesso");

        this.router.navigate(["/brinquedos"])
    }

    carregarBrinquedosDoLocalStorage(): BrinquedoModel[] {
        const brinquedosString = localStorage.getItem("brinquedos");

        if (brinquedosString === null) {
            return [];
        }

        return JSON.parse(brinquedosString) as BrinquedoModel[];
    }
}
