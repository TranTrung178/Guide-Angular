import { Component } from '@angular/core';
import { ItemService } from '../item.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent {
  newItem: string = '';

  constructor(private itemService: ItemService) { }

  addItem() {
    if (this.newItem.trim()) {
      this.itemService.addItem(this.newItem);
      this.newItem = '';
    }
  }
}
