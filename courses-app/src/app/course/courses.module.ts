import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { CourseCreationDateBorderDirective } from '../directive/course-creation-date-border.directive';
import { CourseDurationPipe } from '../pipe/course-duration/course-duration.pipe';
import { OrderByCreationDatePipe } from '../pipe/order/order-by-creation-date.pipe';
import { ModalComponent } from '../shared/modal/modal.component';
import { SharedModule } from '../shared/shared.module';
import { ActionCourseItemComponent } from './action-course-item/action-course-item.component';
import { AuthorsInputComponent } from './action-course-item/authors-input/authors-input.component';
import { DateInputComponent } from './action-course-item/date-input/date-input.component';
import { DurationInputComponent } from './action-course-item/duration-input/duration-input.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { CourseListComponent } from './course-list/course-list.component';

@NgModule({
	declarations: [
		CourseListComponent,
		CourseItemComponent,
		CourseCreationDateBorderDirective,
		CourseDurationPipe,
		OrderByCreationDatePipe,
		ModalComponent,
		ActionCourseItemComponent,
		DateInputComponent,
		DurationInputComponent,
		AuthorsInputComponent,
	],
  	exports: [
		CourseListComponent,
		CourseCreationDateBorderDirective,
		CourseDurationPipe,
		OrderByCreationDatePipe,
  	],
	imports: [
		CommonModule,
		FormsModule,
		SharedModule,
		AppRoutingModule,
	],
})
export class CoursesModule { }
