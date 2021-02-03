import { AuthService } from './shared/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fire-auth-janthird';
  constructor(private AuthService:AuthService){}

  loginWithGoogle() {
    this.AuthService.loginWithGoogle();
  }
}
