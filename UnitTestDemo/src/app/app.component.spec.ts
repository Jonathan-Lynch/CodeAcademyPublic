import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'UnitTestDemo'`, () => {
    expect(app.title).toEqual('UnitTestDemo');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('UnitTestDemo');
  });

  it('should have property count', () => {
    expect(app.count).toEqual(0);
  });

  it('should render count', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#count').textContent).toEqual(app.count.toString());
  });

  it('should have method increment', () => {
    expect(app.increment).toBeDefined();
  });

  it('should increment count by one when increment() is called', () => {
    const initialValue = app.count;
    app.increment();
    expect(app.count).toEqual(initialValue + 1);
  });
});
