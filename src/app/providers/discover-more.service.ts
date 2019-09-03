import { Injectable } from '@angular/core';
import { DiscoverMore } from "../model/discover-more.model";
@Injectable()
export class DiscoverMoreService {
 private discoverMoreList: DiscoverMore[];
  constructor() {
    this.discoverMoreList = [];
  }

  getDiscoverMoreItems() {
    // need to call an API to fetch all info
    this.discoverMoreList = [
      {
        id: '001',
        displayText: 'Academics',
        displayValue: '/about',
        imgSrc: '../assets/images/h-about.jpg',
        isVisible: true
      },
      {
        id: '002',
        displayText: 'Admission',
        displayValue: '/admission',
        imgSrc: '../assets/images/h-adm1.jpg',
        isVisible: true
      },
      {
        id: '003',
        displayText: 'Students profile',
        displayValue: '/dashboard',
        imgSrc: '../assets/images/h-cam.jpg',
        isVisible: true
      },
      {
        id: '004',
        displayText: 'Research & Education',
        displayValue: '/research',
        imgSrc: '../assets/images/h-res.jpg',
        isVisible: true
      },
      {
        id: '005',
        displayText: 'Courses',
        displayValue: '/all-courses',
        imgSrc: '../assets/images/h-about1.jpg',
        isVisible: true
      },
      {
        id: '006',
        displayText: 'Exam Time Line',
        displayValue: '/timeline',
        imgSrc: '../assets/images/h-adm.jpg',
        isVisible: true
      },
      {
        id: '007',
        displayText: 'Seminar 2018',
        displayValue: '/seminar',
        imgSrc: '../assets/images/h-cam1.jpg',
        isVisible: true
      },
      {
        id: '008',
        displayText: 'Events',
        displayValue: '/event',
        imgSrc: '../assets/images/h-res1.jpg',
        isVisible: false
      }
    ];
    return this.discoverMoreList;
  }
}
