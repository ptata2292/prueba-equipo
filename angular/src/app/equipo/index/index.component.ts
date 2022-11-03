import { Component, OnInit } from '@angular/core';

import { EquipoService } from '../equipo.service';
import { Equipo } from '../equipo';
import { interval } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  equipos: Equipo[] = [];
  private source = interval(3000);
  equipo: any;
  awaiting: boolean;

  constructor(
    public equipoService: EquipoService,
    private httpClient: HttpClient,
    ) { }


  ngOnInit(): void {
    this.awaiting = false
    this.list()
  }

  list(){
    this.awaiting = true
    this.equipoService.getAll().subscribe((data: Equipo[])=>{
      this.awaiting = false
      this.equipos = data;
      console.log(this.equipos);
    })
  }

  deleteEquipo(id){
    this.equipoService.delete(id).subscribe(res => {
         this.equipos = this.equipos.filter(item => item.id !== id);
         console.log('Equipo Borrado!');
    })
  }

  ping(id, data){
    this.awaiting = true
    this.equipoService.ping(id, data).subscribe((data: any)=>{
      this.awaiting = false
      this.equipo = data;
      console.log(data)
      // this.notification.show(data.message, 'danger', undefined, undefined, 'error_outline');
      // this.notification.show(data.message, 'success', undefined, undefined, 'error_outline');
      alert(data.message)
      this.list()
    });
  }

}
