import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionCourseItemComponent } from './course/action-course-item/action-course-item.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { LoginComponent } from './shared/login/login.component';

const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'courses', component: CourseListComponent },
	{ path: 'courses/:id', component: ActionCourseItemComponent },
	{ path: 'courses/new', component: ActionCourseItemComponent},
	];

@NgModule({
  	imports: [RouterModule.forRoot(routes)],
  	exports: [RouterModule],
})
export class AppRoutingModule { }
