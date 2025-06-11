import { Component , Renderer2  } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, UserDetailsResponse } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 


  sideBarOpen = true;

 
  constructor(private authService: AuthService, private router: Router,private renderer: Renderer2) { }
  userDetails: UserDetailsResponse | null = null;


  ngOnInit() {
    this.setZoom(1);  // 125% zoom
  }

  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

  logout() {
    this.authService.logout().subscribe(
      response => {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Logout failed', error);
      }
    );
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  setZoom(zoomLevel: number) {
    this.renderer.setStyle(document.body, 'zoom', zoomLevel.toString());
  }
}