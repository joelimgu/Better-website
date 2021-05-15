import { Component, ElementRef, OnInit } from '@angular/core';

import { Iskill } from '../interfaces';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  @ViewChild('skill_logo') skill_logo: ElementRef;
  @ViewChild('hello_title') hello_title: ElementRef;

  title = 'personal-site';
  a="assets/img/JS_logo.svg"
  skill_dysplay = {
    skill_text:"",
    img_path:"",
    alt:""
  }


  gh_btn_data = {
    action: () => window.open("https://github.com/joelimgu"),
     icon:"assets/img/GitHub_logo.svg",
      alt:"GitHub",
  }

  in_btn_data = {
      action: () => window.open("https://www.linkedin.com/in/joel-imbergamo-guasch-3431b21a5/"),
       icon:"assets/img/linkedin_logo.svg",
        alt:"LinkedIn",
  }


  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  ngAfterViewInit(){
    this.start_animation();
    } 

  async start_animation(){
    await this.sleep(1000);
    this.skills_animation();

  }

  async skills_animation(){
    let skills = [
      {name:"JavaScript",image_path:"assets/img/JS_logo.svg",alt:"JS"},
      {name:"TypeScript",image_path:"assets/img/TS_logo.png",alt:"TS"},
    ];
    let skill: Iskill
    

    for (let i = 0; i< skills.length; i++){
      skill = skills[i]
      this.skill_dysplay.img_path = skill.image_path;

      await this.sleep(10)
      this.skill_logo.nativeElement.style.animation = 'disapear 500ms reverse forwards'
      await this.sleep(500)
      this.skill_logo.nativeElement.style.opacity = '100%'
      this.skill_logo.nativeElement.style.animation = 'none'

      await this.sleep(10)

      for ( let n = 0 ; n < skill.name.length; n++){
        this.skill_dysplay.skill_text += skill.name[n];
        await this.sleep(200);
      }
      for ( let n = 0 ; n < skill.name.length; n++){
        this.skill_dysplay.skill_text = this.skill_dysplay.skill_text.substring(0, this.skill_dysplay.skill_text.length-1);
        await this.sleep(200);
      }
      await this.sleep(10)
      this.skill_logo.nativeElement.style.animation = 'disapear 500ms normal forwards'
      await this.sleep(500);
      this.skill_logo.nativeElement.style.opacity = '0%'
      this.skill_logo.nativeElement.style.animation = 'none'

    }
    
    await this.sleep(200);

    this.skills_animation();
  }

  goto(route: string) {
      this.router.navigate([route]);
  }
}
