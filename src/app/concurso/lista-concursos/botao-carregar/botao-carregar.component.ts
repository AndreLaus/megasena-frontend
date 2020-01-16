import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mgsn-botao-carregar',
  templateUrl: './botao-carregar.component.html',
  styleUrls: ['./botao-carregar.component.css']
})
export class BotaoCarregarComponent implements OnInit {

  @Input() temMais: boolean = false;

  constructor() { }

  ngOnInit() {

  }

}
