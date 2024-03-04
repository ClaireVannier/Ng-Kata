import { Component } from '@angular/core';
import { Objet } from '../../models/objet.models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-objets',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './objets.component.html',
  styleUrl: './objets.component.scss',
})
export class ObjetsComponent {
  favorites: Objet[] = [
    {
      id: 1,
      name: 'Produit 1',
    },
    {
      id: 2,
      name: 'Produit 2',
    },
  ];


  addToFavorite(objet: Objet): void {
    for (let element of this.favorites) {
      if (element.id === objet.id) {
        console.log('Déjà présent dans les favoris');
        return;
      }
    }
    this.favorites.push(objet);
    console.log('Ajouté aux favoris');
  }
}
