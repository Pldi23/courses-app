import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CourseItemComponent } from './course-item/course-item.component';
import { CourseListComponent } from './course-list/course-list.component';

@NgModule({
  declarations: [CourseListComponent, CourseItemComponent],
  exports: [
	CourseListComponent,
  ],
  imports: [
	CommonModule,
  ],
})
export class CoursesModule { }
