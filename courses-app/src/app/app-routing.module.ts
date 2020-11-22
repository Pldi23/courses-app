import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/login',
		pathMatch: 'full',
	},
	{
		path: 'login',
		loadChildren: (): any => import('./shared/login/login.module').then((m: any): any => m.LoginModule),
	},
	{
		path: 'courses',
		loadChildren: (): any => import('./course/courses.module').then((m: any): any => m.CoursesModule),
	},
	{
		path: '**',
		loadChildren: (): any => import('./shared/not-found/not-found.module').then((m: any): any => m.NotFoundModule),
	},
	];

@NgModule({
  	imports: [RouterModule.forRoot(routes)],
  	exports: [RouterModule],
})
export class AppRoutingModule { }
