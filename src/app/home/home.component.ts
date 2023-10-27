import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ConfigurationsService } from '../service/configurations.service';
import gsap from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('videoContainer') videoContainer!: ElementRef;
  @ViewChild('videoElement') videoElement!: ElementRef;

  phoneNumber: String = '7903745027';
  customMessage: String = 'Hello%20there!'


  divHeight!: number;
  divWidth!: number;

  constructor(
    private el: ElementRef,
    private scroll: ConfigurationsService,
  ){

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.scroll.init();
      this.heroSection();
      this.secondSectionAnimation();
      this.thirdSectionAnimation();
      this.fourthSectionAnimation();
      this.fifthSectionAnimation();
      this.borderAnimation();
    }, 200)
  }

  ngOnDestroy(): void {
    this.scroll.destroy()
  }

  introCards = [
    {
      title: "Lorem ipsum dolor",
      body: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem alias ipsa quos fugit voluptas minima eligendi ducimus recusandae explicabo, laudantium minus nostrum dolorem quisquam inventore rem provident voluptate iure libero.
      Culpa debitis dicta ea quam error accusantium ipsa, quos laudantium, sed omnis, voluptate modi ipsum temporibus. Repudiandae error nihil praesentium sit cupiditate odio aliquid fuga. Iure et reiciendis ratione vel.`,
    },
    {
      title: "Lorem ipsum dolor",
      body: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem alias ipsa quos fugit voluptas minima eligendi ducimus recusandae explicabo, laudantium minus nostrum dolorem quisquam inventore rem provident voluptate iure libero.
      Culpa debitis dicta ea quam error accusantium ipsa, quos laudantium, sed omnis, voluptate modi ipsum temporibus. Repudiandae error nihil praesentium sit cupiditate odio aliquid fuga. Iure et reiciendis ratione vel.`,
    },
    {
      title: "Lorem ipsum dolor",
      body: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem alias ipsa quos fugit voluptas minima eligendi ducimus recusandae explicabo, laudantium minus nostrum dolorem quisquam inventore rem provident voluptate iure libero.
      Culpa debitis dicta ea quam error accusantium ipsa, quos laudantium, sed omnis, voluptate modi ipsum temporibus. Repudiandae error nihil praesentium sit cupiditate odio aliquid fuga. Iure et reiciendis ratione vel. `,
    },
  ]

  assurancePointers = [
    {
      icon: ``,
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      alt: "Lorem ipsum"
    },
    {
      icon: ``,
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      alt: "Lorem ipsum "
    },
    {
      icon: ``,
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      alt: "Lorem ipsum "
    },
    {
      icon: ``,
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      alt: "Lorem ipsum "
    },
  ]

  customers = [
    {
      profile: "",
      review: "From the moment I stepped into this hidden oasis, I was enveloped by a sense of serenity amidst lush greenery and towering mango trees.",
      name: "Spoorthi",
      company: "Kang Bakso"
    },
    {
      profile: "",
      review: "The resort's thoughtful blend of traditional charm and modern comfort truly impressed me. The cozy Couples Hut Retreat offered the perfect escape for me and my partner.  ",
      name: "Mas Yhanto",
      company: "Kang Bakso"
    }
  ]


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
    tl.from(".video-container", {
      scale: 0.69,
      opacity: 0,
      delay: -0.38,
      duration: 0.9,
    })
  }

  secondSectionAnimation() {
    const tl2 = gsap.timeline(
      {
        scrollTrigger: {
          trigger: "#section-2",
          start: "top center",
          end: "top bottom",
        }
      }
    );
    tl2.from(".heading h2", {
      y: 50,
      opacity: 0,
      duration: 0.3,
      stagger: 0.3
    });
    tl2.from(".sub-heading-col p", {
      y: 50,
      opacity: 0,
      duration: 0.3,
      stagger: 0.1
    });
    tl2.from(".header-img  .cover", { scaleX: 0, transformOrigin: "left", stagger: 0.2 });

    tl2.to(".header-img  .cover", { scaleX: 0, transformOrigin: "right", stagger: 0.2 }, "reveal");
    tl2.from(".header-img img", { opacity: 0, scale: 0.92 }, "reveal");
  }

  thirdSectionAnimation() {
    const tl3 = gsap.timeline(
      {
        scrollTrigger: {
          trigger: "#section-3",
          start: "top center",
          end: "top bottom",
        }
      }
    );
    tl3.from(".intro-header h2", {
      y: 50,
      opacity: 0,
      duration: 0.4,
      stagger: 0.3
    });
    tl3.from(".intro-card", {
      y: 50,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2
    });
  }

  fourthSectionAnimation() {
    const tl4 = gsap.timeline(
      {
        scrollTrigger: {
          trigger: "#section-4",
          start: "top center",
          end: "top bottom",
        }
      }
    );
    tl4.from(".assurance-header h2", {
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.3
    });
    tl4.from(".assurance-body-img  .cover", { scaleX: 0, duration: 0.6, transformOrigin: "left", stagger: 0.2 });
    tl4.to(".assurance-body-img  .cover", { scaleX: 0, duration: 0.6, transformOrigin: "right", stagger: 0.2 }, "reveal");
    tl4.from(".assurance-body-img img", { opacity: 0, duration: 0.6, scale: 0.92 }, "reveal");
    tl4.from(".assurance-body-content-description p", {
      y: 50,
      opacity: 0,
      delay: -1.6,
      duration: 0.5,
      stagger: 0.3
    });
    tl4.from(".assurance-body-content-list li", {
      y: 50, opacity: 0, duration: 0.5, delay: -1.6, stagger: 0.2
    });
  }

  fifthSectionAnimation() {
    const tl5 = gsap.timeline(
      {
        scrollTrigger: {
          trigger: "#section-5",
          start: "top center",
          end: "top bottom",
        }
      }
    )
    tl5.from(".review", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.3
    })
  }

  borderAnimation() {
    let btn = document.querySelector(".cta-right-body #cta-button") as HTMLElement
    btn?.addEventListener("mouseenter", () => {
      gsap.from(`.cta-button .divider`, {
        scaleX: 0,
        duration: 0.8,
        transformOrigin: "left"
      })
    })
    btn?.addEventListener("mouseleave", () => {
      const tl = gsap.timeline()
      tl.to(`.cta-button .divider`, {
        scaleX: 0,
        duration: 0.8,
        transformOrigin: "right"
      })
      tl.to(`.cta-button .divider`, {
        scaleX: 1,
        duration: 0.8,
        transformOrigin: "left"
      })
    })
  }

  getDimensions(event: Event): void {
    console.log(event)
    const dim = event.target as HTMLImageElement;
    this.divHeight = dim.height;
    this.divWidth = dim.width
  }

}
