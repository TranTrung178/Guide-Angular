import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateReferenceComponent } from './template-reference.component';

describe('TemplateReferenceComponent', () => {
  let component: TemplateReferenceComponent;
  let fixture: ComponentFixture<TemplateReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateReferenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
