import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardListComponent } from "./card-list/card-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CardListComponent]
})
export class AppComponent {
  title = 'Kata';
}
