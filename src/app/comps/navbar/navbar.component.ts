import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor() { }

  ngOnInit(): void {
  }

  // $(document).ready(function() {
  
  //   // SideNav Button Initialization
  //   $(".button-collapse").sideNav();
  //    // SideNav Scrollbar Initialization
  //     var sideNavScrollbar = document.querySelector('.custom-scrollbar');
  //     var ps = new PerfectScrollbar(sideNavScrollbar);
  // });

}
