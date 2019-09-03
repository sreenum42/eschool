import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverMoreComponent } from './discover-more.component';

describe('DiscoverMoreComponent', () => {
  let component: DiscoverMoreComponent;
  let fixture: ComponentFixture<DiscoverMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
