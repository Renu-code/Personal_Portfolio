import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {flyInOut, expand} from '../animations/app.animation';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host:{
    '[@flyInOut]':'true',
    'style':'display:block;'

  },
  animations:[
    flyInOut(),
    expand()
  ]
})
export class AboutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onProjects()
  {
    this.router.navigate(['/projects']);
  }
  onSkills()
  {
    this.router.navigate(['/skills']);
  }
  onEducation()
  {
    this.router.navigate(['/education']);
  }

}
