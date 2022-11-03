import { Component, OnInit } from '@angular/core';

import { EquipoService } from '../equipo.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form: FormGroup;
  awaiting: boolean;
  
  constructor(
    public equipoService: EquipoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.awaiting = false
    this.form = new FormGroup({
      name:  new FormControl('', [ Validators.required]),
      ip: new FormControl('', [ Validators.required]),
      marca: new FormControl('', [ Validators.required]),
      conecta: new FormControl(0, [ Validators.required]),
      noconecta: new FormControl(0, [ Validators.required]),
    });

  }

  get f(){
    return this.form.controls;
  }


  submit(){
    this.awaiting = true
    console.log(this.form.value);
    this.equipoService.create(this.form.value).subscribe(res => {
      this.awaiting = false
         console.log('Equipo created successfully!');
         this.router.navigateByUrl('equipo/index');
    })
  }

}
