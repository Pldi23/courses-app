import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CourseListComponent} from './course/course-list/course-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'courses', component: CourseListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
