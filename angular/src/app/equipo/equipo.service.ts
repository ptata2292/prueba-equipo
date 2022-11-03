import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Equipo } from './equipo';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  private apiURL = "http://localhost:8000/api/equipo/";
  private apiPingURL = "http://localhost:8000/api/ping/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
 }

 constructor(private httpClient: HttpClient) { }
 

  getAll(): Observable<Equipo[]> {
    return this.httpClient.get<Equipo[]>(this.apiURL)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(equipo): Observable<Equipo> {
    return this.httpClient.post<Equipo>(this.apiURL, JSON.stringify(equipo), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id): Observable<Equipo> {
    return this.httpClient.get<Equipo>(this.apiURL + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  ping(id, equipo): Observable<Equipo> {
    return this.httpClient.put<Equipo>(this.apiPingURL + id, JSON.stringify(equipo), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id, equipo): Observable<Equipo> {
    return this.httpClient.put<Equipo>(this.apiURL + id, JSON.stringify(equipo), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id){
    return this.httpClient.delete<Equipo>(this.apiURL + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
