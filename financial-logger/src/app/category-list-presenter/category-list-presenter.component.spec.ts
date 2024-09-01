import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryListPresenterComponent } from './category-list-presenter.component';

describe('CategoryListPresenterComponent', () => {
  let component: CategoryListPresenterComponent;
  let fixture: ComponentFixture<CategoryListPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryListPresenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryListPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
