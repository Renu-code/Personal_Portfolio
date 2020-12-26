import {Routes} from '@angular/router';

import {AboutComponent} from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { EducationComponent } from '../education/education.component';
import {ProjectsComponent} from '../projects/projects.component';

export const routes:Routes=[
    {path:'home', component:AboutComponent},
    {path:'skills', component:SkillsComponent},
    {path:'education', component:EducationComponent},
    {path:'projects', component:ProjectsComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' }

];