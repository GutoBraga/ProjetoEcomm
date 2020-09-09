import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CestaService } from '../cesta/shared/cesta.service';

@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.css']
})
export class HeaderMainComponent implements OnInit {

  constructor(
    private router: Router,
    private cestaService: CestaService
    ) { }

  ngOnInit(): void {
  }

  calculaCesta() {
    return this.cestaService.calculaCesta();
  }
  contaCesta(){
    return this.cestaService.contaCesta();
  }

  link(id: number) {
    this.router.navigateByUrl('categorias', { skipLocationChange: true }).then(() => {
      this.router.navigate([`categorias/${id}`]);
    });
  }

}
