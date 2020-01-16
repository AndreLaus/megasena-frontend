import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'mgsn-buscar-detalhes-concurso',
  templateUrl: './buscar-detalhes-concurso.component.html',
  styleUrls: ['./buscar-detalhes-concurso.component.css']
})
export class BuscarDetalhesConcursoComponent implements OnInit {

  buscarForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.buscarForm = this.formBuilder.group({
      campoBuscar: ['', 
                  [
                    Validators.required,
                    Validators.minLength(1),
                    Validators.maxLength(4),
                    Validators.pattern("[0-9]*")
                  ]
                ]
    });
  }

  buscar() {
    const campoBuscar = this.buscarForm.get('campoBuscar').value;
    this.router.navigate(['/concurso', campoBuscar]);
  }

}
