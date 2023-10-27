import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ConfigurationsService } from '../service/configurations.service';
import { gsap } from 'gsap';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, AfterViewInit, OnDestroy {

  socialMedia = [
    { "mediaId": "Facebook", "link": "" },
    { "mediaId": "Instagram", "link": "" },
    { "mediaId": "Youtube", "link": "" }
  ]

  copyRightLinks = [
    { "title": "Privacy Policy", "link": "" },
    { "title": "Terms & Condition", "link": "" }
  ]

  constructor(private scroll: ConfigurationsService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.scroll.init();
      this.footerAnimation();
    }, 200)
  }

  ngOnDestroy(): void {
    this.scroll.destroy();
  }

  footerAnimation() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer-top",
        start: "top center",
        end: "top bottom",
      }
    });
    tl.from(".footer", {
      opacity: 0,
      y: 100,
      duration: 0.6
    })
  }


}
