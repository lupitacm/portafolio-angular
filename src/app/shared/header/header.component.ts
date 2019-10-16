import { InfoPagina } from './../../interfaces/info-pagina.interface';
import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
cargada = false;
info: InfoPagina = {};
  // tslint:disable-next-line:variable-name
  constructor( public _servicio: InfoPaginaService) { }

  ngOnInit() {
    this._servicio.infoPage() .subscribe( (resp: InfoPagina) => {
          this.cargada = true;
          this.info = resp;
      //    console.log(this.info.titulo);
      //  console.log( resp.email );
       });
  }

}
