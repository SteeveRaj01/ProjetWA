import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssaieCompComponent } from './essaie-comp.component';

describe('EssaieCompComponent', () => {
  let component: EssaieCompComponent;
  let fixture: ComponentFixture<EssaieCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EssaieCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EssaieCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
