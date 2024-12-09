import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecargapseComponent } from './recargapse.component';

describe('RecargapseComponent', () => {
  let component: RecargapseComponent;
  let fixture: ComponentFixture<RecargapseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecargapseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecargapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
