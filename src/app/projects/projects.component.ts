import { Component, OnInit } from '@angular/core';
import {Project} from '../shared/project';

import {PROJECTS} from '../shared/projects';
import {flyInOut, expand} from '../animations/app.animation';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  host:{
    '[@flyInOut]':'true',
    'style':'display:block;'

  },
  animations:[
    flyInOut(),
    expand()
  ]
})
export class ProjectsComponent implements OnInit {

  projects:Project[]=PROJECTS;

  constructor() { }

  ngOnInit(): void {
  }
 
  selectedProject:Project;

  onSelect(project)
  {
    this.selectedProject=project;
  }

}
