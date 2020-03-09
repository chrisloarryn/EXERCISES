import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PokemonService} from '../../../services/pokemon.service.service';

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

  findFn(value: string) {
    // tslint:disable-next-line:no-unused-expression
    this.pokemonService.subject.next(value);
  }
}
