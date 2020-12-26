import { Component, OnInit } from '@angular/core';
import {flyInOut, expand} from '../animations/app.animation';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  host:{
    '[@flyInOut]':'true',
    'style':'display:block;'

  },
  animations:[
    flyInOut(),
    expand()
  ]
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
