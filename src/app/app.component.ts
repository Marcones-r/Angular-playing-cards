import { Component } from '@angular/core';
import { PlyingCardComponent } from "./components/plying-card/plying-card.component";
import { Monster } from './models/monster.model';
import { SearchBarComponent } from './components/search-bar/search-bar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlyingCardComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
 
})
export class AppComponent {
  monster1!: Monster;
  count: number = 0;

  constructor() {
    this.monster1 = new Monster();
    this.monster1.name = "Pik";
    this.monster1.hp = 40;
    this.monster1.figureCaption = "N°002 Pik"
    

 
    
  }
}