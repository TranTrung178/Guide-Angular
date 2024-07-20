import { Component } from '@angular/core';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { BindingComponent } from './binding/binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StringInterpolationComponent, BindingComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Example';
  message: string = 'Hello from StringInterpolationComponent!';
  imageUrl: string = 'https://icones.pro/wp-content/uploads/2022/07/icone-angulaire-grise.png';

}
