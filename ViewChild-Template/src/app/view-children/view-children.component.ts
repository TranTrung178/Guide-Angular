import { Component, ViewChildren, QueryList, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-view-children',
  standalone: true,
  templateUrl: './view-children.component.html',
  styleUrls: ['./view-children.component.css']
})
export class ViewChildrenComponent implements AfterViewInit {
  @ViewChildren('paragraphs') paragraphs!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.paragraphs.forEach(paragraph => {
      console.log('Paragraph:', paragraph.nativeElement.textContent);
    });
  }

  changeParagraphsText(newText: string) {
    this.paragraphs.forEach(paragraph => {
      paragraph.nativeElement.textContent = newText;
    });
  }
}
