import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  menuOpen = false;
  constructor() {
  }

  ngOnInit(): void {
  }
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

}
