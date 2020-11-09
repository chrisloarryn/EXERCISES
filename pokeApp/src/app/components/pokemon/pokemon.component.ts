import { Component, OnInit } from "@angular/core";
import { PokemonService } from "../../services/pokemon.service.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-pokemon",
  templateUrl: "./pokemon.component.html",
  styleUrls: ["./pokemon.component.css"],
})
export class PokemonComponent implements OnInit {
  public pokemonData: any;
  public objStyles = {};

  constructor(
    public pokemonService: PokemonService,
    public ngRouter: Router,
    public ngRoute: ActivatedRoute
  ) {
    this.objStyles = {
      "margin-left": "auto",
      display: "block",
      margin: "auto",
    };
  }

  ngOnInit(): void {
    this.pokemonData = this.pokemonService.selectedPokemon.value;
    console.log(this.pokemonData);
    if (!this.pokemonData) {
      const path = this.ngRoute.routeConfig.path;
      const arrWUrl = path.split("/");
      // if the Behaviour in the service hasn't data, redirect to home.
      this.ngRouter.navigate([arrWUrl[0]]);
    }
  }
}
