import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
  show = false;
  event = false;

  menus = [
    { menu: "Home", route: '/home' },
    { menu: "About", route: '/about-us' },
  ]

  toggle() {
    if (this.show == false) {
      this.show = true;
    } else {
      this.show = false;
    }
  }

  constructor() { }

  ngAfterViewInit(): void {
    this.navbarMenuAnimation()
  }

  ngOnDestroy(): void {
    // this.scroll.destroy();
  }


  navbarMenuAnimation() {
    const hamburger = document.querySelector(".hamburger-button");
    const logo = document.querySelector(".nav .logo");
    const links = document.querySelectorAll(".hamburger-menu li");

    hamburger?.addEventListener("click", () => {
      if (!this.event) {
        this.event = true;
        gsap.to(".cover", {
          scaleY: 1,
          duration: 1.5,
          transformOrigin: "top",
          transition: "cubic-bezier(.33,0,.13,1)"
        })
        gsap.to(".hamburger-menu", {
          opacity: 1,
          duration: 1.5,
          transition: "cubic-bezier(.33,0,.13,1)"
        })
      } else {
        this.event = false;
        gsap.to(".cover", {
          scaleY: 0,
          transformOrigin: "top",
          duration: 1.5,
          transition: "cubic-bezier(.33,0,.13,1)"
        })
        gsap.to(".hamburger-menu", {
          opacity: 0,
          duration: 0.5,
          transition: "cubic-bezier(.33,0,.13,1)"
        })
      }
    })
    logo?.addEventListener("click", () => {
      this.show = false;
      this.event = false;
      console.log("logo is calling")
      gsap.to(".cover", {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.5,
        transition: "cubic-bezier(.33,0,.13,1)"
      })
      gsap.to(".hamburger-menu", {
        opacity: 0,
        duration: 0.5,
        transition: "cubic-bezier(.33,0,.13,1)"
      })
    })
    links?.forEach((e) => {
      e.addEventListener("click", () => {
        this.show = false;
        this.event = false;
        console.log("link is calling")
        gsap.to(".cover", {
          scaleY: 0,
          transformOrigin: "top",
          duration: 1.5,
          transition: "cubic-bezier(.33,0,.13,1)"
        })
        gsap.to(".hamburger-menu", {
          opacity: 0,
          duration: 0.5,
          transition: "cubic-bezier(.33,0,.13,1)"
        })
      })
    })
  }
}
