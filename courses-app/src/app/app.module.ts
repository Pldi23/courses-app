import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesModule } from './course/courses.module';
import { FilterByTitlePipe } from './pipe/filter/filter-by-title.pipe';
import { SharedModule } from './shared/shared.module';

@NgModule({
	declarations: [
		AppComponent,
		FilterByTitlePipe,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SharedModule,
		CoursesModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
