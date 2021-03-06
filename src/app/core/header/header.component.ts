import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { UserService } from '../user/user.service';
import { User } from '../user/user';

@Component({
  selector: 'mgsn-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  user$: Observable<User>;

  constructor(
      private userService: UserService,
      private router: Router
      ) { 
    this.user$ = userService.getUser();
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['h']);
  }
}
