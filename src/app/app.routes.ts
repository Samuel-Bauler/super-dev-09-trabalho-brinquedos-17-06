import { Routes } from '@angular/router';
import { BrinquedoCadastrar } from './brinquedos/brinquendos-cadastrar/brinquedos-cadastrar';


export const routes: Routes = [
    { path: "brinquedos/cadastrar", loadComponent: () => BrinquedoCadastrar}
];
