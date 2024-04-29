import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokecardsComponent } from './components/pokecards/pokecards.component';
import { HeadComponent } from './components/head/head.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,PokecardsComponent, HeadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PokeCards';
}
