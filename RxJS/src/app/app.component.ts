import { Component } from '@angular/core';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemAddComponent } from './item-add/item-add.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ItemListComponent, ItemAddComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
