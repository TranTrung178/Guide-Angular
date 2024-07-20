import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { CommonModule } from '@angular/common';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items$!: Observable<string[]>;
  itemCount$!: Observable<number>;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.items$ = this.itemService.items$;
    this.itemCount$ = this.itemService.getItemCount();
  }

  clearItems() {
    this.itemService.clearItems();
  }
}
