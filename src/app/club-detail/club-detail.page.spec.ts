import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ClubDetailPage } from './club-detail.page';

describe('DetailPage', () => {
  let component: ClubDetailPage;
  let fixture: ComponentFixture<ClubDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClubDetailPage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
