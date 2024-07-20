import { Component } from '@angular/core';

@Component({
  selector: 'app-template-reference',
  standalone: true,
  templateUrl: './template-reference.component.html',
  styleUrls: ['./template-reference.component.css']
})
export class TemplateReferenceComponent {
  getInputValue(input: HTMLInputElement) {
    console.log('Input Value:', input.value);
  }
}
