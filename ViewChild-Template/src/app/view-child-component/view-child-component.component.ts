import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-child-component.component.html',
  styleUrls: ['./view-child-component.component.css']
})
export class ViewChildComponent implements AfterViewInit {
  @ViewChild('inputElement') inputElement!: ElementRef;

  ngAfterViewInit() {
    console.log('ViewChild:', this.inputElement.nativeElement.value);
  }

  setInputValue(value: string) {
    this.inputElement.nativeElement.value = value;
  }
}
