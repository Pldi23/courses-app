import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionCourseItemComponent } from './action-course-item/action-course-item.component';
import { AuthGuard } from './auth.guard';
import { CourseListComponent } from './course-list/course-list.component';

const routes: Routes = [
	{
		path: '',
		component: CourseListComponent,
		canActivate: [AuthGuard],
	},
	{
		path: 'new',
		component: ActionCourseItemComponent,
		canActivate: [AuthGuard],
	},
	{
		path: ':id',
		component: ActionCourseItemComponent,
		canActivate: [AuthGuard],
		data: {
			breadcrumb: 'courseId',
		},
	},
];

@NgModule({
  	imports: [RouterModule.forChild(routes)],
  	exports: [RouterModule],
})
export class CourseRoutingModule { }
