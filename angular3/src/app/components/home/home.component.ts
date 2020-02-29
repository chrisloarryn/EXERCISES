import { Component, OnInit } from "@angular/core";
import { PokemonService } from "../../services/pokemon.service.service";

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

  constructor(private pokemonService: PokemonService) {
    this.loading = true;
    this.error = false;

    this.pokemonService.getAllPokemons().subscribe(
      (data: any) => {
        this.obtainedPokemons = [];
        // console.log(data);
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
          newObj.push(item);
        }
        this.obtainedPokemons = newObj;
        console.log(newObj);
        if (this.filter){
          console.log('si');
          console.log('si');
          console.log('si');
          console.log('si');
        }


        this.loading = false;
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
    this.pokemonService.subject
      .subscribe(res => {
        if (res){
          this.filter = res;
          //console.log(res);
          if(this.obtainedPokemons){
            let pokk = [];
            if (!this.oldArray) this.oldArray = this.obtainedPokemons
            const assignFiltered = this.obtainedPokemons.
            filter(item => (item.name.includes(res)));
            this.obtainedPokemons = assignFiltered;
          }
        }
        else{
          this.obtainedPokemons = this.oldArray;
        }
      });
  }
}
