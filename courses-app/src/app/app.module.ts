import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CoursesModule } from './course/courses.module';
import { FilterByTitlePipe } from './pipe/filter/filter-by-title.pipe';

@NgModule({
	declarations: [
		AppComponent,
		FilterByTitlePipe,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		CoreModule,
		CoursesModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
