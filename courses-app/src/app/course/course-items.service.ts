import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { COURSE_PATH } from '../constant';
import { CourseItem } from './course-item';

@Injectable({
  	providedIn: 'root',
})
export class CourseItemsService {

	constructor(private readonly http: HttpClient) {
	}

  	public getList(): Observable<CourseItem[]> {
		return this.http.get<CourseItem[]>(COURSE_PATH)
			.pipe();
  	}
  	public create(course: CourseItem): Observable<CourseItem> {
  		return this.http.post<CourseItem>(COURSE_PATH, course);
	}
	public getById(id: number): Observable<CourseItem> {
		const path: string = `${COURSE_PATH}/${id}`;
  		return this.http.get<CourseItem>(path);
	}
	public update(course: CourseItem, id: number): Observable<CourseItem> {
		const path: string = `${COURSE_PATH}/${id}`;
		return this.http.patch<CourseItem>(path, course);
	}
	public remove(course: CourseItem): Observable<void> {
		const path: string = `${COURSE_PATH}/${course.id}`;
		return this.http.delete<void>(path);
	}

  	public fetch(start: number, count: number, text: string): Observable<CourseItem[]> {
		const path: string = `${COURSE_PATH}`;
		let params: HttpParams = new HttpParams();
		if (text !== undefined) {
			params = params.set('textFragment', text);
		}
		params = params.set('sort', 'date');
		params = params.set('count', count.toString());
		params = params.set('start', start.toString());
		return this.http.get<CourseItem[]>(path, {params: params});
  	}
}
