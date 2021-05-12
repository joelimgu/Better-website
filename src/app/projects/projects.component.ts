import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      title:"Vex",
      image:"",
      alt:"vex-robotics"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
