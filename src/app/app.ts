import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { BrinquedosListar } from './brinquedos/brinquedos-listar/brinquedos-listar';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, BrinquedosListar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('projeto-brinquedo');
}