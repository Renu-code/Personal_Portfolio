import { Component, OnInit } from '@angular/core';

import {flyInOut, expand} from '../animations/app.animation';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  host:{
    '[@flyInOut]':'true',
    'style':'display:block;'

  },
  animations:[
    flyInOut(),
    expand()
  ]
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  

}
