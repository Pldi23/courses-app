import { Injectable } from '@angular/core';
import {CourseItem} from './course-item';

@Injectable({
  providedIn: 'root',
})
export class CourseItemsService {

  private courses: CourseItem[] = [
		{id: 1, title: 'Angular lessons', creationDate: '20/20/2020', duration: '90', description: 'Very long description for this course'},
		{id: 2, title: 'React lessons', creationDate: '20/20/2020', duration: '90', description: 'Very long description for this course'},
		{id: 3, title: 'TypeScript lessons', creationDate: '20/20/2020', duration: '90', description: 'Very long description for this course'},
  ];

  constructor() { }

  public fetchAll(): CourseItem[] {
	return this.courses;
  }
}
