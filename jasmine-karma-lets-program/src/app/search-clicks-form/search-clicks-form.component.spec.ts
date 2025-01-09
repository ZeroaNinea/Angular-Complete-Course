import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchClicksFormComponent } from './search-clicks-form.component';
import { provideRouter } from '@angular/router';

describe('SearchClicksFormComponent', () => {
  let component: SearchClicksFormComponent;
  let fixture: ComponentFixture<SearchClicksFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchClicksFormComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchClicksFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit trackOtherUrl even when Track Other URL button is clicked', () => {
    spyOn(component.onSubmit, 'emit');
    const shortUrl = 'https://test.com/123';
    fixture.componentRef.setInput('shortenedUrl', shortUrl);
    fixture.detectChanges();
    component.onShortUrlSubmit();

    // expect(component.onSubmit.emit).toHaveBeenCalled();
    expect(component.onSubmit.emit).toHaveBeenCalledOnceWith(shortUrl);
  });
});
