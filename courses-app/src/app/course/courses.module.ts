import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CourseCreationDateBorderDirective } from '../directive/course-creation-date-border.directive';
import { AuthorNamePipe } from '../pipe/author/author-name.pipe';
import { CourseDurationPipe } from '../pipe/course-duration/course-duration.pipe';
import { LocalizedDatePipe } from '../pipe/localized-date/localized-date.pipe';
import { OrderByCreationDatePipe } from '../pipe/order/order-by-creation-date.pipe';
import { ModalComponent } from '../shared/modal/modal.component';
import { SharedModule } from '../shared/shared.module';
import { ActionCourseItemComponent } from './action-course-item/action-course-item.component';
import { AuthorTagComponent } from './action-course-item/author-tag/author-tag.component';
import { AuthorsInputComponent } from './action-course-item/authors-input/authors-input.component';
import { DateInputComponent } from './action-course-item/date-input/date-input.component';
import { DescriptionInputComponent } from './action-course-item/description-input/description-input.component';
import { DurationInputComponent } from './action-course-item/duration-input/duration-input.component';
import { NameInputComponent } from './action-course-item/name-input/name-input.component';
import { AuthorsValidatorDirective } from './action-course-item/validator/authors-validator.directive';
import { CreationDateValidatorDirective } from './action-course-item/validator/creation-date-validator.directive';
import { DurationValidatorDirective } from './action-course-item/validator/duration-validator.directive';
import { CourseItemComponent } from './course-item/course-item.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseRoutingModule } from './course-routing.module';

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
		AuthorNamePipe,
		DescriptionInputComponent,
		NameInputComponent,
		DurationValidatorDirective,
		CreationDateValidatorDirective,
		AuthorsValidatorDirective,
		AuthorTagComponent,
		LocalizedDatePipe,
	],
  	exports: [
		CourseListComponent,
		CourseCreationDateBorderDirective,
		CourseDurationPipe,
		OrderByCreationDatePipe,
		AuthorNamePipe,
		DurationValidatorDirective,
		AuthorsValidatorDirective,
		LocalizedDatePipe,
  	],
	imports: [
		CommonModule,
		FormsModule,
		SharedModule,
		CourseRoutingModule,
		ReactiveFormsModule,
		TranslateModule,
	],
})
export class CoursesModule { }
