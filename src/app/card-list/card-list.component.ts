import { Component } from '@angular/core';
import { CardsComponent } from "../cards/cards.component";

@Component({
    selector: 'app-card-list',
    standalone: true,
    templateUrl: './card-list.component.html',
    styleUrl: './card-list.component.scss',
    imports: [CardsComponent]
})
export class CardListComponent {

}
