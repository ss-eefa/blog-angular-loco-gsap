import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ConfigurationsService } from '../service/configurations.service';
import gsap from 'gsap';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit,OnInit,OnDestroy {

  acheivmentItem = [
    {title:"60+", subTitle:"Years Experience"},
    {title:"456", subTitle:"Happy Clients"},
    {title:"560+", subTitle:"Projects Done"},
    {title:"120+", subTitle:"Winning Awards"},
  ]

  constructor(private scroll:ConfigurationsService){}

  teams = [
    {profile:"assets/media/img/team1.png", name:"", position:""},
    {profile:"assets/media/img/team2.png", name:"", position:""},
    {profile:"assets/media/img/team1.png", name:"", position:""},
    {profile:"assets/media/img/team2.png", name:"", position:""}
  ]

  ngOnInit(): void {
    // this.scroll.scrollTop()
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.scroll.init()
      this.heroSection()
      this.secondSection()
      this.thirdSection()
      this.fourthSection()
      this.fifthSection()
    }, 200);
  }

  ngOnDestroy(): void {
      this.scroll.destroy()
  }

  private heroSection() {
    const tl = gsap.timeline();
    tl.from(".hero-copy-title h1", {
      y: 250,
      opacity: 0,
      duration: 0.8,
      stagger: 0.3
    })
    tl.from(".hero-copy-body p", {
      y: 40,
      opacity: 0,
      delay: -0.2,
      duration: 0.5,
    })
    tl.from(".header img", {
      scale: 0.69,
      opacity: 0,
      delay: -0.38,
      duration: 0.9,
    })
  }

  private secondSection(){
    const tl2 = gsap.timeline(
      {
        scrollTrigger: {
          trigger: "#section-2",
          start: "top center",
          end: "top bottom",
        }
      }
    )
    tl2.from("#heading-1 h2", {
      y: 50,
      opacity: 0,
      duration: 0.3,
      stagger: 0.3
    });
    tl2.from(".about-copy-img  .cover", { scaleX: 0, transformOrigin: "left", stagger: 0.2});
    tl2.to(".about-copy-img .cover", { scaleX: 0, transformOrigin: "right", stagger: 0.2 }, "reveal");
    tl2.from(".about-copy-img img", { opacity: 0}, "reveal");
    tl2.from("#sub-heading-col-1 h3", {
      y: 50,
      opacity: 0,
      duration: 0.3,
      delay:-0.6,
      stagger: 0.1
    });
    tl2.from("#sub-heading-col-1 p", {
      y: 50,
      opacity: 0,
      delay:-0.6,
      duration: 0.3,
      stagger: 0.1
    });
  }

  private thirdSection(){
    const tl2 = gsap.timeline(
      {
        scrollTrigger: {
          trigger: "#section-3",
          start: "top center",
          end: "top bottom",
        }
      }
    )
    tl2.from(".acheivment-header h2", {
      y: 50,
      opacity: 0,
      duration: 0.3,
      stagger: 0.3
    });
    tl2.from(".acheivment-item-title h1", {
      y: 50,
      opacity: 0,
      duration: 0.3,
      stagger: 0.3
    });
    tl2.from(".acheivment-item-sub-title p", {
      y: 50,
      opacity: 0,
      delay: -1.3,
      duration: 0.3,
      stagger: 0.3
    });
  }

  private fourthSection(){
    const tl2 = gsap.timeline(
      {
        scrollTrigger: {
          trigger: "#section-4",
          start: "top center",
          end: "top bottom",
        }
      }
    )
    tl2.from("#img-2  .cover", { scaleX: 0, transformOrigin: "left", stagger: 0.2});
    tl2.to("#img-2 .cover", { scaleX: 0, transformOrigin: "right", stagger: 0.2 }, "reveal");
    tl2.from("#img-2 img", { opacity: 0}, "reveal");
    tl2.from("#heading-2 h2", {
      y: 50,
      opacity: 0,
      delay:-0.3,
      duration: 0.3,
      stagger: 0.3
    });
    tl2.from("#sub-heading-col-2 h3", {
      y: 50,
      opacity: 0,
      duration: 0.3,
      delay:-0.6,
      stagger: 0.1
    });
    tl2.from("#sub-heading-col-2 p", {
      y: 50,
      opacity: 0,
      delay:-0.6,
      duration: 0.3,
      stagger: 0.1
    });
  }

  private fifthSection(){
    const tl2 = gsap.timeline(
      {
        scrollTrigger: {
          trigger: "#section-5",
          start: "top center",
          end: "top bottom",
        }
      }
    )
    tl2.from(".review-header-title h2", {
      y: 50,
      opacity: 0,
      duration: 0.3,
      stagger: 0.1
    });
    tl2.from(".reviews-card-img  .cover", { scaleX: 0, transformOrigin: "left", stagger: 0.2});
    tl2.to(".reviews-card-img .cover", { scaleX: 0, transformOrigin: "right", stagger: 0.2, delay:-0.4 }, "reveal");
    tl2.from(".reviews-card-img img", { opacity: 0}, "reveal");
    tl2.from(".review-header-button", {
      y: 50,
      opacity: 0,
      delay:-0.6,
      duration: 0.3,
      stagger: 0.3
    });
  }


}
