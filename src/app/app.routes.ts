import { Routes } from '@angular/router';
import { BrinquedosCadastrar } from './brinquedos-cadastrar/brinquedos-cadastrar';

export const routes: Routes = [
    { path: "brinquedos/cadastrar", loadComponent: () => BrinquedosCadastrar}
];
