import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: "root"
})


export class PokemonService {

  subject = new BehaviorSubject(null);
  selectedPokemon = new BehaviorSubject(null);
  constructor(private httpClient: HttpClient) {
    console.log("servicio iniciado...");
  }

  set busquedaQuery(qry) {
    this.subject.next(qry);
  }

  get busquedaQuery() {
    return this.subject.value;
  }

  set pokemon(pokemon) {
    if (pokemon) {
      this.selectedPokemon.next(pokemon);
    }
    else {
      throw 'in setter function'
    }

  }

  get pokemon() {
    return this.selectedPokemon.value;
  }

  getQueryForResponse(query: string) {
    const url = `https://pokeapi.co/api/v2/${query}`;
    return this.httpClient.get(url);
  }

  getAllPokemons() {
    // limit 25
    return this.getQueryForResponse("pokemon?offset=0&limit=25").pipe(
      map(data => data["results"])
    );
  }

  getSinglePokemon(url: string) {
    return this.httpClient.get(url).pipe(map(data => data));
  }

  getEvolutionChain(item: any) {
    return this.getQueryForResponse(`pokemon-species/${item.id}/`).pipe(
      map(data => data)
    );
  }

  getEvolutionsOfPokemons(item: any) {
    const url = item.evolution_chain.url;
    return this.httpClient.get(url).pipe(map(data => data));
  }
}
