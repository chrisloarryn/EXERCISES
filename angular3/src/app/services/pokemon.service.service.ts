import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PokemonService {
  constructor(private httpClient: HttpClient) {
    console.log("servicio iniciado...");
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
