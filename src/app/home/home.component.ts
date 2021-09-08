/* eslint no-useless-constructor: 0 */
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'

import { Iskill } from '../interfaces'
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  constructor (private router: Router) { }

  ngOnInit (): void { }

  @ViewChild('skill_logo') skillLogo: ElementRef;
  @ViewChild('hello_title') helloTitle: ElementRef;
  @ViewChild('mediaBtnImg') mediaImg: ElementRef;

  title = 'personal-site';

  a='assets/img/JS_logo.svg'
  skillDisplay = {
    skill_text: '',
    img_path: '',
    alt: ''
  }

  ghBtnData = {
    action: () => window.open('https://github.com/joelimgu'),
    icon: 'assets/img/GitHub_logo.svg',
    alt: 'GitHub',
    overlayPath: 'assets/img/external_link.svg'
  }

  emailBtnData = {
    icon: 'assets/img/email_logo.svg',
    action: () => this.copyText('joelimgu@gmail.com', event),
    alt: 'email',
    overlayPath: 'assets/img/copy.svg'
  }

  phoneBtnData = {
    icon: 'assets/img/phone_logo.svg',
    action: (event) => this.copyText('+34617958317', event),
    alt: 'phone',
    overlayPath: 'assets/img/copy.svg'
  }

  inBtnData = {
    action: () => window.open('https://www.linkedin.com/in/joel-imbergamo-guasch-3431b21a5/'),
    icon: 'assets/img/linkedin_logo.svg',
    alt: 'LinkedIn',
    overlayPath: 'assets/img/external_link.svg'
  }

  sleep (ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  copyText (text: string, event) {
    const el: HTMLElement = event.target
    el.style.animation = ''
    el.style.animation = 'ease-in-out .3s pop'
    navigator.clipboard.writeText(text).then()
  }

  ngAfterViewInit () {
    this.startAnimation().then()
  }

  async startAnimation () {
    await this.sleep(1000)
    await this.skillsAnimation()
  }

  async changeToOverlay (event) {
    const el: HTMLImageElement[] = event.target.childNodes
    el[1].style.animation = 'ease-in-out .2s vanish-up forwards'
    await this.sleep(200)
    el[1].style.display = 'none'
    el[0].style.display = 'inline'
    el[0].style.animation = 'ease-in-out .2s appear-up forwards'
  }

  async revertOverly (event) {
    const el: HTMLElement[] = event.target.childNodes
    el[0].style.animation = 'ease-in-out .2s vanish-down forwards'
    await this.sleep(200)
    el[0].style.display = 'none'
    el[1].style.display = 'inline'
    el[1].style.animation = 'ease-in-out .2s appear-down forwards'
  }

  async skillsAnimation () {
    const skills = [
      { name: 'JavaScript', image_path: 'assets/img/JS_logo.svg', alt: 'JS' },
      { name: 'TypeScript', image_path: 'assets/img/TS_logo.png', alt: 'TS' }
    ]
    let skill: Iskill

    for (let i = 0; i < skills.length; i++) {
      skill = skills[i]
      this.skillDisplay.img_path = skill.image_path

      await this.sleep(10)
      this.skillLogo.nativeElement.style.animation = 'disappear 500ms reverse forwards'
      await this.sleep(500)
      this.skillLogo.nativeElement.style.opacity = '100%'
      this.skillLogo.nativeElement.style.animation = 'none'

      await this.sleep(10)

      for (let n = 0; n < skill.name.length; n++) {
        this.skillDisplay.skill_text += skill.name[n]
        await this.sleep(200)
      }
      for (let n = 0; n < skill.name.length; n++) {
        this.skillDisplay.skill_text = this.skillDisplay.skill_text.substring(0, this.skillDisplay.skill_text.length - 1)
        await this.sleep(200)
      }
      await this.sleep(10)
      this.skillLogo.nativeElement.style.animation = 'disappear 500ms normal forwards'
      await this.sleep(500)
      this.skillLogo.nativeElement.style.opacity = '0%'
      this.skillLogo.nativeElement.style.animation = 'none'
    }

    await this.sleep(200)

    this.skillsAnimation()
  }

  goto (route: string) {
    this.router.navigate([route])
  }
}
