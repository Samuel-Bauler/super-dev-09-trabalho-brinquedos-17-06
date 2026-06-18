import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrinquedoCadastrar } from './brinquedos/brinquendos-cadastrar/brinquedos-cadastrar';
import { BrinquedosListar } from './brinquedos/brinquedos-listar/brinquedos-listar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BrinquedoCadastrar, BrinquedosListar],g
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('projeto-brinquedo');
}