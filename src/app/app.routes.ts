import { Routes } from '@angular/router';
import { BrinquedoCadastrar } from './brinquedos/brinquendos-cadastrar/brinquedos-cadastrar';
import { BrinquedosListar } from './brinquedos/brinquedos-listar/brinquedos-listar';


export const routes: Routes = [
    { path: "brinquedos/cadastrar", loadComponent: () => BrinquedoCadastrar},
    { path: "brinquedos/listar", loadComponent: () => BrinquedosListar}
];
