import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, AuthComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a success message on correct login', () => {
    component.loginForm.setValue({
      username: 'testuser',
      password: 'password'
    });
    component.login();
    fixture.detectChanges();
    expect(component.message).toBe('Login successful');
  });

  it('should display an error message on incorrect login', () => {
    component.loginForm.setValue({
      username: 'wronguser',
      password: 'wrongpassword'
    });
    component.login();
    fixture.detectChanges();
    expect(component.message).toBe('Invalid username or password');
  });
});
