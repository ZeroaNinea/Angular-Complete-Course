import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { ScoreboardComponent } from "./scoreboard.component";

describe("ScoreboardComponent", () => {
  let component: ScoreboardComponent;
  let fixture: ComponentFixture<ScoreboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ScoreboardComponent,
        HttpClientTestingModule,
        StoreModule.forRoot({}), // Provide a root store for NgRx
        EffectsModule.forRoot([]), // Provide effects module if you're using effects
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ScoreboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
