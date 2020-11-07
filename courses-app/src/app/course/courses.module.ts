import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseCreationDateBorderDirective } from '../directive/course-creation-date-border.directive';
import { CourseDurationPipe } from '../pipe/course-duration/course-duration.pipe';
import { OrderByCreationDatePipe } from '../pipe/order/order-by-creation-date.pipe';
import {ModalComponent} from '../shared/modal/modal.component';
import {SharedModule} from '../shared/shared.module';
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
	],
})
export class CoursesModule { }
