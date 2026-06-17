import { Routes } from '@angular/router';
import { BrinquedosListar } from './brinquedos/brinquedos-listar/brinquedos-listar';

export const routes: Routes = [
    { path: "brinquedos/listar", loadComponent: () => BrinquedosListar}
];