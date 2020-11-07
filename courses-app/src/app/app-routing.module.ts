import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './course/course-list/course-list.component';
import { LoginComponent } from './shared/login/login.component';

const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'courses', component: CourseListComponent },
	];

@NgModule({
  	imports: [RouterModule.forRoot(routes)],
  	exports: [RouterModule],
})
export class AppRoutingModule { }
