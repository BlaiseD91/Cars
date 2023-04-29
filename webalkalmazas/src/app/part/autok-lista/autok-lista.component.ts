import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/service/base.service';

@Component({
  selector: 'app-autok-lista',
  templateUrl: './autok-lista.component.html',
  styleUrls: ['./autok-lista.component.css']
})
export class AutokListaComponent implements OnInit {
  valtozo?:String;
  oszlopok=["id", "marka", "rendszam", "tipus"];
  autok:any;
  ujAuto:any={};
  constructor(private base:BaseService) {
    this.base.getAll().subscribe(
      (eredmeny) => {
        this.autok=eredmeny;
      }
    )
  }

  ngOnInit(): void {
    this.valtozo = "alma";
  }

  onDelete(auto:any){
    this.base.onDelete(auto).subscribe(
      () => {
        this.base.getAll().subscribe(
          (eredmeny) => this.autok=eredmeny)
      }
    );
  }
  onUpdate(auto:any){
    this.base.onUpdate(auto).subscribe(
      () => {
        this.base.getAll().subscribe(
          (eredmeny) => this.autok=eredmeny)
      }
    );
  }

  onCreate(auto:any){
    this.base.onCreate(auto).subscribe(
      () => {
        this.base.getAll().subscribe(
          (eredmeny) => this.autok=eredmeny)
      }
    );
  }

}
