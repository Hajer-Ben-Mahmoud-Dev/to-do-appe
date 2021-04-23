import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAddToDoComponent } from './list-add-to-do.component';

describe('ListAddToDoComponent', () => {
  let component: ListAddToDoComponent;
  let fixture: ComponentFixture<ListAddToDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAddToDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAddToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
