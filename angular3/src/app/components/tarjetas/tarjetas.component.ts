import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PokemonService} from "../../services/pokemon.service.service";

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  @Input() items: any[] = [];

  constructor(private ngRouter: Router,
              public pokemonService: PokemonService,) {
  }

  getCssClass(): any {
    return 'green-600-fg';
  }

  ngOnInit(): void {
  }

  selectedPkmn(item: any) {
    console.log((item.id).toString());
    this.ngRouter.navigate(['pokemon/', item.id]);

  }
}
