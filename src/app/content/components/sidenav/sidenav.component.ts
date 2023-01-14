import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
