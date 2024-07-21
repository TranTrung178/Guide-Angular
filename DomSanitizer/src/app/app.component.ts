import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeUrl, SafeStyle, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public safeHtml: SafeHtml;
  public safeUrl: SafeUrl;
  public safeStyle: SafeStyle;
  public safeResourceUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    const htmlString = `<div><h1>Safe HTML Content</h1><p>This is a paragraph.</p></div>`;
    this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(htmlString);

    const url = '';
    this.safeUrl = this.sanitizer.bypassSecurityTrustUrl(url);

   const style = 'background-color: lightblue; color: navy;';
    this.safeStyle = this.sanitizer.bypassSecurityTrustStyle(style);

    const resourceUrl = '';
    this.safeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(resourceUrl);
  }
}
