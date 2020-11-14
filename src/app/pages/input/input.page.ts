import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {
  
  nombre = 'Eloy';
  usuario = {
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit( formulario: NgForm ){
    console.log('submit');
    console.log('usuario :>> ', this.usuario);
    console.log('formulario :>> ', formulario);
  }

}
