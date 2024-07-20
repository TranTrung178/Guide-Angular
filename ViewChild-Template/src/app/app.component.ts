import { Component } from '@angular/core';
import { ViewChildComponent } from './view-child-component/view-child-component.component';
import { ViewChildrenComponent } from './view-children/view-children.component';
import { TemplateReferenceComponent } from './template-reference/template-reference.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    // Import các thành phần standalone trực tiếp trong các component mà chúng cần sử dụng
    ViewChildComponent,
    ViewChildrenComponent,
    TemplateReferenceComponent
  ]
})
export class AppComponent { }