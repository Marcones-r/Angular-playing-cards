import { Monster } from './../../models/monster.model';
import { Component, Input, input, InputSignal } from '@angular/core';

@Component({
  
  selector: 'app-plying-card', // Définit le nom de la balise HTML qui va représenter le composant. Voir le fichier app.conmponent.html
  imports: [], // on peut déclarer d'autres composants ou modules directement ici, au lieu de les importer dans un module (NgModule).
  templateUrl: './plying-card.component.html',  // Angular va chercher ce fichier et l'afficher à l'intérieur de la balise <app-plying-card></app-plying-card>.
  styleUrl: './plying-card.component.css'// Ce fichier contient les styles spécifiques au composant.

})
export class PlyingCardComponent {
 monster: InputSignal<Monster> = input(new Monster(), {
  alias: 'my-monster',
  transform: (value: Monster) => {
    value.hp = value.hp / 2;
    return value;
  }
 });
}
