import { AsyncPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../../core/services/pokemon.service';
import { Observable } from 'rxjs';
import { Pokemon, PokemonResults } from '../../interfaces/pokemon';

@Component({
  selector: 'app-pokecards',
  standalone: true,
  imports: [AsyncPipe, PokecardsComponent],
  templateUrl: './pokecards.component.html',
  styleUrl: './pokecards.component.css'
})
export class PokecardsComponent implements OnInit{
  @Input() pokemonInfo!: Pokemon;
  count = 1;
  public pokemonGet$!: Observable<PokemonResults>
  constructor(private service: PokemonService){}

  ngOnInit(): void {
    this.pokemonGet$ = this.service.getPokemonList();
  }
}
