import { InfoPagina } from './../../interfaces/info-pagina.interface';
import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
cargada = false;
info: InfoPagina = {};
  // tslint:disable-next-line:variable-name
  constructor( public _servicio: InfoPaginaService,
               private router: Router) { }

  ngOnInit() {
    this._servicio.infoPage() .subscribe( (resp: InfoPagina) => {
          this.cargada = true;
          this.info = resp;
      //    console.log(this.info.titulo);
      //  console.log( resp.email );
       });
  }
  buscarProducto(termino: string) {
    if (termino.length < 1) {
      return;
    }
    this.router.navigate(['/search', termino]);
    console.log(termino);
  }

}
