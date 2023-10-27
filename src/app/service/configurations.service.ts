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
