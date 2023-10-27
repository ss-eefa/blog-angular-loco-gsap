
When I Try to make a full animated project with gsap and locomotive in my angular project. I face lot of issues with locomotive and gsap in my angular project some how i resolve the things that's why i write this blog here i will explain every things from how to install angular gsap and locomotive . I will demonstrate with the help of a sample angular project i will use angular 16.


1. First Install angular in your local machine
`  npm install -g @angular/cli   `
 Note:- I am guessing that you have already npm package manager . If you do not have then you  can download from  https://nodejs.org/en.
2. Create a demo project i will call it *Demo Loco GSAP Angular*
`  ng new demo-loco-gsap-angular  `
3.  Install Bootstrap
` npm install  bootstrap `
4. Import CSS file and JS in file angular.json file
![[Pasted image 20231027002842.png]]
5. Create project Structure
	1. I will Create some components
		` ng g c Component_Name `
		2.  Home Component
		3.  Navbar Component
		4.  Footer Component
		5.  About Component
	3. Create Service For Locomotive and GSAP
	   ` ng g service service/Service_Name`
		1.  Configuration Service
![[Pasted image 20231026222919.png]]
6. Install GSAP and locomotive
` npm i gsap locomotive-scroll `
7. you can check in your package.json file
![[Pasted image 20231026223854.png]]
8. Configure locomotive and GSAP in configure service
```
import { Injectable } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';



@Injectable({
  providedIn: 'root'
})

export class ConfigurationsService {

  private locoScroll!: LocomotiveScroll | null;
  constructor() { }

  init() {
    gsap.registerPlugin(ScrollTrigger);
    const smoothScrollElement = document.querySelector('[data-scroll-container]') as HTMLElement;
    if (!this.locoScroll) {
      this.locoScroll = new LocomotiveScroll({
        el: smoothScrollElement as HTMLElement,
        smooth: true,
      });
    }


    this.locoScroll?.on("scroll", ScrollTrigger.update);


    ScrollTrigger.addEventListener("refresh", () => {
      setTimeout(() => {
        this.locoScroll?.update();
      }, 500);
    });

    const componentInstance = this;
    ScrollTrigger.scrollerProxy(smoothScrollElement, {
      scrollTop(value: any): number {
        const scrollInstance = (componentInstance.locoScroll as any).scroll.instance.scroll;
        return arguments.length ? componentInstance.locoScroll?.scrollTo(value) : scrollInstance.y;
      },
      getBoundingClientRect() {
        return {
          top: 0, left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      },
      pinType: smoothScrollElement.style.transform ? "transform" : "fixed"
    });



    ScrollTrigger.defaults({ scroller: smoothScrollElement });
    ScrollTrigger.refresh();
  }


  destroy() {
    const smoothScrollElement = document.querySelector('[data-scroll-container]') as HTMLElement;
    ScrollTrigger.removeEventListener("refresh", () => { });
    ScrollTrigger.clearScrollMemory()
    ScrollTrigger.scrollerProxy(smoothScrollElement, {})
    ScrollTrigger.refresh()
    ScrollTrigger.disable()
    this.locoScroll?.destroy();
    this.locoScroll = null
  }

}
```
9. you should allow one more things to use locoscroll
 ![[Pasted image 20231027012349.png]]
10.  We will inject this code in our components
11.  Complete code is available in github
https://github.com/ss-eefa/blog-angular-loco-gsap

