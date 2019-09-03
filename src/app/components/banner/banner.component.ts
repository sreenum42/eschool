import { Component, OnInit,ChangeDetectorRef,ChangeDetectionStrategy } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
@Component({
  selector: 'es-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerComponent implements OnInit {
  public carouselTileItems:any;
  public carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg:1, all: 0 },
    speed: 250,
    point: {
      visible: true
    },
    touch: true,
    loop: true,
    interval: { timing: 1500 },
    animation: 'lazy'
  };

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.carouselTileItems=[
      {
        imgSrc:'../../../assets/images/slider/1.jpg',
        header:'Welcome to ',
        span:'University',
        description:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form',
        ctaInfo:'All Courses'

      },
      {
        imgSrc:'../../../assets/images/slider/2.jpg',
        header:'Admission open ',
        span:'2018',
        description:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form',
        ctaInfo:'Admission'

      },
      {
        imgSrc:'../../../assets/images/slider/3.jpg',
        header:'Education ',
        span:'Master',
        description:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form',
        ctaInfo:'All Courses'

      }
    ]
  }

}
