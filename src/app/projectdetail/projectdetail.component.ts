import { Component, OnInit ,Input} from '@angular/core';


import {Project} from '../shared/project';

import {flyInOut, expand} from '../animations/app.animation';
  


@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.component.html',
  styleUrls: ['./projectdetail.component.scss'],
  host:{
    '[@flyInOut]':'true',
    'style':'display:block;'

  },
  animations:[
    flyInOut(),
    expand()
  ]
})
export class ProjectdetailComponent implements OnInit {

  @Input()
  project:Project;

  constructor() { }

  ngOnInit(): void {
  }
  
 

}
