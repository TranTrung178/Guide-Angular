import { Component } from '@angular/core';
import { BuiltInDirectivesComponent } from './built-in-directives/built-in-directives.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BuiltInDirectivesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
