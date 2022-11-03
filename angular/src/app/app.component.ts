import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  login: any;
  
  ngOnInit(): void {
    this.login = localStorage.getItem('login')
    let url = window.location.pathname
    
    if (url == '/' || url == '') {
      window.location.assign("/login");
    }
    if (url == '/login/login' || url == '/login/login/') {
      localStorage.removeItem('login')
    }
  }

  logout(){
    localStorage.removeItem('login')
    window.location.assign("/login");
  }
}
