import { Component, OnInit } from '@angular/core';
import {IProject} from '../interfaces'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {
  constructor(private http : HttpClient) { }


  projects: Array<IProject>;


  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.retrieve_projects();
  } 

  retrieve_projects(){
    this.http.get<Array<Array<IProject>>>("http://206.81.16.50:49153/my_website/projects").subscribe((msg: Array<Array<IProject>>) => {
    console.log(msg)
    this.projects = msg[0]
    })
  }
}
