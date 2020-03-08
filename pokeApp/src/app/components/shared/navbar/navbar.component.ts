import {Component, OnInit} from '@angular/core';
import {PokemonService} from "../../../services/pokemon.service.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
  }

  buscar(value: string) {
    this.pokemonService.subject.next(value);
  }
}
