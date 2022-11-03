import { Component, OnInit } from '@angular/core';

import { EquipoService } from '../equipo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Equipo } from '../equipo';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  id: number;
  equipo: Equipo;
  form: FormGroup;
  awaiting: boolean;

  constructor(
    public equipoService: EquipoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.awaiting = true
    this.id = this.route.snapshot.params['idEquipo'];
    
    this.equipoService.find(this.id).subscribe((data: Equipo)=>{
      this.equipo = data;
      this.awaiting = false
      this.form = new FormGroup({
        name:  new FormControl('', [ Validators.required]),
        ip: new FormControl('', [ Validators.required]),
        marca: new FormControl('', [ Validators.required]),
        conecta: new FormControl(this.equipo.conecta, [ Validators.required]),
        noconecta: new FormControl(this.equipo.noconecta, [ Validators.required]),
      });

    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    this.awaiting = true
    console.log(this.form.value);
    this.equipoService.update(this.id, this.form.value).subscribe(res => {
        this.awaiting = false
         console.log('Equipo Actualizado!');
         this.router.navigateByUrl('equipo/index');
    })
  }

}


