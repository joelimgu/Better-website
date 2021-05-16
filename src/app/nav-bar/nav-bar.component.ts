import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goto(route: string) {
    this.router.navigate([route]);
  }
}
