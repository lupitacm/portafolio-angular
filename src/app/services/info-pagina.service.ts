import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
 info: InfoPagina = {};
 cargada = false;
 equipo: any[] = [];
  constructor( private http: HttpClient) {
    this.cargarEquipo();
  }
  public infoPage(): Observable<InfoPagina> {
    return this.http.get('assets/data/data-pagina.json');
    //   .subscribe( (resp: InfoPagina) => {
  //     this.cargada = true;
  //     this.info = resp;
  //     console.log(this.info.titulo);
  //   // console.log( resp.email );
  // });
  }
  private cargarInfo() {
    this.http.get('assets/data/data-pagina.json')
  .subscribe( (resp: InfoPagina) => {
   this.cargada = true;
   this.info = resp;
   console.log(this.info.titulo);
   console.log( resp.email );
   });

  }
  private cargarEquipo() {
    this.http.get('https://angular-html-66af8.firebaseio.com/equipo.json')
    .subscribe( (resp: any[]) => {
      this.cargada = true;
      this.equipo = resp;
      // console.log(resp);
    });
  }
}
