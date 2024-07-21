import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Import RouterOutlet để hỗ trợ routing
import { RouterModule } from '@angular/router'; // Import RouterModule nếu cần

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
