import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllClientComponent } from './get-all-client.component';

describe('GetAllClientComponent', () => {
  let component: GetAllClientComponent;
  let fixture: ComponentFixture<GetAllClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
