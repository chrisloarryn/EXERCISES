import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PokemonService } from "../../services/pokemon.service.service";

@Component({
  selector: "app-tarjetas",
  templateUrl: "./tarjetas.component.html",
  styleUrls: ["./tarjetas.component.css"],
})
export class TarjetasComponent implements OnInit {
  @Input() items: any[] = [];
  textToFind: string;
  objStyles = {};

  constructor(private ngRouter: Router, public pokemonService: PokemonService) {
    this.objStyles = {
      "margin-left": "auto",
      display: "block",
      margin: "auto",
    };
  }

  ngOnInit(): void {
    this.textToFind = this.pokemonService.subject.getValue();
  }

  selectedPkmn(item: any) {
    // console.log((item.id).toString());
    this.ngRouter.navigate(["pokemon/", item.id]);
  }
}
