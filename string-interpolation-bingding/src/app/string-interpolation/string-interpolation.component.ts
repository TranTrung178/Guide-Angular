import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  standalone: true,
  imports: [],
  templateUrl: './string-interpolation.component.html',
  styleUrl: './string-interpolation.component.css'
})
export class StringInterpolationComponent {
  message: string = 'Hello from StringInterpolationComponent!';
  imageUrl: string = 'https://icones.pro/wp-content/uploads/2022/07/icone-angulaire-grise.png';

}
