import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-built-in-directives',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './built-in-directives.component.html',
    styleUrls: ['./built-in-directives.component.css']
})
export class BuiltInDirectivesComponent {
    isVisible: boolean = true;
    items: string[] = ['Item 1', 'Item 2', 'Item 3'];
    color: string = '';

    toggleVisibility() {
        this.isVisible = !this.isVisible;
    }

    changeColor(newColor: string) {
        this.color = newColor;
    }
}
