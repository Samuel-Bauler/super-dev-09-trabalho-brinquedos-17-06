import { Routes } from '@angular/router';
import { BrinquedosListar } from './brinquedos/brinquedos-listar/brinquedos-listar';
import { BrinquedoCadastrar } from './brinquedos/brinquendos-cadastrar/brinquedos-cadastrar';

export const routes: Routes = [
    { path: "brinquedos/cadastrar", loadComponent: () => BrinquedoCadastrar},
    { path: "brinquedos/listar", loadComponent: () => BrinquedosListar}
];
