import {Component, OnInit} from "@angular/core";
import {PokemonService} from "../../services/pokemon.service.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  obtainedPokemons: any[] = [];
  loading: boolean;
  error: boolean;
  errorMessage: string;
  private oldArray: any[];
  private filter: null;

  constructor(public pokemonService: PokemonService) {
    this.loading = true;
    this.error = false;

    this.pokemonService.getAllPokemons().subscribe(
      (data: any) => {
        this.obtainedPokemons = [];

        // old for loop is a little faster than new ones
        let newObj = [];
        for (let item of data) {
          this.pokemonService.getSinglePokemon(item.url).subscribe(res => {
            if (res) {
              this.pokemonService.getEvolutionChain(res).subscribe(resChain => {
                Object.assign(item, resChain);
                if (resChain) {
                  this.pokemonService
                    .getEvolutionsOfPokemons(resChain)
                    .subscribe(lastRes =>
                      Object.assign(item.evolution_chain, lastRes)
                    );
                }
              });
              Object.assign(item, res);
            }
          });
          // console.log(item);
          if (item) {
            newObj.push(item);
          }
        }

        // console.log(newObj);
        if(this.obtainedPokemons) {
          console.log(this.obtainedPokemons);
          this.loading = false;
          this.obtainedPokemons = newObj;
        }
      },
      errorServicio => {
        this.loading = false;
        this.error = true;
        console.log(errorServicio);
        this.errorMessage = errorServicio;
      }
    );
  }

  ngOnInit(): void {
  }
}
