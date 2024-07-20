import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  @Input() imageUrl: string = '';
  @Input() message: string = '';

  userMessage: string = 'Initial value';
  isHighlighted: boolean = false;
  cardBackgroundColor: string = 'lightblue';

  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }

}