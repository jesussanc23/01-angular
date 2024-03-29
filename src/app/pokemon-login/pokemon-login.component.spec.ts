import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonLoginComponent } from './pokemon-login.component';

describe('PokemonLoginComponent', () => {
  let component: PokemonLoginComponent;
  let fixture: ComponentFixture<PokemonLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokemonLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(PokemonLoginComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Welcome to the pokemon app');
  });
});
