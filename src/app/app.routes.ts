import { Routes } from '@angular/router';
<<<<<<< HEAD
import { BrinquedosCadastrar } from './brinquedos-cadastrar/brinquedos-cadastrar';

export const routes: Routes = [
    { path: "brinquedos/cadastrar", loadComponent: () => BrinquedosCadastrar}
=======
import { BrinquedosListar } from './brinquedos/brinquedos-listar/brinquedos-listar';
import { BrinquedoCadastrar } from './brinquedos/brinquendos-cadastrar/brinquedos-cadastrar';

export const routes: Routes = [
    { path: "brinquedos/cadastrar", loadComponent: () => BrinquedoCadastrar},
    { path: "brinquedos/listar", loadComponent: () => BrinquedosListar}
>>>>>>> a7f0d6a0f86d4112bfd09e869addd3df5fdfcd89
];
