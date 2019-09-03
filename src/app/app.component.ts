import { Component, OnInit, Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'es-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  isSearchVisible: boolean;
  aboutMenu: boolean;
  changeText: boolean;
  allpages: boolean;
  menus: any;
  constructor(private router: Router) {
    // from API you got
    this.isSearchVisible = true;
    this.aboutMenu = false;
    this.changeText = false;
    this.allpages = false;
    // all menu from api
    this.menus = [
      {
        id: 1,
        text: 'Home',
        route: '/',
        menuLevel: 1
      },
      {
        id: 2,
        text: 'About Us',
        route: '/about',
        menuLevel: 3
      }
      ,
      {
        id: 3,
        text: 'Admission',
        route: '/',
        menuLevel: 2
      }
      ,
      {
        id: 4,
        text: 'All Courses',
        route: '/all-courses',
        menuLevel: 4
      }
      ,
      {
        id: 5,
        text: 'All Pages',
        route: '/',
        menuLevel: 5
      }
      ,
      {
        id: 6,
        text: 'Events',
        route: '/event',
        menuLevel: 6
      }
      ,
      {
        id: 7,
        text: 'Students',
        route: '/student',
        menuLevel: 7
      }
      ,
      {
        id: 8,
        text: 'Contac Us',
        route: '/contact',
        menuLevel: 8
      }

    ];
  }
  ngOnInit() {
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0);

    });
}
}

