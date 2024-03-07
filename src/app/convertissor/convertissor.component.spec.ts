import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertissorComponent } from './convertissor.component';

describe('ConvertissorComponent', () => {
  let component: ConvertissorComponent;
  let fixture: ComponentFixture<ConvertissorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConvertissorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConvertissorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
